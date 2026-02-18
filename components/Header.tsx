"use client";

import StaggeredMenu from "./StaggeredMenu";

const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "#" },
    { label: "Features", ariaLabel: "View features", link: "#features" },
    { label: "Contact", ariaLabel: "Contact US", link: "#contact" },
    { label: "Download", ariaLabel: "Download Amethyst", link: "#download" },
];

const socialItems = [
    { label: "GitHub", link: "https://github.com/amethyst-client" },
    { label: "Discord", link: "https://discord.com" },
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
