

import '@styles/style.css';

export const metadata = {
    title: "Erkin Etem | Personal Trainer",
    description: "Erkin Etem - personal fitnes instructor and trainer lives in Bulgaria"
}

const RootLayout = ({ children }) => {
    return (
        <html lang='en'>
            <head>
                <link rel="icon" href="./assets/favicon.png" sizes='40x40' />
            </head>
            <body>
              
                <div className="app">
                    {children}
                </div>
              
            </body>
        </html>
    )
}
export default RootLayout;
