import React from 'react';

type Props = {
    menuList: string[];
};

export default function Menu({ menuList }: Props): JSX.Element {
    return (
        <ul className="flex flex-row space-x-4 ">
            {menuList.map((item, index) => (
                <li className="hover:text-blue-400" key={index}>
                    <a
                        href={`#${item}`}
                        className="font-sans font-bold text-lg"
                    >
                        {item}
                    </a>
                </li>
            ))}
        </ul>
    );
}
