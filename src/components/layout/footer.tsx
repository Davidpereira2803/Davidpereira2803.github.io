import Link from "next/link";
import { SOCIALS } from "@/data/socials";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-black/40 py-12 backdrop-blur-md">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <Link href="/" className="text-xl font-bold tracking-tighter text-white">
            DP<span className="text-primary">M</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Computer Science Student & Robotics AI Enthusiast.
          </p>
        </div>

        <div className="flex gap-6">
          {SOCIALS.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-white transition-colors"
            >
              <social.icon size={20} />
              <span className="sr-only">{social.name}</span>
            </a>
          ))}
        </div>

        <div className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} David Pereira de Magalhães. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
