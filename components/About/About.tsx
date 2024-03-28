import React from 'react';

type Props = {};

export default function About({}: Props) {
    return (
        <section
            id="About"
            className="flex flex-col  md:flex-row justify-center  py-[150px] px-8 md:px-16"
        >
            <div className="md:flex md:w-[355px]">
                <img
                    className="max-w-full h-full rounded-lg"
                    src="images/about-img.webp"
                ></img>
            </div>
            <div className="flex flex-col justify-center items-center md:items-start  w-full md:max-w-[500px] md:ml-16 mt-8 md:mt-0">
                <h4 className="text-[#147efb] uppercase font-bold">about me</h4>
                <h3
                    className="font-[Poppins] text-[#2d2e32] text-[1.5rem] font-black
                leading-snug mt-2 mb-4
                "
                >
                    A dedicated Website Developer studying at Hanoi University
                    of Science and Technology 📍
                </h3>
                <p className="text-[#767676] font-mulish font-sans font-[500] leading-normal">
                    As a Website Developer, I possess an impressive arsenal of
                    skills in HTML, CSS, JavaScript, React, Tailwind, SCSS,
                    NestJS. I excel in designing and maintaining responsive
                    websites that offer a smooth user experience. My expertise
                    lies in crafting dynamic, engaging interfaces through
                    writing clean and optimized code and utilizing cutting-edge
                    development tools and techniques.
                </p>
            </div>
        </section>
    );
}
