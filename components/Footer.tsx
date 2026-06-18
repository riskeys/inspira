import { CopyrightIcon, Mail, MapPinHouse, PhoneIcon } from "lucide-preact";
import { JSX } from "preact";
import {
  LogoInsta,
  LogoMail,
  LogoWhatsapp,
} from "@/components/logos/Brand.tsx";
import { config } from "@/config/env.ts";

export function Footer() {
  return (
    <>
      <FooterLaptop>
        <Company />
        <QuickLinks />
        <Services />
        <ContactUs />
      </FooterLaptop>
      <Copyright />
    </>
  );
}

function FooterLaptop({ children }: { children: JSX.Element | JSX.Element[] }) {
  return (
    <footer class="bg-gray-100 hidden md:flex flex-row gap-28 items-center justify-center text-black min-h-[50vh]">
      {children}
    </footer>
  );
}

function ContactUs() {
  return (
    <div class="flex flex-col gap-4 h-[40vh] items-start">
      <div class="text-2xl mb-4 font-bold text-c-2">
        Hubungi Kami
        <div class="mt-4 flex justify-start">
          <div class="h-1 w-8 rounded-full bg-c-3"></div>
        </div>
      </div>
      <div class="flex flex-row gap-8">
        <PhoneIcon />
        +62 811 2093 116
      </div>
      <div class="flex flex-row gap-8">
        <Mail />
        biro.inspira@gmail.com
      </div>
      <div class="flex flex-row gap-8 items-start">
        <MapPinHouse />
        <div class="flex flex-col italic">
          <span>Jalan Kawaluyaan Indah I no.20</span>
          <span>Bandung, Indonesia</span>
        </div>
      </div>
    </div>
  );
}

function Services() {
  return (
    <div class="flex flex-col gap-4 h-[40vh] items-start">
      <div class="text-2xl mb-4 font-bold text-c-2">
        Layanan Kami
        <div class="mt-4 flex justify-start">
          <div class="h-1 w-8 rounded-full bg-c-3"></div>
        </div>
      </div>
      <div class="flex flex-row gap-8">
        Individual Counseling
      </div>
      <div class="flex flex-row gap-8">
        Individual Counseling
      </div>
      <div class="flex flex-row gap-8">
        Individual Counseling
      </div>
      <div class="flex flex-row gap-8">
        Individual Counseling
      </div>
    </div>
  );
}

function QuickLinks() {
  return (
    <div class="flex flex-col gap-2 h-[40vh] items-start">
      <div class="text-2xl mb-6 font-bold text-c-2">
        Quick Links
        <div class="mt-4 flex justify-start">
          <div class="h-1 w-8 rounded-full bg-c-3"></div>
        </div>
      </div>
      <div class="flex flex-row">
        Home
      </div>
      <div class="flex flex-row">
        Services
      </div>
      <div class="flex flex-row">
        About
      </div>
      <div class="flex flex-row">
        Articles
      </div>
      <div class="flex flex-row">
        Articles
      </div>
    </div>
  );
}

function Company() {
  return (
    <div class="flex flex-col max-w-96 gap-4 h-[40vh] items-start">
      <div class="text-4xl mb-4 font-bold text-c-2">
        Inspira
      </div>
      <div class="flex flex-row text-lg/relaxed gap-8">
        Memberikan layanan psikologi untuk berbagai kebutuhan meliputi kebutuhan
        individu, pendidikan, maupun kebutuhan bisnis dan perusahaan.
      </div>
      <div class="flex flex-row text-lg/relaxed gap-4 justify-center">
        <a target="_blank" href="https://instagram.com/bipsi.inspira">
          <LogoInsta className="h-10" />
        </a>
        <a target="_blank" href={config.link.whatsapp}>
          <LogoWhatsapp className="h-10" />
        </a>
        <a href={`mailto:${config.email}`}>
          <LogoMail className="h-10" />
        </a>
      </div>
    </div>
  );
}

function Copyright() {
  return (
    <div class="flex flex-row bg-c-1 gap-4 w-full text-sm md:text-lg md:font-semibold h-12 text-c-4 items-center justify-center">
      <CopyrightIcon class="h-4 w-4" />{" "}
      2026 Inspira Psikologi. All rights reserved.
    </div>
  );
}
