import Link from "next/link"
import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GithubIcon className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedinIcon className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <TwitterIcon className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
