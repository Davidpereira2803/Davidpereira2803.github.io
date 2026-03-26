import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container mx-auto py-24 px-4 md:px-6 flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="mb-8 text-muted-foreground max-w-xl">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className={buttonVariants({ variant: "ghost", className: "gap-2" })}
      >
        <ArrowLeft size={16} /> Back to Home
      </Link>
    </div>
  );
}
