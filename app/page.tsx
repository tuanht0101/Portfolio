import About from '@/components/About/About';
import Header from '@/components/Header/Header';
import HomeProfile from '@/components/HomeProfile/HomeProfile';
import Projects from '@/components/Projects/Projects';

export default function Home() {
    const projectData = [
        {
            name: 'Project 1',
            description: 'Description of Project 1',
            technologies: ['Technology 1', 'Technology 2'],
            gitCode: 'https://github.com/project1',
            image: 'images/about-img.webp',
            liveDemo: 'https://project1-demo.com',
        },
        {
            name: 'Project 2',
            description: 'Description of Project 2',
            technologies: ['Technology 3', 'Technology 4'],
            gitCode: 'https://github.com/project2',
            image: 'images/Screenshot 2023-05-28 174908.png',
        },
    ];

    return (
        <main>
            <Header title="MinhTuan.dev" />
            <HomeProfile />
            <About />
            <Projects projectsList={projectData} />
        </main>
    );
}
