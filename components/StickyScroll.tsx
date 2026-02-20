"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function StickyScroll() {
    const stickyRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            ScrollTrigger.matchMedia({
                "(min-width: 1024px)": () => {
                    const scenes = gsap.utils.toArray<HTMLElement>("[data-scene]", stickyRef.current || undefined);

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
                },
                "(max-width: 1023px)": () => {
                    const scenes = gsap.utils.toArray<HTMLElement>("[data-scene]", stickyRef.current || undefined);
                    gsap.set(scenes, { autoAlpha: 1, y: 0 });
                },
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section ref={stickyRef} className="relative z-30" id="features">
            <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-16 pb-32 pt-20">
                <div className="relative min-h-[80vh]">
                    <div className="lg:absolute lg:left-0 lg:top-[25%] lg:max-w-xl space-y-6" data-scene>
                        <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-medium text-[#8b5cf6]">
                            <span className="h-px w-6 bg-[#8b5cf6]/40" />
                            01 — Performance
                        </div>
                        <h2 className="font-heading uppercase leading-[0.9] tracking-tight text-[#e9e7ff] text-[clamp(2.5rem,6vw,4rem)]">
                            Stable Frames
                        </h2>
                        <p className="max-w-md text-md text-[#a29ada]/90 leading-relaxed font-light">
                            We changed how the game renders to make sure your frames stay consistent. No more stuttering during fights.
                        </p>
                    </div>

                    <div className="lg:absolute lg:left-0 lg:top-[25%] lg:max-w-xl space-y-6" data-scene>
                        <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-medium text-[#8b5cf6]">
                            <span className="h-px w-6 bg-[#8b5cf6]/40" />
                            02 — Interface
                        </div>
                        <h2 className="font-heading uppercase leading-[0.9] tracking-tight text-[#e9e7ff] text-[clamp(2.5rem,6vw,4rem)]">
                            Simple HUD
                        </h2>
                        <p className="max-w-md text-md text-[#a29ada]/90 leading-relaxed font-light">
                            A clean HUD that only shows what you need to see. Use your full screen for the game, not for menus.
                        </p>
                    </div>

                    <div className="lg:absolute lg:left-0 lg:top-[25%] lg:max-w-xl space-y-6" data-scene>
                        <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-medium text-[#8b5cf6]">
                            <span className="h-px w-6 bg-[#8b5cf6]/40" />
                            03 — Updates
                        </div>
                        <h2 className="font-heading uppercase leading-[0.9] tracking-tight text-[#e9e7ff] text-[clamp(2.5rem,6vw,4rem)]">
                            Weekly Fixes
                        </h2>
                        <p className="max-w-md text-md text-[#a29ada]/90 leading-relaxed font-light">
                            Amethyst is always in dev. We release updates every week to add new features and fix any issues found by players.
                        </p>
                    </div>
                </div>

                <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block overflow-hidden">
                    <div className="flex flex-col gap-8 text-right opacity-10">
                        <div className="text-[10rem] font-heading uppercase leading-none tracking-tighter">
                            AMETHYST
                        </div>
                        <div className="text-[10rem] font-heading uppercase leading-none tracking-tighter text-transparent border-t border-white/20 pt-8" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}>
                            CLIENT
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
