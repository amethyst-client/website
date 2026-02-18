"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function TextRevealSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
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
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative -mt-12 pb-24" id="performance">
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
    );
}
