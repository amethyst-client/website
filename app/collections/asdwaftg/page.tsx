import Header from "@/components/Header";
import LightRays from "@/components/LightRays";
import ShimmerButton from "@/components/ShimmerButton";
import SiteFooter from "@/components/SiteFooter";

const clientFacts = [
  "High performance render path focused on stable frame times",
  "Lower memory usage and fewer spikes",
  "Clean HUD with simple controls",
  "No tracking and no telemetry",
  "Free on launch",
];

const releaseInfo = [
  "Current status: Public build not ready",
  "Planned platforms: Windows, macOS, Linux",
  "macOS target includes Apple Silicon and Intel",
  "Progress updates are posted in Discord",
];

export default function AmethystClientPage() {
  return (
    <div className="min-h-screen bg-[#0b0613] text-[#e9e7ff] overflow-x-hidden">
      <Header />

      <main className="relative">
        <section className="relative min-h-[65vh] overflow-hidden flex items-center">
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
            CLIENT
          </div>
          <div className="pointer-events-none absolute right-[-2%] bottom-[10%] z-10 text-[clamp(4rem,14vw,8rem)] font-heading uppercase tracking-tighter text-white/5 select-none">
            DETAILS
          </div>

          <div className="relative z-20 mx-auto w-full max-w-6xl px-6 sm:px-12 lg:px-16 pt-24 pb-16">
            <div className="brutal-shell grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start p-6 sm:p-8 lg:p-10">
              <div className="space-y-7">
                <div className="brutal-chip inline-flex items-center gap-4 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-[#a78bfa] font-medium">
                  <span className="h-px w-10 bg-[#a78bfa]/40" />
                  Amethyst Client
                </div>

                <h1 className="font-heading uppercase leading-[0.85] tracking-tight text-[#e9e7ff] text-[clamp(2.7rem,7vw,4rem)]">
                  Product Overview
                </h1>

                <p className="max-w-2xl text-sm sm:text-base text-[#F4F6F8]/80 leading-relaxed font-light uppercase tracking-[0.03em]">
                  This page is based on details from the official Amethyst Client website repository.
                </p>

                <div className="flex flex-wrap items-center gap-6">
                  <ShimmerButton href="https://github.com/amethyst-client/website" className="shimmer-btn brutal-shadow-hover bg-[#6d28d9] text-white px-10 py-4 text-sm font-bold tracking-widest uppercase">
                    Source Repository
                  </ShimmerButton>
                  <ShimmerButton href="https://discord.gg/WAFac8MxMx" className="shimmer-btn brutal-shadow-hover bg-white/5 border border-white/10 text-white px-10 py-4 text-sm font-bold tracking-widest uppercase">
                    Discord Updates
                  </ShimmerButton>
                </div>
              </div>

              <div className="brutal-card p-6">
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#c4b5fd]">Status</p>
                <p className="mt-3 font-heading uppercase text-3xl text-[#e9e7ff]">Preview</p>
                <p className="mt-3 text-xs uppercase text-[#a29ada]/80">Public build is not available yet.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-30 py-18">
          <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-16">
            <div className="grid gap-5 lg:grid-cols-2">
              <article className="brutal-card p-6">
                <h2 className="font-heading uppercase text-3xl text-[#e9e7ff]">Core Features</h2>
                <ul className="mt-6 space-y-3 text-[11px] uppercase text-[#a29ada]/75">
                  {clientFacts.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 bg-[#8b5cf6]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>

              <article className="brutal-card p-6">
                <h2 className="font-heading uppercase text-3xl text-[#e9e7ff]">Release Info</h2>
                <ul className="mt-6 space-y-3 text-[11px] uppercase text-[#a29ada]/75">
                  {releaseInfo.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 bg-[#8b5cf6]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
