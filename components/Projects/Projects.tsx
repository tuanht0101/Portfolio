import React from 'react';

type Props = {
    projectsList: {
        name: string;
        description: string;
        technologies: string[];
        gitCode: string;
        image: string;
        liveDemo?: string;
    }[];
};

export default function Projects({ projectsList }: Props) {
    return (
        <section id="Projects" className="bg-gray-200 py-8 px-4">
            <h2 className="text-2xl text-center font-bold uppercase mb-6">
                Portfolio
            </h2>
            <h3 className="text-lg text-center mb-6">
                Each project is a unique piece of development 🧩
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projectsList.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-md p-4"
                    >
                        <h4 className="text-xl font-semibold mb-2">
                            {item.name}
                        </h4>
                        <p className="text-gray-700 mb-4">{item.description}</p>
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-80 object-cover rounded-md mb-4"
                        />
                        <ul className="flex space-x-2">
                            {item.technologies.map((technology, index) => (
                                <li
                                    key={index}
                                    className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm"
                                >
                                    {technology}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-4">
                            <a
                                href={item.gitCode}
                                className="text-blue-600 font-semibold mr-4"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Code
                            </a>
                            {item.liveDemo && (
                                <a
                                    href={item.liveDemo}
                                    className="text-blue-600 font-semibold"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
