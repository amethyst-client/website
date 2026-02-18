"use client";

import React, { useRef, useState } from "react";

interface CardSpotlightProps {
    children: React.ReactNode;
    className?: string;
    radius?: number;
    color?: string;
}

export default function CardSpotlight({
    children,
    className = "",
    radius = 350,
    color = "rgba(139,92,246,0.12)",
}: CardSpotlightProps) {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`relative overflow-hidden rounded-lg border border-white/10 bg-[#0d0820] ${className}`}
            style={{
                background: isHovered
                    ? `radial-gradient(${radius}px circle at ${position.x}px ${position.y}px, ${color}, transparent 80%), #0d0820`
                    : "#0d0820",
            }}
        >
            {children}
        </div>
    );
}
