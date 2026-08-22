"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Figma "Share Post" — a share control on each blog card.
 *
 * The card itself is a link, so the trigger stops propagation: clicking share
 * must open the panel rather than navigating to the post. The panel opens as a
 * viewport-centred modal over a backdrop, and closes on backdrop click or Escape.
 */
export function SharePost({
  slug,
  title,
  inline = false,
}: {
  slug: string;
  title: string;
  /** Render the targets directly instead of behind the modal trigger. */
  inline?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // The supplied artwork already draws its own 56px rounded plate, so the
  // button contributes only the hit area, focus ring and pointer cursor.
  const tile =
    "cursor-pointer rounded-xl transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-bright";

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);

    // The modal covers the viewport, so the page behind it must not scroll.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  // Built at click time: the server render has no origin to resolve against.
  const postUrl = () =>
    typeof window === "undefined" ? "" : `${window.location.origin}/blog/${slug}`;

  const openShareWindow = (href: string) => {
    window.open(href, "_blank", "noopener,noreferrer,width=600,height=640");
    setOpen(false);
  };

  const targets = [
    {
      label: "Share on Facebook",
      icon: <FacebookIcon />,
      onClick: () =>
        openShareWindow(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl())}`,
        ),
    },
    {
      label: "Share on LinkedIn",
      icon: <LinkedInIcon />,
      onClick: () =>
        openShareWindow(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl())}`,
        ),
    },
    {
      label: "Share on X",
      icon: <XIcon />,
      onClick: () =>
        openShareWindow(
          `https://twitter.com/intent/tweet?url=${encodeURIComponent(
            postUrl(),
          )}&text=${encodeURIComponent(title)}`,
        ),
    },
  ];

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(postUrl());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked by permissions; leave the panel open so the
      // user can copy from the address bar instead of failing silently.
      setCopied(false);
    }
  };

  // Article foot: the reader has finished the piece, so the targets are shown
  // directly rather than behind the modal. Figma renders these on the neutral
  // plate instead of the brand colours the modal uses.
  if (inline) {
    return (
      <div className="flex items-center gap-4">
        {targets.map((t) => (
          <button
            key={t.label}
            type="button"
            aria-label={t.label}
            onClick={t.onClick}
            className={cn(tile, "[&_rect]:fill-[#DFE1DB] [&_path]:fill-ink")}
          >
            {t.icon}
          </button>
        ))}
        <button
          type="button"
          aria-label={copied ? "Link copied" : "Copy link"}
          onClick={copyLink}
          className={tile}
        >
          {copied ? <CopiedIcon /> : <LinkIcon />}
        </button>
      </div>
    );
  }

  return (
    <div className="shrink-0">
      <button
        type="button"
        aria-label={`Share "${title}"`}
        aria-expanded={open}
        aria-haspopup="dialog"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpen((v) => !v);
        }}
        className={cn(
          "flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-neutral-600 transition-colors",
          "hover:bg-surface hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-bright",
          open && "bg-surface text-ink",
        )}
      >
        <ShareIcon />
      </button>

      {open ? (
        <div
          // Fixed to the viewport so the panel sits dead-centre on screen
          // regardless of which card in the grid opened it.
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setOpen(false);
          }}
        >
          <div className="absolute inset-0 bg-ink/50" aria-hidden />

          <div
            role="dialog"
            aria-modal="true"
            aria-label="Share post"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            className="relative w-full max-w-[384px] rounded-2xl border border-line bg-white p-8 shadow-[0_24px_64px_rgba(24,28,26,0.24)]"
          >
            {/* Figma: Archivo Medium 24/32, -0.72px tracking, Neutral/950. */}
            <p className="text-2xl font-medium leading-8 tracking-[-0.72px] text-ink">
              Share Post
            </p>

            <div className="mt-6 flex items-center gap-4">
              {targets.map((t) => (
                <button
                  key={t.label}
                  type="button"
                  aria-label={t.label}
                  onClick={t.onClick}
                  className="cursor-pointer rounded-xl transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-bright"
                >
                  {t.icon}
                </button>
              ))}
              <button
                type="button"
                aria-label={copied ? "Link copied" : "Copy link"}
                onClick={copyLink}
                className="cursor-pointer rounded-xl transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-bright"
              >
                {copied ? <CopiedIcon /> : <LinkIcon />}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function ShareIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        opacity="0.4"
        d="M24.532 23.2512C24.363 23.2512 24.185 23.2242 23.993 23.1652C22.909 22.8352 22.822 21.6262 22.854 20.7412C22.646 20.7372 22.439 20.7312 22.235 20.7262C20.82 20.6892 19.358 20.6512 18.068 20.9562C16.9 21.2322 15.896 21.8562 14.833 22.5172C14.686 22.6092 14.539 22.7002 14.392 22.7902C14.161 22.9322 13.871 22.9372 13.634 22.8052C13.397 22.6722 13.25 22.4222 13.25 22.1512C13.25 17.7822 15.478 15.0142 19.524 14.3562C20.577 14.1852 21.647 14.2052 22.684 14.2242C22.74 14.2252 22.797 14.2262 22.853 14.2272C22.823 13.3452 22.917 12.1512 23.993 11.8222C24.973 11.5252 25.66 12.1362 26.611 12.9822C26.771 13.1242 26.945 13.2802 27.138 13.4472L28.885 14.9642C30.088 16.0082 30.75 16.5842 30.75 17.4942C30.75 18.4042 30.09 18.9772 28.891 20.0192L27.138 21.5412C26.886 21.7602 26.667 21.9612 26.473 22.1392C25.812 22.7472 25.263 23.2512 24.532 23.2512ZM24.453 21.7372C24.607 21.7752 24.744 21.6922 25.458 21.0352C25.659 20.8502 25.887 20.6412 26.154 20.4092L27.901 18.8922C28.627 18.2612 29.25 17.7202 29.25 17.4942C29.25 17.2682 28.625 16.7252 27.901 16.0962L26.154 14.5792C25.956 14.4072 25.777 14.2482 25.613 14.1022C25.071 13.6192 24.635 13.2322 24.451 13.2522C24.352 13.3972 24.326 13.8432 24.373 14.5792C24.383 14.7342 24.392 14.8692 24.392 14.9862C24.392 15.4002 24.056 15.7362 23.642 15.7362C23.313 15.7362 22.979 15.7302 22.656 15.7242C21.686 15.7062 20.684 15.6882 19.764 15.8362C16.888 16.3042 15.237 17.9552 14.843 20.7522C15.72 20.2302 16.648 19.7512 17.723 19.4972C19.202 19.1472 20.764 19.1882 22.274 19.2272C22.749 19.2392 23.197 19.2512 23.643 19.2512C24.057 19.2512 24.393 19.5872 24.393 20.0012C24.393 20.1182 24.384 20.2522 24.374 20.4082C24.327 21.1472 24.353 21.5942 24.453 21.7372Z"
        fill="currentColor"
      />
      <path
        d="M19.52 30.25C14.831 30.25 12.478 30.25 10.864 28.64C9.24996 27.028 9.25 24.679 9.25 20C9.25 15.321 9.24996 12.971 10.864 11.36C12.392 9.83501 14.671 9.757 18.566 9.75H18.567C18.981 9.75 19.316 10.085 19.317 10.499C19.317 10.913 18.983 11.25 18.568 11.25C14.757 11.257 12.977 11.37 11.922 12.422C10.748 13.593 10.748 15.734 10.748 20C10.748 24.266 10.748 26.406 11.922 27.578C13.096 28.75 15.242 28.75 19.518 28.75C23.794 28.75 25.939 28.75 27.113 27.578C27.851 26.842 28.158 25.728 28.248 23.47C28.265 23.056 28.608 22.733 29.027 22.75C29.441 22.767 29.763 23.115 29.747 23.529C29.656 25.804 29.361 27.453 28.172 28.639C26.558 30.249 24.205 30.249 19.517 30.249L19.52 30.25Z"
        fill="currentColor"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="56" height="56" rx="12" fill="#0865FF" />
      <path
        d="M31.9098 29.0498L32.3757 25.8163H29.4586V23.7182C29.4586 22.8343 29.8654 21.9709 31.1731 21.9709H32.5V19.2186C32.5 19.2186 31.2959 19 30.145 19C27.7426 19 26.1716 20.5476 26.1716 23.3518V25.8163H23.5V29.0498H26.1716V36.8647C26.7071 36.9544 27.2559 37 27.8151 37C28.3743 37 28.9231 36.9528 29.4586 36.8647V29.0498H31.9098Z"
        fill="white"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="56" height="56" rx="12" fill="#007EBB" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36 36H32.7125V30.4007C32.7125 28.8655 32.1292 28.0075 30.9141 28.0075C29.5922 28.0075 28.9016 28.9003 28.9016 30.4007V36H25.7333V25.3333H28.9016V26.7701C28.9016 26.7701 29.8542 25.0075 32.1177 25.0075C34.3802 25.0075 36 26.3891 36 29.2465V36ZM21.9536 23.9366C20.8745 23.9366 20 23.0553 20 21.9683C20 20.8813 20.8745 20 21.9536 20C23.0328 20 23.9068 20.8813 23.9068 21.9683C23.9068 23.0553 23.0328 23.9366 21.9536 23.9366ZM20.3177 36H23.6214V25.3333H20.3177V36Z"
        fill="white"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="56" height="56" rx="12" fill="#2A2E28" />
      <path
        d="M33.2213 20H35.9803L29.9224 26.7897L37 36H31.4459L27.0973 30.403L22.119 36H19.3599L25.7777 28.738L19 20H24.6921L28.6208 25.1129L33.2213 20ZM32.2556 34.4059H33.7851L23.8884 21.5351H22.2449L32.2556 34.4059Z"
        fill="white"
      />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="56" height="56" rx="12" fill="#DFE1DB" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.9856 27.0144C30.2998 25.3285 27.5665 25.3285 25.8806 27.0144L25.6737 27.2213C25.3808 27.5142 24.9059 27.5142 24.6131 27.2213C24.3202 26.9284 24.3202 26.4535 24.6131 26.1606L24.82 25.9537C27.0916 23.6821 30.7746 23.6821 33.0463 25.9537C35.3179 28.2254 35.3179 31.9084 33.0463 34.18L30.18 37.0463C27.9084 39.3179 24.2254 39.3179 21.9537 37.0463C19.6821 34.7746 19.6821 31.0916 21.9537 28.82L22.4181 28.3556C22.711 28.0627 23.1858 28.0627 23.4787 28.3556C23.7716 28.6485 23.7716 29.1234 23.4787 29.4163L23.0144 29.8806C21.3285 31.5665 21.3285 34.2998 23.0144 35.9856C24.7002 37.6715 27.4335 37.6715 29.1194 35.9856L31.9856 33.1194C33.6715 31.4335 33.6715 28.7002 31.9856 27.0144Z"
        fill="#181C1A"
      />
      <path
        opacity="0.4"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.9856 20.0144C31.2998 18.3285 28.5665 18.3285 26.8806 20.0144L24.0144 22.8806C22.3285 24.5665 22.3285 27.2998 24.0144 28.9856C25.7002 30.6715 28.4335 30.6715 30.1194 28.9856L30.3263 28.7787C30.6192 28.4858 31.0941 28.4858 31.3869 28.7787C31.6798 29.0716 31.6798 29.5465 31.3869 29.8394L31.18 30.0463C28.9084 32.3179 25.2254 32.3179 22.9537 30.0463C20.6821 27.7746 20.6821 24.0916 22.9537 21.82L25.82 18.9537C28.0916 16.6821 31.7746 16.6821 34.0463 18.9537C36.3179 21.2254 36.3179 24.9084 34.0463 27.18L33.5819 27.6444C33.289 27.9373 32.8142 27.9373 32.5213 27.6444C32.2284 27.3515 32.2284 26.8766 32.5213 26.5837L32.9856 26.1194C34.6715 24.4335 34.6715 21.7002 32.9856 20.0144Z"
        fill="#181C1A"
      />
    </svg>
  );
}

/** Copy-link tile, confirmed state: the same 56px plate with a tick swapped in. */
function CopiedIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="56" height="56" rx="12" fill="#DFE1DB" />
      <path
        d="m20.5 28.5 5 5 10-11"
        stroke="#181C1A"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
