import Header from "@/components/Header";
import LightRays from "@/components/LightRays";
import ShimmerButton from "@/components/ShimmerButton";

const platforms = [
  {
    title: "Windows",
    status: "Planned",
    notes: ["Public build not ready", "Format to be announced", "Updates on Discord"],
  },
  {
    title: "macOS",
    status: "Planned",
    notes: ["Public build not ready", "Apple Silicon + Intel", "Updates on Discord"],
  },
  {
    title: "Linux",
    status: "Planned",
    notes: ["Public build not ready", "Format to be announced", "Updates on Discord"],
  },
];

const whatToExpect = [
  {
    title: "Small batches",
    desc: "We will open testing in waves so we can respond quickly.",
  },
  {
    title: "Clear updates",
    desc: "We will post changes and progress notes as they happen.",
  },
  {
    title: "No promises",
    desc: "We will not ship until the basics feel solid.",
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
            PRE-BETA
          </div>
          <div className="pointer-events-none absolute right-[-2%] bottom-[10%] z-10 text-[clamp(4rem,14vw,8rem)] font-heading uppercase tracking-tighter text-white/5 select-none">
            AMETHYST
          </div>

          <div className="relative z-20 mx-auto w-full max-w-6xl px-6 sm:px-12 lg:px-16 pt-24 pb-16">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
              <div className="space-y-10">
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-[#a78bfa] font-medium">
                  <span className="h-px w-10 bg-[#a78bfa]/40" />
                  Status
                </div>

                <div className="space-y-6">
                  <h1 className="font-heading uppercase leading-[0.85] tracking-tight text-[#e9e7ff] text-[clamp(3rem,7vw,4rem)]">
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8b5cf6] to-[#c4b5fd]">No public build.</span>
                  </h1>
                  <p className="max-w-xl text-md sm:text-lg text-[#F4F6F8]/80 leading-relaxed font-light">
                    We are still building the client. If you want to follow along or request early access, Discord is where we post updates and testing applications.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-6">
                  <ShimmerButton href="https://discord.gg/WAFac8MxMx" className="shimmer-btn bg-[#6d28d9] text-white px-10 py-4 rounded-md text-sm font-bold tracking-widest uppercase">
                    Join Discord
                  </ShimmerButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-30 py-20" id="download">
          <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-16">
            <div className="flex flex-col lg:flex-row gap-12 lg:items-end mb-16">
              <div className="space-y-6 flex-1">
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-medium text-[#c4b5fd]">
                  <span className="h-px w-10 bg-[#c4b5fd]/40" />
                  Platforms
                </div>

                <h2 className="font-heading uppercase leading-[0.95] tracking-tight text-[#e9e7ff] text-[clamp(2.5rem,7vw,3.8rem)]">
                  Planned support.
                </h2>
              </div>

              <p className="flex-1 max-w-xl text-lg text-[#a29ada]/80 leading-relaxed font-light">
                These are the platforms we are aiming for. Links will appear here when public testing opens.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {platforms.map((card) => (
                <div
                  key={card.title}
                  className="group relative overflow-hidden rounded-md border border-white/10 bg-white/5 p-8 transition-all duration-500 hover:border-[#8b5cf6]/40 hover:bg-white/8"
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
                        <span className="h-1 w-1 rounded-full bg-[#8b5cf6]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10">
                    <ShimmerButton href="https://discord.gg/WAFac8MxMx" className="shimmer-btn bg-white/5 border border-white/10 text-white px-8 py-4 rounded-md text-xs font-bold tracking-widest uppercase w-full">
                      Get notified
                    </ShimmerButton>
                  </div>
                  <div className="absolute -bottom-10 -right-10 h-32 w-32 bg-[#8b5cf6]/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative z-30 py-20 bg-white/2" id="expectations">
          <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-16">
            <div className="flex flex-col lg:flex-row gap-12 lg:items-end mb-16">
              <div className="space-y-6 flex-1">
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-medium text-[#c4b5fd]">
                  <span className="h-px w-10 bg-[#c4b5fd]/40" />
                  What to expect
                </div>

                <h2 className="font-heading uppercase leading-[0.95] tracking-tight text-[#e9e7ff] text-[clamp(2.5rem,7vw,3.8rem)]">
                  We will keep it honest.
                </h2>
              </div>

              <p className="flex-1 max-w-xl text-lg text-[#a29ada]/80 leading-relaxed font-light">
                This page will only list real builds and real information and nothing else.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {whatToExpect.map((item) => (
                <div key={item.title} className="rounded-md border border-white/10 bg-white/5 p-8">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-[#e9e7ff]">{item.title}</h3>
                  <p className="mt-4 text-sm text-[#a29ada]/70 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
