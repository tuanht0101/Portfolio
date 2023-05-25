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
        <ul className="flex">
            {skills.map((item, index) => (
                <li className="mx-3" key={index}>
                    <img
                        className="h-14 w-14 cursor-pointer"
                        src={`${item.image}`}
                        alt={`${item.name}`}
                        onClick={() => openNewTab(item.href)}
                    ></img>
                </li>
            ))}
        </ul>
    );
}
