const DEFAULT_SITE_URL = "https://devguardian.site";
const DEFAULT_CALENDLY_URL = "https://calendly.com/dev-guardian/30min?hide_gdpr_banner=1";

function withoutTrailingSlash(value: string) {
  return value.replace(/\/+$/, "");
}

export const siteName = "DevGuardian";
export const siteUrl = withoutTrailingSlash(
  process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL
);
export const contactEmail = "team@devguardian.site";
export const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "GTM-T5MJ5MRQ";
export const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || DEFAULT_CALENDLY_URL;

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteUrl}/`).toString();
}
