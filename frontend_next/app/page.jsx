import { Footer, Navbar } from "@components";
import About from "@components/About/About";
import Clients from "@components/Clients/Clients";
import Contact from "@components/Contact/Contact";
import Hero from "@components/Hero/Hero";
import Info from "@components/Info/Info";
import Quote from "@components/Quote/Quote";

const Home = () => {


    return (
        <main className="main">
            <Navbar />
            <Hero />
            <Quote />
            <Info />
            <About />
            <Contact/>
            <Clients/>
            <Footer />
        </main>
    )
}
export default Home;
