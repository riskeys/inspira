import { Context, Next } from "@hono/hono";
import { valibot } from "../lib/deps.ts";

export interface Logger {
  info: (req: unknown) => void;
}

export const setLogger = async (c: Context, n: Next) => {
  let correlationId: string = "";
  if (c.req.header("X-Correlation-ID") === undefined) {
    correlationId = crypto.randomUUID();
  } else {
    correlationId = c.req.header("X-Correlation-ID") || crypto.randomUUID();
  }

  c.res.headers.set("X-Correlation-ID", correlationId);

  c.set("correlationId", correlationId);
  c.set("logger", new LoggerImpl(correlationId));
  await n();
};

enum LoggerLevel {
  Debug,
  Info,
  Warning,
  Error,
}

class LoggerImpl implements Logger {
  private readonly level: LoggerLevel;

  constructor(private readonly cid: string) {
    const level = valibot.parse(
      valibot.string(),
      Deno.env.get("LOGGER_LEVEL") || "Warning",
    );

    this.level = LoggerLevel[level as keyof typeof LoggerLevel] ??
      LoggerLevel.Warning;
  }

  info(...req: unknown[]) {
    if (this.level > LoggerLevel.Info) {
      return;
    }

    console.info(`[INF] [${this.cid}]`, this.converter(req));
  }

  debug(...req: unknown[]) {
    if (this.level > LoggerLevel.Debug) {
      return;
    }

    this.converter(req);
    console.debug(`[DBG] [${this.cid}]`, this.converter(req));
  }

  private converter(params: unknown[]) {
    return params.map((r) => {
      if (typeof r === "object" && r !== null) {
        try {
          return JSON.stringify(r);
        } catch {
          return r;
        }
      }
      return r;
    }).join(" ");
  }
}
