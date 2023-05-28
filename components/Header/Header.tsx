'use client';

import React, { createContext, useCallback, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';

import Menu from '../Menu/Menu';

type Props = {
    title: string;
};

export default function Header({ title }: Props): JSX.Element {
    const [menu, setMenu] = useState(['Home', 'About', 'Projects', 'Contact']);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {}, []);

    const showMenu = (prev: boolean) => {
        setIsMenuOpen(!prev);
    };

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    return (
        <nav
            className="flex justify-between items-center fixed w-full top-0 px-12 py-6 bg-white z-[999]"
            style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.09)' }}
        >
            <div
                className="font-[Poppins] font-black text-xl cursor-pointer"
                onClick={scrollToTop}
            >
                {title}
            </div>
            <span
                className="text-3xl cursor-pointer md:hidden hover:opacity-70"
                onClick={() => showMenu(isMenuOpen)}
            >
                {isMenuOpen ? (
                    <img src={'images/Close.svg'} className="w-9 h-9"></img>
                ) : (
                    <FontAwesomeIcon icon={faBars} />
                )}
            </span>
            <HeadlessTippy
                visible={isMenuOpen}
                onClickOutside={() => setIsMenuOpen(false)}
            >
                <Menu menuList={menu} isOpen={isMenuOpen} />
            </HeadlessTippy>
        </nav>
    );
}
