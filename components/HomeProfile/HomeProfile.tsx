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
        <section
            id="Home"
            className="flex flex-col bg-gray-200 items-center pt-36 pb-24 px-24 md:px-24"
        >
            <div className="flex flex-col justify-center md:flex-row">
                <div className="flex flex-col flex-wrap w-full md:max-w-[500px] ">
                    <p className="font-sans font-black text-4.5xl md:text-5.5xl lg:text-6xl leading-tight ">
                        <span className="text-center md:text-left">
                            Front-End React Developer
                        </span>
                    </p>
                    <p className="my-6 font-medium text-base md:text-lg lg:text-xl text-gray-700 ">
                        <span className="text-center md:text-left">
                            Hi, I'm Tran Hoang Minh Tuan. A passionate Front-end
                            React Developer currently looking for a job in
                            Hanoi, Vietnam. 📍
                        </span>
                    </p>
                    <span className="mb-6 md:text-left font-medium text-base md:text-lg lg:text-xl text-gray-700 ">
                        Languages: Vietnamese, English, French
                    </span>
                    <span className="flex justify-center md:justify-start space-x-2 py-4">
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.linkedin.com/in/tuan-tran-hoang-minh-16a545240/"
                        >
                            <img
                                src="images/linkedin.svg"
                                className="w-8 h-8 cursor-pointer hover:opacity-60"
                            ></img>
                        </a>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/tuanht0101"
                        >
                            <img
                                src="images/github.svg"
                                className="w-8 h-8 cursor-pointer hover:opacity-60"
                            ></img>
                        </a>
                    </span>
                </div>
                <img
                    className="h-auto md:h-[500px] max-w-full ml-0 md:ml-16 mt-4 rounded-lg"
                    src="images/profileImage.jpg"
                ></img>
            </div>

            <div className="flex justify-center items-center pt-16">
                <p
                    className="font-semibold"
                    style={{
                        color: '#2d2e32',
                        fontFamily: 'Mulish, sans-serif',
                        borderRight: '2px solid rgba(45,46,50,.5)',
                        paddingRight: '2rem',
                        marginRight: '7rem',
                        fontSize: '1.2rem',
                    }}
                >
                    Tech Stack
                </p>
                <SkillsList skills={skills} />
            </div>
        </section>
    );
}
