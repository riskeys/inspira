import { Buffer } from "node:buffer";

export async function hashPassword(password: string) {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(password),
    "PBKDF2",
    false,
    ["deriveBits"],
  );

  const bits = await crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      salt: enc.encode("static-salt"), // later: per-user salt
      iterations: 100_000,
      hash: "SHA-256",
    },
    key,
    256,
  );

  return Buffer.from(bits).toString("hex");
}
