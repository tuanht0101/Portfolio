import About from '@/components/About/About';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import HomeProfile from '@/components/HomeProfile/HomeProfile';
import Projects from '@/components/Projects/Projects';
import {
    faEnvelope,
    faMapLocation,
    faPhone,
} from '@fortawesome/free-solid-svg-icons';

export default function Home() {
    const projectData = [
        {
            name: 'Project: Daily Blog',
            description:
                'This is a web blog that i created by myself to use it for my Project 2 from my school.',
            technologies: ['ReactJS', 'NodeJS', 'MongoDB'],
            gitCode: 'https://github.com/tuanht0101/react-blog',
            image: 'images/react_blog.png',
            liveDemo: 'https://project1-demo.com',
        },
        {
            name: 'Project: Education Website',
            description:
                'This is an education website created by me and my friends from school where i took care of Front-End.',
            technologies: ['ReactJS', 'ASP .NET', 'SQL', 'Docker'],
            gitCode:
                'https://github.com/tuanht0101/Coursenest-Education-Website',
            image: 'images/Screenshot 2023-05-28 174908.png',
        },
    ];

    const contactsList = [
        { icon: faMapLocation, type: 'Location', info: 'Hanoi, Vietnam' },
        { icon: faEnvelope, type: 'Mail', info: 'minhtuanphc201@gmail.com' },
        { icon: faPhone, type: 'Phonenumber', info: '+84911095607' },
    ];

    return (
        <main>
            <Header title="MinhTuan.dev" />
            <HomeProfile />
            <About />
            <Projects projectsList={projectData} />
            <Contact contactsList={contactsList} />
            <Footer />
        </main>
    );
}
