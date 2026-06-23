import { LogoMail, LogoWhatsapp } from "@/components/logos/Brand.tsx";

export function Announcement() {
  return (
    <div class="overflow-hidden bg-[#7b2c6f] py-2 text-white">
      <div class="group flex w-max">
        <div class="flex shrink-0 animate-marquee gap-16 px-8 group-hover:[animation-play-state:paused]">
          <span class="hidden">
            📢 Mental Health Awareness Seminar - June 28
          </span>
          <span class="hidden">
            📢 Open Registration for Parenting Workshop
          </span>
          <span class="hidden">📢 Online Counseling Sessions Available</span>
          <span class="flex flex-row justify-center fill-white gap-1">
            <LogoWhatsapp className="h-6 w-6" />{" "}
            {Deno.env.get("WA_NUMBER") || ""}
          </span>
          <span class="flex flex-row justify-center fill-white gap-2">
            <LogoMail className="h-6 w-6" />{" "}
            {Deno.env.get("EMAIL_ADDRESS") || ""}
          </span>
        </div>

        <div
          aria-hidden="true"
          class="flex shrink-0 animate-marquee gap-16 px-8 group-hover:[animation-play-state:paused]"
        >
          <span class="hidden">
            📢 Mental Health Awareness Seminar - June 28
          </span>
          <span class="hidden">
            📢 Open Registration for Parenting Workshop
          </span>
          <span class="hidden">📢 Online Counseling Sessions Available</span>
          <span class="hidden">📢 Corporate Wellness Programs Available</span>
          <span class="flex flex-row justify-center fill-white gap-2">
            <LogoWhatsapp className="h-6 w-6" />{" "}
            {Deno.env.get("WA_NUMBER") || ""}
          </span>
          <span class="flex flex-row justify-center fill-white gap-2">
            <LogoMail className="h-6 w-6" />{" "}
            {Deno.env.get("EMAIL_ADDRESS") || ""}
          </span>
        </div>
      </div>
    </div>
  );
}
