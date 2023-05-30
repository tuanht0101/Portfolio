import React from 'react';

type Props = {};

export default function Footer({}: Props) {
    return (
        <div className="flex flex-wrap flex-col md:flex-row justify-around items-center bg-[#2d2e32] w-full py-[50px]">
            <p
                className="text-white font-bold"
                style={{ fontFamily: 'Poppins,sans-serif', fontSize: '1.2rem' }}
            >
                Copyright © 2023. All rights are reserved
            </p>
            <span className="flex justify-center md:justify-start space-x-2 py-4">
                <a
                    className="flex bg-white rounded-md w-[23px] h-[23px] justify-center items-center p-[4px]
                    transition-all ease-in-out duration-250 hover:scale-125
                    "
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/tuan-tran-hoang-minh-16a545240/"
                >
                    <img
                        src="images/linkedin-in-bg-white.svg"
                        className="w-8 h-8 cursor-pointer hover:opacity-60"
                    ></img>
                </a>
                <a
                    className="flex bg-white rounded-md w-[23px] h-[23px] justify-center items-center p-[1px]
                    transition-all ease-in-out duration-200 hover:scale-125
                    "
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
    );
}
