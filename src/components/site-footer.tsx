import Link from "next/link";
import { StarLogo } from "@/components/star-logo";
import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";
import {
  GITHUB_PROFILE,
  LINKEDIN_PROFILE,
  TWITTER_PROFILE,
  INSTAGRAM_PROFILE,
} from "@/data/profile";

const SOCIALS = [
  { label: "GitHub", href: GITHUB_PROFILE, Icon: FaGithub },
  { label: "LinkedIn", href: LINKEDIN_PROFILE, Icon: FaLinkedinIn },
  { label: "Twitter", href: TWITTER_PROFILE, Icon: FaXTwitter },
  { label: "Instagram", href: INSTAGRAM_PROFILE, Icon: FaInstagram },
] as const;

// The static footer's year is evaluated with the server module, not after hydration.
const YEAR = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#0c0c0c] px-[4.5vw] py-8">
      <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <Link href="#home" className="flex items-center gap-2.5">
          <StarLogo className="size-5 text-white" />
          <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-white">
            Irshad Ahamed
          </span>
        </Link>

        <ul className="flex items-center gap-7">
          {SOCIALS.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex items-center gap-2 text-white/50 transition-colors hover:text-white"
              >
                <Icon className="size-4" aria-hidden="true" />
                <span className="hidden text-[12px] sm:inline">{label}</span>
              </a>
            </li>
          ))}
        </ul>

        <p className="font-tech text-[11px] uppercase tracking-[0.18em] text-white/40">
          © {YEAR} — Built for a better tomorrow
        </p>
      </div>
    </footer>
  );
}
