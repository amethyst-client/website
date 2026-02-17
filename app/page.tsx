"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  const heroRef = useRef<HTMLElement | null>(null);
  const heroLayerRef = useRef<HTMLDivElement | null>(null);
  const heroZoomRef = useRef<HTMLDivElement | null>(null);
  const noiseRef = useRef<HTMLDivElement | null>(null);
  const stickyRef = useRef<HTMLElement | null>(null);
  const horizontalRef = useRef<HTMLElement | null>(null);
  const horizontalTrackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (noiseRef.current) {
        gsap.to(noiseRef.current, {
          backgroundPosition: "220px 220px",
          duration: 18,
          repeat: -1,
          yoyo: true,
          ease: "none",
        });
      }

      if (heroLayerRef.current) {
        gsap.to(heroLayerRef.current, {
          y: 160,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.8,
          },
        });
      }

      if (heroZoomRef.current) {
        gsap.to(heroZoomRef.current, {
          scale: 1.03,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.8,
          },
        });
      }

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el: HTMLElement) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 24 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              once: true,
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-mask]").forEach((el: HTMLElement) => {
        gsap.fromTo(
          el,
          { clipPath: "inset(0 0 100% 0)", y: 24, autoAlpha: 0 },
          {
            clipPath: "inset(0 0 0% 0)",
            y: 0,
            autoAlpha: 1,
            duration: 1.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-scale]").forEach((el: HTMLElement) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, scale: 0.96 },
          {
            autoAlpha: 1,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-slide-left]").forEach((el: HTMLElement) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, x: -40 },
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-slide-right]").forEach((el: HTMLElement) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, x: 40 },
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-line]").forEach((el: HTMLElement) => {
        gsap.fromTo(
          el,
          { scaleX: 0, autoAlpha: 0 },
          {
            scaleX: 1,
            autoAlpha: 1,
            duration: 1,
            ease: "power2.out",
            transformOrigin: "left center",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((el: HTMLElement) => {
        const items = el.querySelectorAll<HTMLElement>("[data-stagger-item]");
        if (items.length === 0) return;
        gsap.fromTo(
          items,
          { autoAlpha: 0, y: 20 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.12,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el: HTMLElement) => {
        const speed = parseFloat(el.dataset.parallax ?? "0");
        if (Number.isNaN(speed) || speed === 0) return;
        gsap.to(el, {
          y: speed,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        });
      });

      ScrollTrigger.matchMedia({
        "(min-width: 1024px)": () => {
          const scenes = gsap.utils.toArray<HTMLElement>("[data-scene]");

          if (scenes.length > 0) {
            gsap.set(scenes, { autoAlpha: 0, y: 18 });
            gsap.set(scenes[0], { autoAlpha: 1, y: 0 });
          }

          if (stickyRef.current && scenes.length > 1) {
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: stickyRef.current,
                start: "top top",
                end: `+=${scenes.length * 340}`,
                scrub: 0.6,
                pin: true,
              },
            });

            const step = 1.1;
            scenes.forEach((el, index) => {
              if (index === 0) return;
              tl.to(scenes[index - 1], { autoAlpha: 0, y: -12, duration: 0.5 }, index * step);
              tl.to(el, { autoAlpha: 1, y: 0, duration: 0.5 }, index * step);
            });
          }

          if (horizontalRef.current && horizontalTrackRef.current) {
            const getDistance = () => {
              const totalWidth = horizontalTrackRef.current?.scrollWidth ?? 0;
              const viewportWidth = horizontalRef.current?.offsetWidth ?? 0;
              return Math.max(totalWidth - viewportWidth, 0);
            };

            gsap.to(horizontalTrackRef.current, {
              x: () => -getDistance(),
              ease: "none",
              scrollTrigger: {
                trigger: horizontalRef.current,
                start: "top top",
                end: () => `+=${getDistance()}`,
                scrub: 0.7,
                pin: true,
                invalidateOnRefresh: true,
              },
            });
          }
        },
        "(max-width: 1023px)": () => {
          const scenes = gsap.utils.toArray<HTMLElement>("[data-scene]");
          gsap.set(scenes, { autoAlpha: 1, y: 0 });
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0613] text-[#e9e7ff]">
      <main className="relative">
        <section ref={heroRef} className="relative min-h-screen overflow-hidden">
          <div
            ref={heroLayerRef}
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 12% 15%, rgba(109,40,217,0.55), transparent 55%), radial-gradient(circle at 72% 18%, rgba(139,92,246,0.25), transparent 45%), linear-gradient(140deg, rgba(11,6,19,0.98), rgba(18,10,31,0.95))",
            }}
          />
          <div
            ref={noiseRef}
            className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-soft-light"
            style={{
              backgroundImage:
                "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"180\" height=\"180\" viewBox=\"0 0 180 180\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.7\" numOctaves=\"1\" stitchTiles=\"stitch\"/></filter><rect width=\"180\" height=\"180\" filter=\"url(%23n)\" opacity=\"0.4\"/></svg>')",
            }}
          />
          <div className="pointer-events-none absolute left-[-12%] top-[8%] text-[clamp(7rem,16vw,11rem)] font-heading uppercase tracking-[-0.05em] text-white/5">
            AMETHYST
          </div>
          <div className="pointer-events-none absolute left-[10%] top-[38%] text-[clamp(6rem,14vw,10rem)] font-heading uppercase tracking-[-0.05em] text-white/6">
            CLIENT
          </div>
          <div ref={heroZoomRef} className="relative mx-auto flex min-h-screen w-[min(92vw,1400px)] items-center px-2 sm:px-6">
            <div className="relative z-10 max-w-3xl space-y-8 pb-12">
              <div className="flex items-center gap-4 text-xs uppercase tracking-tight text-[#a78bfa]">
                <span className="h-px w-12 bg-[#a78bfa]/60" />
                AMETHYST CLIENT
              </div>
              <div className="space-y-4" data-mask>
                <h1 className="font-heading uppercase leading-[0.9] tracking-[-0.03em] text-[#e9e7ff] text-[clamp(2.6rem,5.2vw,4rem)]">
                  Amethyst Client
                </h1>
                <p className="max-w-xl text-base text-[#e9e7ff] sm:text-lg">
                  A clean Minecraft client focused on performance.
                  Higher FPS, with Clean UI and no extra bloat.
                </p>
              </div>
              <p className="max-w-lg text-base text-[#a78bfa] sm:text-lg" data-reveal>
                Free • Not in beta • Active development
              </p>
              <div className="flex flex-wrap items-center gap-5" data-reveal>
                <button className="rounded-sm bg-[#6d28d9] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#7c3aed]">
                  Download
                </button>
                <button className="rounded-sm border border-white/15 px-6 py-3 text-sm font-medium text-[#e9e7ff] transition hover:border-white/30">
                  GitHub
                </button>
              </div>
            </div>

            <div className="absolute right-[6%] top-[18%] hidden w-95 lg:block" data-reveal>
              <div className="relative rounded-sm border border-white/10 bg-[#120a1f]/70 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.55)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.18),transparent_60%)]" />
                <div className="relative space-y-6">
                  <div className="flex items-center justify-between text-xs uppercase tracking-tight text-[#a78bfa]">
                    <span>Launcher</span>
                    <span>Active</span>
                  </div>
                  <div className="h-px w-full bg-white/10" />
                  <div className="space-y-5">
                    <div>
                      <p className="text-xs uppercase tracking-tight text-[#a78bfa]">Preset</p>
                      <p className="mt-2 text-2xl text-[#e9e7ff]">Performance</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-tight text-[#a78bfa]">Frame pacing</p>
                      <p className="mt-2 text-2xl text-[#e9e7ff]">Optimized</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-tight text-[#a78bfa]">Mods</p>
                      <p className="mt-2 text-2xl text-[#e9e7ff]">15+ modules</p>
                    </div>
                  </div>
                  <div className="h-px w-full bg-white/10" />
                  <div className="flex items-center justify-between text-xs uppercase tracking-tight text-[#c4b5fd]">
                    <span>Early build</span>
                    <span>~70 FPS</span>
                  </div>
                </div>
              </div>
              <div className="absolute -left-10 top-10 h-24 w-24 rounded-sm border border-white/10 bg-[#1b0f2e]/70" />
              <div className="absolute -right-8 top-32 h-16 w-28 rounded-sm border border-white/10 bg-[#1b0f2e]/50" />
            </div>
          </div>
        </section>

        <section ref={stickyRef} className="relative -mt-12">
          <div className="mx-auto w-[min(92vw,1400px)] px-2 pb-32 pt-20 sm:px-6">
            <div className="relative min-h-[70vh] lg:min-h-[80vh]">
              <div className="space-y-6 lg:absolute lg:left-0 lg:top-[18%] lg:max-w-xl" data-scene>
                <p className="text-xs uppercase tracking-tight text-[#a78bfa]">Scene 1</p>
                <h2 className="font-heading uppercase leading-[0.95] tracking-[-0.02em] text-[#e9e7ff] text-[clamp(2.6rem,5.2vw,4rem)]">
                  Performance first.
                </h2>
                <p className="max-w-md text-sm text-[#a78bfa] sm:text-base">
                  Optimized rendering and lightweight mods.
                </p>
              </div>
              <div className="space-y-6 lg:absolute lg:left-0 lg:top-[18%] lg:max-w-xl" data-scene>
                <p className="text-xs uppercase tracking-tight text-[#a78bfa]">Scene 2</p>
                <h2 className="font-heading uppercase leading-[0.95] tracking-[-0.02em] text-[#e9e7ff] text-[clamp(2.6rem,5.2vw,4rem)]">
                  Clean interface.
                </h2>
                <p className="max-w-md text-sm text-[#a78bfa] sm:text-base">
                  Simple HUD and menus that stay out of the way.
                </p>
              </div>
              <div className="space-y-6 lg:absolute lg:left-0 lg:top-[18%] lg:max-w-xl" data-scene>
                <p className="text-xs uppercase tracking-tight text-[#a78bfa]">Scene 3</p>
                <h2 className="font-heading uppercase leading-[0.95] tracking-[-0.02em] text-[#e9e7ff] text-[clamp(2.6rem,5.2vw,4rem)]">
                  Actively developed.
                </h2>
                <p className="max-w-md text-sm text-[#a78bfa] sm:text-base">
                  More features and modules coming soon.
                </p>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute right-[8%] top-[20%] hidden lg:block">
            <div className="flex flex-col gap-6 text-right">
              <div className="text-[clamp(3rem,6vw,5.125rem)] font-heading uppercase tracking-[-0.03em] text-white/10">
                AMETHYST
              </div>
              <div className="h-px w-48 bg-white/10" />
              <div className="text-[clamp(2.4rem,5vw,4rem)] font-heading uppercase tracking-[-0.03em] text-white/8">
                CLIENT
              </div>
            </div>
          </div>
        </section>

        <section className="relative -mt-12 pb-24">
          <div className="mx-auto w-[min(92vw,1400px)] px-2 sm:px-6">
            <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-6" data-slide-left>
                <h2 className="font-heading uppercase leading-[0.88] tracking-[-0.04em] text-[#e9e7ff] text-[clamp(4rem,10vw,4rem)]" data-scale>
                  Massive Performance.
                </h2>
                <div className="h-px w-32 bg-white/10" data-line />
                <p className="max-w-md text-sm text-[#a78bfa] sm:text-base">
                  Varies by hardware and settings.
                </p>
              </div>
              <div className="space-y-4" data-slide-right>
                <div className="flex items-center justify-between text-sm uppercase tracking-tight text-[#c4b5fd]">
                  <span>15+ modules</span>
                </div>
                <div className="h-px w-full bg-white/10" data-line />
                <div className="flex items-center justify-between text-sm uppercase tracking-tight text-[#c4b5fd]">
                  <span>Small footprint</span>
                </div>
                <div className="h-px w-full bg-white/10" data-line />
                <div className="flex items-center justify-between text-sm uppercase tracking-tight text-[#c4b5fd]">
                  <span>Frequent updates</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative pb-28">
          <div className="pointer-events-none absolute bottom-[10%] left-[-6%] text-[clamp(3rem,6vw,5.125rem)] font-heading uppercase tracking-[-0.05em] text-white/6" data-parallax="80">
            FEATURES
          </div>
          <div className="mx-auto w-[min(92vw,1400px)] px-2 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="space-y-6" data-slide-left>
                <p className="text-xs uppercase tracking-tight text-[#a78bfa]">Features</p>
                <h2 className="font-heading uppercase leading-[0.95] tracking-[-0.03em] text-[#e9e7ff] text-[clamp(2.6rem,5.2vw,4rem)]">
                  Built to be smooth.
                </h2>
              </div>
              <div className="space-y-6" data-stagger>
                <div className="flex items-center justify-between text-xs uppercase tracking-tight text-[#c4b5fd]" data-stagger-item>
                  <span>Optimized rendering</span>
                </div>
                <div className="h-px w-full bg-white/10" data-line data-stagger-item />
                <div className="flex items-center justify-between text-xs uppercase tracking-tight text-[#c4b5fd]" data-stagger-item>
                  <span>Low latency input</span>
                </div>
                <div className="h-px w-full bg-white/10" data-line data-stagger-item />
                <div className="flex items-center justify-between text-xs uppercase tracking-tight text-[#c4b5fd]" data-stagger-item>
                  <span>Minimal HUD</span>
                </div>
                <div className="h-px w-full bg-white/10" data-line data-stagger-item />
                <div className="flex items-center justify-between text-xs uppercase tracking-tight text-[#c4b5fd]" data-stagger-item>
                  <span>Lightweight modules</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section ref={horizontalRef} className="relative">
          <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[70vw] -translate-x-1/2 bg-white/10" />
          <div className="overflow-hidden">
            <div ref={horizontalTrackRef} className="flex min-w-[150vw] items-center gap-20 px-6 py-28">
              <div className="min-w-[70vw] space-y-6">
                <p className="text-xs uppercase tracking-tight text-[#a78bfa]">Performance</p>
                <h2 className="font-heading uppercase leading-[0.9] tracking-[-0.04em] text-[#e9e7ff] text-[clamp(3.2rem,6.5vw,4rem)]">
                  Up to ~170 FPS<br/>Boost
                </h2>
              </div>
              <div className="min-w-[70vw] space-y-6">
                <p className="text-xs uppercase tracking-tight text-[#a78bfa]">Modules</p>
                <h2 className="font-heading uppercase leading-[0.9] tracking-[-0.04em] text-[#c4b5fd] text-[clamp(3.2rem,6.5vw,4rem)]">
                  15+ included
                </h2>
              </div>
              <div className="min-w-[70vw] space-y-6">
                <p className="text-xs uppercase tracking-tight text-[#a78bfa]">Lightweight</p>
                <h2 className="font-heading uppercase leading-[0.9] tracking-[-0.04em] text-[#e9e7ff] text-[clamp(3.2rem,6.5vw,4rem)]">
                  Small install size
                </h2>
              </div>
            </div>
          </div>
        </section>

        <section className="relative -mt-10 pb-24">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-12 h-52 w-52 -translate-x-1/2 rounded-full bg-[#6d28d9]/25 blur-[110px]" />
          </div>
          <div className="relative mx-auto w-[min(92vw,1200px)] px-2 text-center" data-reveal>
            <h2 className="mt-6 font-heading uppercase leading-[0.95] tracking-[-0.03em] text-[#e9e7ff] text-[clamp(2.6rem,5.2vw,4rem)]">
              Download<br/><span className="text-[#c4b5fd]">Amethyst Client</span>
            </h2>
            <p className="mt-4 text-sm text-[#a78bfa] sm:text-base">
              Free and actively developed.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <button className="rounded-sm bg-[#6d28d9] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#7c3aed]">
                Download
              </button>
              <button className="rounded-sm border border-white/15 px-6 py-3 text-sm font-medium text-[#e9e7ff] transition hover:border-white/30">
                GitHub
              </button>
              <button className="rounded-sm border border-white/15 px-6 py-3 text-sm font-medium text-[#e9e7ff] transition hover:border-white/30">
                Discord
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
