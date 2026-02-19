"use client";

import StaggeredMenu from "./StaggeredMenu";

const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "#" },
    { label: "Features", ariaLabel: "View features", link: "#features" },
    { label: "Performance", ariaLabel: "Performance stats", link: "#performance" },
    { label: "Download", ariaLabel: "Download Amethyst", link: "#download" },
];

const socialItems = [
    { label: "Discord", link: "https://discord.gg/amethyst" },
    { label: "Twitter", link: "https://twitter.com/amethyst" },
];

export default function Header() {
    return (
        <StaggeredMenu
            isFixed
            position="right"
            logoUrl="/logo.png"
            items={menuItems}
            socialItems={socialItems}
            displaySocials
            displayItemNumbering
            menuButtonColor="#ffffff"
            openMenuButtonColor="#ffffff"
            changeMenuColorOnOpen={false}
            colors={["#1a0d2e", "#6d28d9"]}
            accentColor="#8b5cf6"
        />
    );
}
