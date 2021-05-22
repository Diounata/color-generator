import Header from '../Components/Header';
import ColorGenerator from '../Components/ColorGenerator';
import Footer from '../Components/Footer';

import { ColorContextProvider } from '../Contexts/ColorContext';

export default function Home() {
    return (
        <ColorContextProvider>
            <Header />
            <ColorGenerator />
            <Footer />
        </ColorContextProvider>
    );
}
