"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronUp, ExternalLink } from "lucide-react";
import { cn } from "lib/utils";
import {
  discordDirectoryInviteUrl,
  discordSlimInviteUrl,
  outlineCtaButtonClassName,
  outlineCtaIconClassName,
} from "lib/links";

const discordServers = [
  { label: "Directory", href: discordDirectoryInviteUrl },
  { label: "SLIM", href: discordSlimInviteUrl },
] as const;

const DiscordDropdown = () => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="true"
        className={cn(
          outlineCtaButtonClassName,
          open &&
            "border-[#3b91e6] shadow-[0px_8px_24px_rgba(24,122,220,0.35)]"
        )}
      >
        <Image
          src="/images/homepage/discord.svg"
          width={20}
          height={20}
          alt=""
          aria-hidden
          className={outlineCtaIconClassName}
        />
        Join us on Discord
        <ChevronUp
          className={cn(
            "ml-0.5 h-3.5 w-3.5 transition-transform duration-200 md:h-4 md:w-4",
            !open && "rotate-180"
          )}
          aria-hidden
        />
      </button>

      {open && (
        <div className="absolute left-0 top-[calc(100%+4px)] z-20 min-w-full overflow-hidden rounded-xl border border-[#187adc] bg-[#00142b] py-1 shadow-[0px_8px_24px_rgba(24,122,220,0.35)]">
          {discordServers.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between gap-4 px-4 py-2.5 text-xs text-[#e8e9ea] transition-colors hover:bg-[#187adc]/10 md:text-sm"
            >
              {label}
              <ExternalLink
                className="h-3.5 w-3.5 shrink-0 text-white/70 md:h-4 md:w-4"
                aria-hidden
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DiscordDropdown;
