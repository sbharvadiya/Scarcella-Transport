import Link from "next/link";
import { Container } from "@/components/ui/container";
import { VideoBackground } from "@/components/ui/video-background";
import { images } from "@/lib/images";

export function CareersHero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="relative h-[560px] w-full sm:h-[640px] lg:h-[700px]">
        <VideoBackground
          src="/videos/careers-page_loop.mp4"
          poster={images.depotGateSign.src}
          cropLetterbox
        />
        {/* Rectangle 2: a single 180deg wash from 11.52% to 72% Neutral/950,
            with the -12.66% first stop pushed above the frame so the top of
            the image keeps most of its brightness. */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(24,28,26,0.1152) -12.66%, rgba(24,28,26,0.72) 100%)",
          }}
        />

        <div className="relative flex h-full flex-col">
          <Container className="pt-28 sm:pt-32">
            {/* Frame 175: Body/Sm, 4px gap; only the crumb for the current
                page and the slash are Neutral/0 — "Home" sits at #A3A3A3. */}
            <nav
              className="type-body-sm flex items-center gap-1"
              aria-label="Breadcrumb"
            >
              <Link href="/" className="text-[#A3A3A3] transition-colors hover:text-white">
                Home
              </Link>
              <span className="text-white" aria-hidden>
                /
              </span>
              <span className="text-white">Careers</span>
            </nav>
          </Container>

          <div className="flex flex-1 flex-col justify-end pb-14 sm:pb-16">
            <Container>
              {/* Frame 221: 684 wide, 16px between the H1 and the Body/Lg
                  standfirst. */}
              <h1 className="type-h1 max-w-[684px] text-white">
                Join the Team that makes work a great place to come to
              </h1>
              <p className="type-body-lg mt-4 text-white">
                We Are Hiring a Range of Positions
              </p>
            </Container>
          </div>
        </div>
      </div>
    </section>
  );
}
