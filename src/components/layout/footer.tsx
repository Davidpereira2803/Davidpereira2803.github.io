import Link from "next/link";
export function Footer() { return <footer className="lab-footer"><Link href="/">David Pereira de Magalhães</Link><span>Built with curiosity. Luxembourg.</span><span>© {new Date().getFullYear()}</span></footer>; }
