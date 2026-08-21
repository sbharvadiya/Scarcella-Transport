import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SiteImage } from "@/components/ui/site-image";
import { images } from "@/lib/images";

export function AnnouncementBanner() {
  return (
    <section className="py-10">
      <Container>
        <div className="relative overflow-hidden rounded-3xl">
          <div className="relative h-[300px] w-full sm:h-[260px]">
            <SiteImage {...images.outbackDusk} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/50 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center gap-6 px-8 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-12">
            <div className="max-w-md">
              <h2 className="text-3xl font-medium text-white sm:text-4xl">
                New Adelaide branch
              </h2>
              <p className="mt-2 text-sm text-white/80">
                Two runs a week, Adelaide to Darwin.
              </p>
              <div className="mt-5">
                <Button href="/locations" variant="primary" size="md">
                  Learn More <span aria-hidden>»</span>
                </Button>
              </div>
            </div>
            <div className="flex gap-3">
              {[
                { v: "12", l: "Days" },
                { v: "11", l: "Hrs" },
                { v: "59", l: "Min" },
              ].map((t) => (
                <div
                  key={t.l}
                  className="flex w-20 flex-col items-center justify-center rounded-xl bg-black/40 py-3 text-white backdrop-blur-sm"
                >
                  <span className="text-3xl font-semibold">{t.v}</span>
                  <span className="text-[11px] text-white/60">{t.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
