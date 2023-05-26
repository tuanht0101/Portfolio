'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Menu from '../Menu/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

type Props = {
    title: string;
};

export default function Header({ title }: Props): JSX.Element {
    const [menu, setMenu] = useState(['Home', 'About', 'Projects', 'Contact']);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {}, []);

    const showMenu = useCallback((prev: boolean) => {
        setIsMenuOpen(!prev);
    }, []);

    return (
        <nav
            className="flex justify-between items-center fixed w-full top-0 px-12 py-6 bg-white z-[999]"
            style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.09)' }}
        >
            <div className="font-[Poppins] font-black text-xl cursor-pointer">
                {title}
            </div>
            <span
                className="text-3xl cursor-pointer md:hidden"
                onClick={() => showMenu(isMenuOpen)}
            >
                {isMenuOpen ? (
                    // <FontAwesomeIcon icon={faX} />
                    <img src={'images/Close.svg'} className="w-9 h-9"></img>
                ) : (
                    <FontAwesomeIcon icon={faBars} />
                )}
            </span>
            <Menu menuList={menu} isOpen={isMenuOpen} />
        </nav>
    );
}
