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
                className="text-[#2d2e32] font-bold"
                style={{ fontSize: '2.5rem', fontFamily: 'Poppins,sans-serif' }}
            >
                Don't be shy! Hit me up! 👇
            </h3>
            <div className="flex flex-col md:flex-row mt-14">
                {contactsList.map((contactInfo) => (
                    <div className="flex flex-col md:flex-row justify-center items-center">
                        <span className="bg-auto bg-center bg-no-repeat text-[30px]">
                            <FontAwesomeIcon icon={contactInfo.icon} />
                        </span>
                        <div className="flex flex-col justify-center items-center md:items-start">
                            <h3 className="">{contactInfo.type}</h3>
                            <p>{contactInfo.info}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
