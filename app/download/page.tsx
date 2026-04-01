import Header from "@/components/Header";
import LightRays from "@/components/LightRays";
import ShimmerButton from "@/components/ShimmerButton";
import SiteFooter from "@/components/SiteFooter";

const products = [
  {
    title: "Amethyst Client",
    status: "Preview",
    notes: ["High performance lightweight Minecraft client", "Free on launch", "Public build not ready"],
  },
  {
    title: "Amethyst Purge",
    status: "In testing",
    notes: ["PaperMC plugin with a 7 day purge event", "Teams, custom structures, and special weapons", "Release timing shared in Discord"],
  },
];

const whatToExpect = [
  {
    title: "Real milestones",
    desc: "We only post updates when something was built, tested, or shipped.",
  },
  {
    title: "Public notes",
    desc: "Changes and progress are shared plainly so you always know the current state.",
  },
  {
    title: "Flexible dates",
    desc: "We release when quality is ready.",
  },
];

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-[#0b0613] text-[#e9e7ff] overflow-x-hidden">
      <Header />

      <main className="relative">
        <section className="relative min-h-[70vh] overflow-hidden flex items-center">
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
            STUDIOS
          </div>

          <div className="relative z-20 mx-auto w-full max-w-6xl px-6 sm:px-12 lg:px-16 pt-24 pb-16">
            <div className="brutal-shell grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center p-6 sm:p-8 lg:p-10">
              <div className="space-y-8">
                <div className="brutal-chip inline-flex items-center gap-4 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-[#a78bfa] font-medium">
                  <span className="h-px w-10 bg-[#a78bfa]/40" />
                  Status
                </div>

                <div className="space-y-6">
                  <h1 className="font-heading uppercase leading-[0.85] tracking-tight text-[#e9e7ff] text-[clamp(3rem,7vw,4rem)]">
                    <span className="text-[#c4b5fd] border-b border-[#8b5cf6]/60">Product status.</span>
                  </h1>
                  <p className="max-w-xl text-sm sm:text-base text-[#F4F6F8]/80 leading-relaxed font-light uppercase tracking-[0.03em]">
                    This page tracks what Amethyst Studios is building and what stage each product is in.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-6">
                  <ShimmerButton href="https://discord.gg/WAFac8MxMx" className="shimmer-btn brutal-shadow-hover bg-[#6d28d9] text-white px-10 py-4 text-sm font-bold tracking-widest uppercase">
                    Follow Updates
                  </ShimmerButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-30 py-20" id="download">
          <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-16">
            <div className="brutal-shell flex flex-col lg:flex-row gap-10 lg:items-end mb-12 p-6 sm:p-8">
              <div className="space-y-6 flex-1">
                <div className="brutal-chip inline-flex items-center gap-4 px-3 py-2 text-[10px] uppercase tracking-[0.2em] font-medium text-[#c4b5fd]">
                  <span className="h-px w-10 bg-[#c4b5fd]/40" />
                  Products
                </div>

                <h2 className="font-heading uppercase leading-[0.95] tracking-tight text-[#e9e7ff] text-[clamp(2.5rem,7vw,3.8rem)]">
                  Current status.
                </h2>
              </div>

              <p className="flex-1 max-w-xl text-sm sm:text-base text-[#a29ada]/80 leading-relaxed font-light uppercase tracking-[0.03em]">
                Early stage products are listed here with scope, status, and updates.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              {products.map((card) => (
                <div
                  key={card.title}
                  className="brutal-card brutal-shadow-hover group relative overflow-hidden p-6 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading uppercase text-2xl">{card.title}</h3>
                    <span className="text-[10px] uppercase tracking-[0.14em] text-[#c4b5fd]">
                      {card.status}
                    </span>
                  </div>
                  <ul className="mt-6 space-y-3 text-[11px] uppercase text-[#a29ada]/70">
                    {card.notes.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 bg-[#8b5cf6]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10">
                    <ShimmerButton href="https://discord.gg/WAFac8MxMx" className="shimmer-btn brutal-shadow-hover bg-white/5 border border-white/10 text-white px-8 py-4 text-xs font-bold tracking-widest uppercase w-full">
                      View updates
                    </ShimmerButton>
                  </div>
                  <div className="absolute bottom-0 right-0 h-2 w-16 bg-[#8b5cf6]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative z-30 py-20 bg-white/2" id="expectations">
          <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-16">
            <div className="brutal-shell flex flex-col lg:flex-row gap-10 lg:items-end mb-12 p-6 sm:p-8">
              <div className="space-y-6 flex-1">
                <div className="brutal-chip inline-flex items-center gap-4 px-3 py-2 text-[10px] uppercase tracking-[0.2em] font-medium text-[#c4b5fd]">
                  <span className="h-px w-10 bg-[#c4b5fd]/40" />
                  What to expect
                </div>

                <h2 className="font-heading uppercase leading-[0.95] tracking-tight text-[#e9e7ff] text-[clamp(2.5rem,7vw,3.8rem)]">
                  How we ship.
                </h2>
              </div>

              <p className="flex-1 max-w-xl text-sm sm:text-base text-[#a29ada]/80 leading-relaxed font-light uppercase tracking-[0.03em]">
                Clear updates, direct expectations, and release notes with no extra noise.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {whatToExpect.map((item) => (
                <div key={item.title} className="brutal-card p-6">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-[#e9e7ff]">{item.title}</h3>
                  <p className="mt-4 text-sm text-[#a29ada]/70 leading-relaxed uppercase tracking-[0.03em]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
