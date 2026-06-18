export const config = {
  link: {
    insta: Deno.env.get("LINK_IG") || "",
    whatsapp: Deno.env.get("LINK_WA") || "",
  },
  email: Deno.env.get("EMAIL_ADDRESS") || "",
};
