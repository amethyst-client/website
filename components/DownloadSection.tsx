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
                <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6d28d9]/10 blur-[150px]" />
            </div>

            <div className="relative mx-auto max-w-5xl px-6 text-center" data-reveal>
                <div className="inline-flex items-center gap-3 rounded-full bg-white/5 border border-white/10 px-5 py-2 text-[10px] uppercase tracking-[0.2em] font-medium text-[#c4b5fd] mb-12">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#8b5cf6] animate-pulse" />
                    Currently in Dev
                </div>

                <h2 className="font-heading uppercase leading-[0.9] tracking-tight text-[#e9e7ff] text-[clamp(2.5rem,8vw,4rem)]">
                    Start playing<br /><span className="text-transparent bg-clip-text bg-linear-to-r from-[#8b5cf6] to-[#c4b5fd]">with Amethyst.</span>
                </h2>

                <p className="mt-10 mx-auto max-w-xl text-lg text-[#a78bfa]/80 leading-relaxed font-light">
                    The client is ready for you to try. Get the fastest Minecraft experience and join our community.
                </p>

                <div className="mt-16 flex flex-wrap items-center justify-center gap-8">
                    <ShimmerButton className="shimmer-btn bg-[#6d28d9] text-white px-12 py-4 rounded-md text-sm font-bold tracking-widest uppercase">
                        Download
                    </ShimmerButton>
                    <ShimmerButton className="shimmer-btn bg-white/5 border border-white/10 text-[#e9e7ff] px-12 py-4 rounded-md text-sm font-bold tracking-widest uppercase">
                        Discord
                    </ShimmerButton>
                </div>

                <div className="mt-20 flex items-center justify-center gap-12 opacity-30 grayscale contrast-125">
                    <span className="text-[10px] font-bold tracking-widest uppercase">Windows</span>
                    <span className="text-[10px] font-bold tracking-widest uppercase">Linux</span>
                    <span className="text-[10px] font-bold tracking-widest uppercase">MacOS</span>
                </div>
            </div>

            <div className="pointer-events-none absolute left-0 bottom-10 w-full text-center opacity-[0.02] select-none">
                <div className="text-[25vw] font-heading uppercase leading-none tracking-tighter">
                    AMETHYST
                </div>
            </div>
        </section>
    );
}
