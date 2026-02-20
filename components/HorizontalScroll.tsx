"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HorizontalScroll() {
    const horizontalRef = useRef<HTMLElement>(null);
    const horizontalTrackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            ScrollTrigger.matchMedia({
                "(min-width: 1024px)": () => {
                    if (horizontalRef.current && horizontalTrackRef.current) {
                        const getDistance = () => {
                            const totalWidth = horizontalTrackRef.current?.scrollWidth ?? 0;
                            const viewportWidth = horizontalRef.current?.offsetWidth ?? 0;
                            return Math.max(totalWidth - viewportWidth, 0);
                        };

                        gsap.set(horizontalTrackRef.current, { x: 0 });
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
                    } return undefined;
                },
            });
        }, horizontalRef); return () => ctx.revert();
    }, []);

    return (
        <section ref={horizontalRef} className="relative bg-white/1 overflow-hidden">
            <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[70vw] -translate-x-1/2 bg-white/5" />
            <div className="overflow-hidden">
                <div ref={horizontalTrackRef} className="flex min-w-[200vw] items-center gap-32 px-12 py-32">
                    <div className="min-w-[60vw] space-y-8">
                        <p className="text-xs uppercase tracking-[0.2em] text-[#a78bfa] font-medium">Efficiency</p>
                        <h2 className="font-heading uppercase leading-[0.9] tracking-tight text-[#e9e7ff] text-[clamp(2.5rem,6vw,4rem)]">
                            Reliably Stable
                        </h2>
                        <p className="max-w-md text-md text-[#a29ada]/70 leading-relaxed font-light">
                            We don't just increase frames; we make them stay steady. Play Minecraft without stutters or drops.
                        </p>
                    </div>
                    <div className="min-w-[60vw] space-y-8">
                        <p className="text-xs uppercase tracking-[0.2em] text-[#a78bfa] font-medium">Design</p>
                        <h2 className="font-heading uppercase leading-[0.9] tracking-tight text-[#c4b5fd] text-[clamp(2.5rem,6vw,4rem)]">
                            Simple Controls
                        </h2>
                        <p className="max-w-md text-md text-[#a29ada]/70 leading-relaxed font-light">
                            Change your settings easily with an interface that stays hidden until you actually need it.
                        </p>
                    </div>
                    <div className="min-w-[60vw] space-y-8">
                        <p className="text-xs uppercase tracking-[0.2em] text-[#a78bfa] font-medium">Privacy</p>
                        <h2 className="font-heading uppercase leading-[0.9] tracking-tight text-[#e9e7ff] text-[clamp(2.5rem,6vw,4rem)]">
                            Zero Tracking
                        </h2>
                        <p className="max-w-md text-md text-[#a29ada]/70 leading-relaxed font-light">
                            We don't watch what you do. Amethyst is built to be private, with no background checks or forced updates.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
