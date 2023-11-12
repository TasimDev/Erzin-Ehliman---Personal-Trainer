
import { Footer, Navbar } from '@components';

import '@styles/style.css';

export const metadata = {
    title: "Erkin Etem | Personal Trainer",
    description: "Erkin Etem - personal fitnes instructor and trainer lives in Bulgaria"
}

const RootLayout = ({ children }) => {
    return (
        <html>
            <head>
                <link rel="icon" href="./assets/favicon.png" sizes='80x80' />
            </head>
            <body>
                <Navbar />
                <div className="app">
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    )
}
export default RootLayout;
