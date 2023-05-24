'use client';

import React, { useEffect, useState } from 'react';
import Menu from '../Menu/Menu';

type Props = {
    title: string;
};

export default function Header({ title }: Props): JSX.Element {
    const [menu, setMenu] = useState(['123', '123123']);
    useEffect(() => {}, []);

    return (
        <div>
            <div>{title}</div>
            <Menu menuList={menu} />
        </div>
    );
}
