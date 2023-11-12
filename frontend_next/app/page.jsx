import Link from "next/link";


const Home = () => {
    return (
        <section className="home flex-center ">
            <div className="home-bg-blur"></div>
            <div className="container flex-end">
                <div className="home-heading">
                    <h1>Персонален подход <br />Вдъхновяващи резултати <br /></h1>
                    <span>Еркин Етем - вашият персонален треньор</span>
                </div>

                <Link href='#' className="btn-primary btn-home">
                    <span> </span>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                    Започни сега</Link>

            </div>
        </section>
    )
}
export default Home;
