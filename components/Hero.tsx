"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ShimmerButton from "./ShimmerButton";


export default function Hero() {
    const heroRef = useRef<HTMLElement | null>(null);
    const heroLayerRef = useRef<HTMLDivElement | null>(null);
    const heroZoomRef = useRef<HTMLDivElement | null>(null);
    const noiseRef = useRef<HTMLDivElement | null>(null);
    const heroTextRef1 = useRef<HTMLDivElement | null>(null);
    const heroTextRef2 = useRef<HTMLDivElement | null>(null);

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

            if (heroTextRef1.current && heroTextRef2.current) {
                gsap.fromTo(
                    [heroTextRef1.current, heroTextRef2.current],
                    { autoAlpha: 0, scale: 0.8 },
                    { autoAlpha: 1, scale: 1, duration: 1.5, ease: "power2.out", stagger: 0.2 }
                );
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
        });

        const handleMouseMove = (e: MouseEvent) => {
            if (!heroTextRef1.current || !heroTextRef2.current) return;
            const { clientX, clientY } = e;
            const x = (clientX / window.innerWidth - 0.5) * 50;
            const y = (clientY / window.innerHeight - 0.5) * 50;

            gsap.to(heroTextRef1.current, {
                x: x * 0.8,
                y: y * 0.8,
                duration: 1.5,
                ease: "power2.out",
                overwrite: "auto"
            });

            gsap.to(heroTextRef2.current, {
                x: x * 0.5,
                y: y * 0.5,
                duration: 1.5,
                ease: "power2.out",
                overwrite: "auto"
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            ctx.revert();
        };
    }, []);

    return (
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
            <div
                ref={heroTextRef1}
                className="pointer-events-none absolute left-[-12%] top-[8%] text-[clamp(7rem,16vw,11rem)] font-heading uppercase tracking-[-0.05em] text-white/5 opacity-0"
            >
                AMETHYST
            </div>
            <div
                ref={heroTextRef2}
                className="pointer-events-none absolute left-[10%] top-[38%] text-[clamp(6rem,14vw,10rem)] font-heading uppercase tracking-[-0.05em] text-white/6 opacity-0"
            >
                CLIENT
            </div>
            <div ref={heroZoomRef} className="relative mx-auto flex min-h-screen w-[min(92vw,1400px)] items-center px-2 sm:px-6">
                <div className="relative z-10 max-w-3xl space-y-8 pb-12">
                    <div className="flex items-center gap-4 text-xs uppercase tracking-tight text-[#a78bfa]">
                        <span className="h-px w-12 bg-[#a78bfa]/60" />
                        AMETHYST CLIENT
                    </div>
                    <div className="space-y-4">
                        <h1 className="font-heading uppercase leading-[0.9] tracking-[-0.03em] text-[#e9e7ff] text-[clamp(2.6rem,5.2vw,4rem)]">
                            Amethyst Client
                        </h1>
                        <p className="max-w-xl text-base text-[#e9e7ff] sm:text-lg">
                            A clean Minecraft client focused on performance.
                            Higher FPS, with Clean UI and no extra bloat.
                        </p>
                    </div>
                    <p className="max-w-lg text-base text-[#a78bfa] sm:text-lg">
                        Free • Not in beta • Active development
                    </p>
                    <div className="flex flex-wrap items-center gap-5">
                        <ShimmerButton className="relative z-20 group overflow-hidden rounded-sm bg-[#6d28d9] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#7c3aed]">
                            <span className="relative z-10">Download</span>
                            <div className="absolute inset-0 z-0 bg-white/20 opacity-0 transition group-hover:opacity-100" />
                        </ShimmerButton>
                        <ShimmerButton className="relative z-20 rounded-sm border border-white/15 px-6 py-3 text-sm font-medium text-[#e9e7ff] transition hover:border-white/30 hover:bg-white/5">
                            GitHub
                        </ShimmerButton>
                    </div>
                </div>

                <div className="absolute right-[6%] top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-10">
                    {[
                        { label: "Performance", value: "+25%", sub: "avg FPS boost" },
                        { label: "Modules", value: "15+", sub: "included" },
                        { label: "Size", value: "SMALL", sub: "install footprint" },
                    ].map((stat, i) => (
                        <div key={i} className="flex items-baseline gap-5">
                            <div className="w-px self-stretch bg-[#a78bfa]/20" />
                            <div>
                                <p className="text-[10px] uppercase tracking-widest text-[#a78bfa]">{stat.label}</p>
                                <p className="font-heading text-[clamp(2rem,3.5vw,2.75rem)] leading-none text-[#e9e7ff] tracking-tight">{stat.value}</p>
                                <p className="mt-1 text-xs text-white/30">{stat.sub}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
