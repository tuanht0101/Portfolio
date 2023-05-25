'use client';

import React, { useEffect, useState } from 'react';
import Menu from '../Menu/Menu';

type Props = {
    title: string;
};

export default function Header({ title }: Props): JSX.Element {
    const [menu, setMenu] = useState(['Home', 'About', 'Projects', 'Contact']);
    useEffect(() => {}, []);

    return (
        <nav
            className="flex justify-between sticky top-0 px-12 py-6 bg-white z-999"
            style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.09)' }}
        >
            <div className="font-sans font-black text-xl cursor-pointer">
                {title}
            </div>
            <Menu menuList={menu} />
        </nav>
    );
}
