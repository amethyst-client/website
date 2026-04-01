import Header from "@/components/Header";
import LightRays from "@/components/LightRays";
import ShimmerButton from "@/components/ShimmerButton";
import SiteFooter from "@/components/SiteFooter";

const collectionItems = [
  {
    title: "Amethyst Client",
    status: "Preview",
    summary: "High performance lightweight Minecraft client.",
    points: [
      "Free on launch",
      "Focus on stable frame times",
      "Detailed product page available",
    ],
    cta: "Open Client Page",
    href: "/collections/asdwaftg",
  },
  {
    title: "Amethyst Purge",
    status: "In testing",
    summary: "PaperMC plugin with a 7 day purge event.",
    points: [
      "Team based event flow",
      "Custom structures and special weapons",
      "Status updates are posted in Discord",
    ],
    cta: "View Status",
    href: "/download",
  },
];

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-[#0b0613] text-[#e9e7ff] overflow-x-hidden">
      <Header />

      <main className="relative">
        <section className="relative min-h-[62vh] overflow-hidden flex items-center">
          <div className="absolute inset-0 z-0 bg-[#0b0613]" />
          <div className="pointer-events-none absolute inset-0 z-10">
            <LightRays
              raysOrigin="top-center"
              raysColor="#b78bfe"
              raysSpeed={0.35}
              lightSpread={0.9}
              rayLength={1.4}
              followMouse={true}
              mouseInfluence={0.06}
              className="opacity-40"
            />
          </div>

          <div className="pointer-events-none absolute left-[-2%] top-[12%] z-10 text-[clamp(4rem,15vw,9rem)] font-heading uppercase tracking-tighter text-white/5 select-none">
            PRODUCTS
          </div>
          <div className="pointer-events-none absolute right-[-2%] bottom-[10%] z-10 text-[clamp(4rem,14vw,8rem)] font-heading uppercase tracking-tighter text-white/5 select-none">
            LIST
          </div>

          <div className="relative z-20 mx-auto w-full max-w-6xl px-6 sm:px-12 lg:px-16 pt-24 pb-16">
            <div className="brutal-shell p-6 sm:p-8 lg:p-10">
              <div className="space-y-6">
                <div className="brutal-chip inline-flex items-center gap-4 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-[#a78bfa] font-medium">
                  <span className="h-px w-10 bg-[#a78bfa]/40" />
                  Collections
                </div>
                <h1 className="font-heading uppercase leading-[0.85] tracking-tight text-[#e9e7ff] text-[clamp(2.7rem,7vw,4rem)]">
                  Product Collection
                </h1>
                <p className="max-w-3xl text-sm sm:text-base text-[#F4F6F8]/80 leading-relaxed font-light uppercase tracking-[0.03em]">
                  This page lists all current Amethyst Studios products in one place.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-30 py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-16">
            <div className="grid gap-5 lg:grid-cols-2">
              {collectionItems.map((item) => (
                <article
                  key={item.title}
                  className="brutal-card brutal-shadow-hover group relative overflow-hidden p-6 transition-all duration-300"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="font-heading uppercase text-3xl text-[#e9e7ff]">{item.title}</h2>
                    <span className="text-[10px] uppercase tracking-[0.14em] text-[#c4b5fd]">
                      {item.status}
                    </span>
                  </div>

                  <p className="mt-4 text-sm text-[#a29ada]/80 leading-relaxed uppercase tracking-[0.03em]">
                    {item.summary}
                  </p>

                  <ul className="mt-6 space-y-3 text-[11px] uppercase text-[#a29ada]/70">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 bg-[#8b5cf6]" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10">
                    <ShimmerButton
                      href={item.href}
                      className="shimmer-btn brutal-shadow-hover bg-white/5 border border-white/10 text-white px-8 py-4 text-xs font-bold tracking-widest uppercase w-full"
                    >
                      {item.cta}
                    </ShimmerButton>
                  </div>

                  <div className="absolute bottom-0 right-0 h-2 w-16 bg-[#8b5cf6]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
