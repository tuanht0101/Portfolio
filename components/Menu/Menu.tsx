import React from 'react';

type Props = {
    menuList: string[];
    isOpen: boolean;
};

export default function Menu({ menuList, isOpen }: Props): JSX.Element {
    return (
        <ul
            className={`md:flex md:items-center md:pb-0 pb-12 z-[-1] md:z-auto md:static absolute bg-white 
        w-full md:w-auto left-0 md:pl-0 pl-9
        top-[-400px] transition-all ease-in duration-500 ${
            isOpen ? 'top-20 opacity-100' : 'top-[-490px]'
        } md:opacity-100 opacity-0
        `}
        >
            {menuList.map((item, index) => (
                <li
                    className="hover:text-blue-400 mx-4 my-7 md:my-0 md:ml-8"
                    key={index}
                >
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
