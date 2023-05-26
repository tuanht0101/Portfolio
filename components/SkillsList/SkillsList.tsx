import React from 'react';

type Props = {
    skills: {
        name: string;
        image: string;
        href: string;
    }[];
};

export default function SkillsList({ skills }: Props) {
    function openNewTab(url: string) {
        window.open(url, '_blank');
    }

    return (
        <ul className="flex flex-wrap justify-center">
            {skills.map((item, index) => (
                <li
                    className="m-2 sm:m-3 md:m-4"
                    key={index}
                    style={{ minWidth: '3rem' }}
                >
                    <img
                        className="h-12 w-12 sm:h-14 sm:w-14 cursor-pointer rounded-full"
                        style={{
                            backgroundColor: '#fff',
                            boxShadow: '0 0 10px rgba(0,0,0,.09)',
                        }}
                        src={item.image}
                        alt={item.name}
                        onClick={() => openNewTab(item.href)}
                    />
                </li>
            ))}
        </ul>
    );
}
