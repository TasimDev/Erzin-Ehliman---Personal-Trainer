import { Footer, Navbar } from "@components";
import About from "@components/About/About";
import Hero from "@components/Hero/Hero";
import Info from "@components/Info/Info";
import Quote from "@components/Quote/Quote";

const Home = () => {

    const headerVariants = {
        hidden: { x: '100%' },
        visible: { x: 0 },
    };

    return (
        <main className="main">
            <Navbar />
            <Hero />
            <Quote />
            <Info />
            <About />
            <Footer />
        </main>
    )
}
export default Home;
