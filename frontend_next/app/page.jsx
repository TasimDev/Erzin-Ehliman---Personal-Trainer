import { Footer, Navbar } from "@components";
import About from "@components/About/About";
import Calcolator from "@components/Calcolator/Calcolator";
import Clients from "@components/Clients/Clients";
import Contact from "@components/Contact/Contact";
import Hero from "@components/Hero/Hero";
import Info from "@components/Info/Info";
import Packages from "@components/Packages/Packages";
import Quote from "@components/Quote/Quote";

const Home = () => {


    return (
        <main className="main">
            <Navbar />
            <Hero />
            <Quote />
            <Info />
            <About />
            <Contact />
            <Clients />
            <Packages />
            <Calcolator />
            <Footer />
        </main>
    )
}
export default Home;
