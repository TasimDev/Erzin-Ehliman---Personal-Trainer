'use client';

import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion';

const Hero = () => {
    const headerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    return (
        <section className="home flex-center ">
            <div className="home-bg-blur"></div>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={headerVariants}
                transition={{ duration: 2 }}
                className="container">
                <div className="home-heading">
                    <h1>Персонален подход <br />Вдъхновяващи резултати <br /></h1>
                    <span>Еркин Етем - вашият персонален треньор</span>
                </div>


                <Link href='#' className="btn-primary btn-home">
                    <span> </span>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                    Започни сега
                </Link>

            </motion.div>
        </section>
    )
}

export default Hero