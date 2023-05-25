import Header from '@/components/Header/Header';
import HomeProfile from '@/components/HomeProfile/HomeProfile';
import Image from 'next/image';

export default function Home() {
    return (
        <main>
            <Header title="MinhTuan.dev" />
            <HomeProfile />
        </main>
    );
}
