"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function FeatureGrid() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
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
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative pb-28" id="modules">
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
    );
}
