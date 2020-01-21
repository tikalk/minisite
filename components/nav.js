import React from 'react';
import Link from 'next/link';

const links = [
    { href: '/', label: 'Home' },
    { href: '/radar', label: 'Radar' },
    { href: '/videos', label: 'Videos' },
    { href: '/speakers', label: 'Speakers' },
    { href: '/schedule', label: 'Schedule' },
    { href: '/updates', label: 'Updates' },
    { href: '/sponsor', label: 'Sponsors' },
    { href: '/venue', label: 'Venue' },
].map(link => ({
    ...link,
    key: `nav-link-${link.href}-${link.label}`,
}));

const Nav = () => (
    <nav>
        <ul>
            {links.map(({ key, href, label }) => (
                <li key={key}>
                    <a href={href}>{label}</a>
                </li>
            ))}
        </ul>

        <style jsx>{`
            :global(body) {
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
            }
            nav {
                text-align: center;
            }
            ul {
                display: flex;
                justify-content: left;
            }
            nav > ul {
                padding: 4px 16px;
            }
            li {
                display: flex;
                padding: 6px 8px;
            }
            a {
                color: #067df7;
                text-decoration: none;
                font-size: 13px;
            }
        `}</style>
    </nav>
);

export default Nav;
