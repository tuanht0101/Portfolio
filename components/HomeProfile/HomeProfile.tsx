'use client';

import React, { useState } from 'react';
import SkillsList from '../SkillsList/SkillsList';

type Props = {};

export default function HomeProfile({}: Props) {
    const [skills, setSkills] = useState([
        {
            name: 'HTML',
            image: 'images/logo-html.webp',
            href: 'https://www.w3schools.com/html/html_intro.asp',
        },
        {
            name: 'CSS',
            image: 'images/CSS3_logo_and_wordmark.svg.png',
            href: 'https://www.w3schools.com/css/default.asp',
        },
        {
            name: 'JavaScript',
            image: 'images/js.png',
            href: 'https://www.w3schools.com/js/',
        },
        {
            name: 'ReactJS',
            image: 'images/React-icon.svg.png',
            href: 'https://react.dev/',
        },
        {
            name: 'TailwindCSS',
            image: 'images/Tailwind_CSS_Logo.svg.png',
            href: 'https://tailwindcss.com/',
        },
        {
            name: 'SASS',
            image: 'images/logo-b6e1ef6e.svg',
            href: 'https://sass-lang.com/',
        },
        {
            name: 'NextJS',
            image: 'images/next.svg',
            href: 'https://nextjs.org/',
        },
    ]);

    return (
        <div className="flex flex-col  bg-gray-200 items-center py-24 sm:px-24">
            <div className="flex flex-col justify-center md:flex-row ">
                <div className="max-w-40rem relative whitespace-wrap">
                    <p className="text-5xl font-sans font-black">
                        Front-End React Developer
                    </p>
                    <p className="my-6">
                        Hi, I'm Tran Hoang Minh Tuan. A passionate Front-end
                        React Developer currently in Hanoi, Vietnam.
                    </p>

                    <div className="flex  pt-16">
                        <p className="">Tech Stack</p>
                        <SkillsList skills={skills} />
                    </div>
                </div>
                <img className="h-2500px" src="images/profileImage.jpg"></img>
            </div>
        </div>
    );
}
