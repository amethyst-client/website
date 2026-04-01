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
                className="pointer-events-none absolute left-[-2%] top-[10%] z-10 text-[clamp(4rem,15vw,10rem)] font-heading uppercase tracking-tighter text-white/10 select-none"
            >
                AMETHYST
            </div>
            <div
                ref={heroTextRef2}
                className="pointer-events-none absolute right-[-2%] bottom-[15%] z-10 text-[clamp(4rem,15vw,10rem)] font-heading uppercase tracking-tighter text-white/10 select-none"
            >
                STUDIOS
            </div>

            <div ref={heroZoomRef} className="relative z-20 mx-auto w-full max-w-7xl px-6 sm:px-12 lg:px-16 pt-20">
                <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center p-6 sm:p-8 lg:p-10">
                    <div className="space-y-12">
                        <div className="brutal-chip inline-flex items-center gap-4 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-[#c4b5fd] font-medium"><span className="h-px w-10 bg-[#a78bfa]/70" />Indie Studio</div>
                        <div className="space-y-8">
                            <h1 className="font-heading uppercase leading-[0.85] tracking-tight text-[#e9e7ff] text-[clamp(3rem,8vw,3.4rem)]">
                                Software.<br />
                                <span className="inline-block border-b border-[#8b5cf6]/60 text-[#c4b5fd]">Built Properly.</span>
                            </h1>
                            <p className="max-w-xl text-sm sm:text-base text-[#F4F6F8]/80 leading-relaxed font-light">
                                Amethyst Studios builds practical projects for Minecraft and server communities with a straightforward build and test process.
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-6 pt-4">
                            <ShimmerButton href="/collections" className="shimmer-btn brutal-shadow-hover bg-[#6d28d9] text-white px-10 py-4 text-sm font-bold tracking-widest uppercase">
                                Collections
                            </ShimmerButton>
                            <ShimmerButton href="https://discord.gg/WAFac8MxMx" className="shimmer-btn brutal-shadow-hover bg-white/5 border border-white/10 text-white px-10 py-4 text-sm font-bold tracking-widest uppercase">
                                Discord
                            </ShimmerButton>
                        </div>
                    </div>

                    <div className="hidden lg:grid grid-cols-1 gap-6 border-l border-white/10 pl-10">
                        {[
                            { label: "Products", value: "02", sub: "active projects" },
                            { label: "Workflow", value: "BUILD & TEST", sub: "small updates" },
                            { label: "Focus", value: "PRAC", sub: "useful features" },
                        ].map((stat, i) => (
                            <div key={i} className="brutal-card brutal-shadow-hover group cursor-default p-5">
                                <p className="text-[10px] uppercase tracking-[0.2em] text-[#a78bfa]/60 group-hover:text-[#a78bfa] transition-colors font-medium">{stat.label}</p>
                                <div className="flex items-baseline gap-4 mt-2">
                                    <h2 className="font-heading uppercase text-5xl text-[#e9e7ff] group-hover:translate-x-1 transition-transform duration-300 ease-out">{stat.value}</h2>
                                    <span className="text-[10px] text-[#a78bfa]/40 group-hover:text-[#a78bfa]/60 transition-colors uppercase font-bold tracking-widest">{stat.sub}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50">
                <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-[#a78bfa]">Keep Scrolling</span>
                <div className="w-px h-14 bg-linear-to-b from-[#a78bfa] to-transparent" />
            </div>
        </section>
    );
}
