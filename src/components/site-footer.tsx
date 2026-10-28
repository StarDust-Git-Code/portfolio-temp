import Link from "next/link";
import { IaMark } from "@/components/ia-mark";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { GITHUB_PROFILE, LINKEDIN_PROFILE } from "@/data/profile";

const SOCIALS = [
  { label: "GitHub", href: GITHUB_PROFILE, Icon: FaGithub },
  { label: "LinkedIn", href: LINKEDIN_PROFILE, Icon: FaLinkedinIn },
] as const;

// The static footer's year is evaluated with the server module, not after hydration.
const YEAR = new Date().getFullYear();

export function SiteFooter() {

  return (
    <footer className="border-t border-foreground/10 px-[4.5vw] py-10">
      <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <Link href="#home" className="flex items-center gap-2.5">
          <IaMark className="size-5" />
          <span className="text-[12px] font-semibold uppercase tracking-[0.22em]">
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
                className="flex items-center gap-2 text-foreground/50 transition-colors hover:text-foreground"
              >
                <Icon className="size-4" aria-hidden="true" />
                <span className="hidden text-[12px] sm:inline">{label}</span>
              </a>
            </li>
          ))}
        </ul>

        <p className="font-tech text-[11px] uppercase tracking-[0.18em] text-foreground/40">
          © {YEAR} — Built for a better tomorrow
        </p>
      </div>
    </footer>
  );
}
