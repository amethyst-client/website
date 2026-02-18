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
        <section ref={sectionRef} className="relative -mt-10 pb-24">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-12 h-52 w-52 -translate-x-1/2 rounded-full bg-[#6d28d9]/25 blur-[110px]" />
            </div>
            <div className="relative mx-auto w-[min(92vw,1200px)] px-2 text-center" data-reveal>
                <h2 className="mt-6 font-heading uppercase leading-[0.95] tracking-[-0.03em] text-[#e9e7ff] text-[clamp(2.6rem,5.2vw,4rem)]">
                    Download<br /><span className="text-[#c4b5fd]">Amethyst Client</span>
                </h2>
                <p className="mt-4 text-sm text-[#a78bfa] sm:text-base">
                    Free and actively developed.
                </p>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                    <ShimmerButton className="relative z-20 group overflow-hidden rounded-sm bg-[#6d28d9] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#7c3aed]">
                        <span className="relative z-10">Download</span>
                        <div className="absolute inset-0 z-0 bg-white/20 opacity-0 transition group-hover:opacity-100" />
                    </ShimmerButton>
                    <ShimmerButton className="relative z-20 rounded-sm border border-white/15 px-6 py-3 text-sm font-medium text-[#e9e7ff] transition hover:border-white/30 hover:bg-white/5">
                        GitHub
                    </ShimmerButton>
                    <ShimmerButton className="relative z-20 rounded-sm border border-white/15 px-6 py-3 text-sm font-medium text-[#e9e7ff] transition hover:border-white/30 hover:bg-white/5">
                        Discord
                    </ShimmerButton>
                </div>
            </div>
        </section>
    );
}
