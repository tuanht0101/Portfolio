'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

type Props = {
    contactsList: {
        icon: any;
        type: string;
        info: string;
    }[];
};

export default function Contact({ contactsList }: Props) {
    return (
        <section
            id="Contact"
            className="flex flex-col items-center py-20 md:py-[110px]"
        >
            <p className="uppercase text-[#147efb] text-2xl font-bold mb-4">
                Contact
            </p>
            <h3
                className="text-[#2d2e32] font-bold text-center sm:text-center"
                style={{ fontSize: '2.5rem', fontFamily: 'Poppins,sans-serif' }}
            >
                Don't be shy! Hit me up! 👇
            </h3>
            <div className="flex flex-col flex-wrap px-2 md:px-4 md:flex-row mt-14 gap-[5rem] md:gap-[8rem]">
                {contactsList.map((contactInfo) => (
                    <div className="flex flex-col md:flex-row justify-center items-center gap-[1rem]">
                        <span
                            className="flex w-[34px] h-[31px] text-[24px] text-[#147efb] box-border rounded-full items-center justify-center"
                            style={{
                                boxShadow: '0 0 10px rgba(0,0,0,0.1)',
                                padding: '2.1rem',
                            }}
                        >
                            <FontAwesomeIcon icon={contactInfo.icon} />
                        </span>
                        <div className="flex flex-col justify-center items-center flex-wrap md:items-start">
                            <h3
                                className="text-[#2d2e32] text-lg font-bold"
                                style={{ fontFamily: 'Poppins,sans-serif' }}
                            >
                                {contactInfo.type}
                            </h3>
                            <p
                                className="text-[#767676]"
                                style={{ fontFamily: 'Poppins,sans-serif' }}
                            >
                                {contactInfo.info}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
