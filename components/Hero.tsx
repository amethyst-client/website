"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ShimmerButton from "./ShimmerButton";
import LightRays from "./LightRays";

export default function Hero() {
    const heroRef = useRef<HTMLElement | null>(null);
    const heroZoomRef = useRef<HTMLDivElement | null>(null);
    const heroTextRef1 = useRef<HTMLDivElement | null>(null);
    const heroTextRef2 = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            const entranceContent = [
                heroZoomRef.current?.querySelector(".space-y-12"),
                heroZoomRef.current?.querySelector(".border-l"),
                heroRef.current?.querySelector(".bottom-12")
            ];

            gsap.set(entranceContent, { autoAlpha: 0, y: 40, filter: "blur(20px)" });
            gsap.set([heroTextRef1.current, heroTextRef2.current], { autoAlpha: 0, scale: 0.8, filter: "blur(30px)" });

            const startEntrance = () => {
                const tl = gsap.timeline();

                tl.to([heroTextRef1.current, heroTextRef2.current], {
                    autoAlpha: 1,
                    scale: 1,
                    filter: "blur(0px)",
                    duration: 2.5,
                    ease: "expo.out",
                    stagger: 0.2
                })
                    .to(entranceContent, {
                        autoAlpha: 1,
                        y: 0,
                        filter: "blur(0px)",
                        duration: 2,
                        ease: "expo.out",
                        stagger: 0.1
                    }, "-=2.2");
            };

            window.addEventListener("introFinished", startEntrance);

            if (heroZoomRef.current) {
                gsap.to(heroZoomRef.current, {
                    y: -50,
                    ease: "none",
                    scrollTrigger: {
                        trigger: heroRef.current,
                        start: "top top",
                        end: "bottom top",
                        scrub: true,
                    },
                });
            }
        });

        return () => {
            ctx.revert();
            window.removeEventListener("introFinished", () => { });
        };
    }, []);

    return (
        <section ref={heroRef} className="relative min-h-screen overflow-hidden flex items-center">
            <div className="absolute inset-0 z-0 bg-[#0b0613]" />
            <div className="pointer-events-none absolute inset-0 z-10">
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#b78bfe"
                    raysSpeed={0.3}
                    lightSpread={0.8}
                    rayLength={1.5}
                    followMouse={true}
                    mouseInfluence={0.05}
                    className="opacity-40"
                />
            </div>

            <div
                ref={heroTextRef1}
                className="pointer-events-none absolute left-[-2%] top-[10%] z-10 text-[clamp(4rem,15vw,10rem)] font-heading uppercase tracking-tighter text-white/5 select-none"
            >
                AMETHYST
            </div>
            <div
                ref={heroTextRef2}
                className="pointer-events-none absolute right-[-2%] bottom-[15%] z-10 text-[clamp(4rem,15vw,10rem)] font-heading uppercase tracking-tighter text-white/5 select-none"
            >
                CLIENT
            </div>

            <div ref={heroZoomRef} className="relative z-20 mx-auto w-full max-w-7xl px-6 sm:px-12 lg:px-16 pt-20">
                <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
                    <div className="space-y-12">
                        <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-[#a78bfa] font-medium"><span className="h-px w-10 bg-[#a78bfa]/40" />Better Frames.</div>
                        <div className="space-y-8">
                            <h1 className="font-heading uppercase leading-[0.85] tracking-tight text-[#e9e7ff] text-[clamp(3rem,8vw,3.6rem)]">
                                MORE FRAMES.<br />
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8b5cf6] to-[#c4b5fd]">LESS BLOAT.</span>
                            </h1>
                            <p className="max-w-xl text-md sm:text-lg text-[#F4F6F8]/80 leading-relaxed font-light">
                                Amethyst is a simple and fast client. We focus on making the game run better without adding extra things you don't need.
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-8 pt-6">
                            <ShimmerButton href="/download" className="shimmer-btn bg-[#6d28d9] text-white px-10 py-4 rounded-md text-sm font-bold tracking-widest uppercase">
                                Download
                            </ShimmerButton>
                            <ShimmerButton href="https://discord.gg/WAFac8MxMx" className="shimmer-btn bg-white/5 border border-white/10 text-white px-10 py-4 rounded-md text-sm font-bold tracking-widest uppercase">
                                Discord
                            </ShimmerButton>
                        </div>
                    </div>

                    <div className="hidden lg:grid grid-cols-1 gap-12 border-l border-white/10 pl-16">
                        {[
                            { label: "Performance", value: "240+", sub: "avg FPS on test PC" },
                            { label: "Stability", value: "SMOOTH", sub: "Consistent frames" },
                            { label: "Design", value: "CLEAN", sub: "Simple HUD" },
                        ].map((stat, i) => (
                            <div key={i} className="group cursor-default">
                                <p className="text-[10px] uppercase tracking-[0.2em] text-[#a78bfa]/60 group-hover:text-[#a78bfa] transition-colors font-medium">{stat.label}</p>
                                <div className="flex items-baseline gap-4 mt-2">
                                    <h2 className="font-heading uppercase text-5xl text-[#e9e7ff] group-hover:translate-x-3 transition-transform duration-700 ease-expo">{stat.value}</h2>
                                    <span className="text-[10px] text-[#a78bfa]/40 group-hover:text-[#a78bfa]/60 transition-colors uppercase font-bold tracking-widest">{stat.sub}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 opacity-40">
                <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-[#a78bfa]">Keep Scrolling</span>
                <div className="w-px h-16 bg-linear-to-b from-[#a78bfa] to-transparent" />
            </div>
        </section>
    );
}
