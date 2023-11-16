import Image from "next/image"


const Footer = () => {
    return (
        <section id="footer">
            <div className="container flex-center">
                <div className="title flex-center">
                    <Image src="/assets/nav-logo.png" alt="logo" width={300} height={300}></Image>
                &#169; 2023 Erkin Etem. All Rights Reserved.
                </div>
            </div>
        </section>
    )
}

export default Footer