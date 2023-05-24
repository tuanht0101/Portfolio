import React from 'react';

type Props = {
    menuList: string[];
};

export default function Menu({ menuList }: Props): JSX.Element {
    return (
        <ul>
            {menuList.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}
