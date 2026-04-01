"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ShimmerButton from "./ShimmerButton";

export default function DownloadSection() {
    const sectionRef = useRef<HTMLElement>(null);
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
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
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative z-30 pb-40 overflow-hidden">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-1/2 h-105 w-105 -translate-x-1/2 -translate-y-1/2 bg-[#6d28d9]/10 blur-[120px]" />
            </div>

            <div className="relative mx-auto max-w-5xl px-6 text-center" data-reveal>
                <div className="brutal-chip inline-flex items-center gap-3 px-5 py-2 text-[10px] uppercase tracking-[0.2em] font-medium text-[#c4b5fd] mb-12">
                    <span className="h-1.5 w-1.5 bg-[#8b5cf6]" />
                    Amethyst Studios
                </div>

                <div className="inline-block px-6 py-6 sm:px-10 sm:py-8 text-center">
                    <h2 className="font-heading uppercase leading-[0.9] tracking-tight text-[#e9e7ff] text-[clamp(2.5rem,8vw,4rem)]">
                        Updates from<br /><span className="text-[#c4b5fd] border-b border-[#8b5cf6]/60">Amethyst Studios.</span>
                    </h2>
                </div>

                <p className="mt-10 mx-auto max-w-xl text-sm sm:text-base text-[#a78bfa]/80 leading-relaxed font-light">
                    Follow progress for Amethyst Client and Amethyst Purge with clear status updates.
                </p>

                <div className="mt-14 flex flex-wrap items-center justify-center gap-6">
                    <ShimmerButton href="/collections" className="shimmer-btn brutal-shadow-hover bg-[#6d28d9] text-white px-12 py-4 text-sm font-bold tracking-widest uppercase">
                        Collections
                    </ShimmerButton>
                    <ShimmerButton href="https://discord.gg/WAFac8MxMx" className="shimmer-btn brutal-shadow-hover bg-white/5 border border-white/10 text-[#e9e7ff] px-12 py-4 text-sm font-bold tracking-widest uppercase">
                        Discord
                    </ShimmerButton>
                </div>

                <div className="mt-16 flex items-center justify-center gap-10 opacity-45 grayscale contrast-125">
                    <span className="text-[10px] font-bold tracking-widest uppercase">Client</span>
                    <span className="text-[10px] font-bold tracking-widest uppercase">Plugin</span>
                    <span className="text-[10px] font-bold tracking-widest uppercase">Tools</span>
                </div>
            </div>

            <div className="pointer-events-none absolute left-0 bottom-10 w-full text-center opacity-[0.02] select-none">
                <div className="text-[25vw] font-heading uppercase leading-none tracking-tighter">
                    STUDIOS
                </div>
            </div>
        </section>
    );
}
