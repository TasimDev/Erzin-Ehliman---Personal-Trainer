'use client';

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="nav ">
            <div className="container flex-between">
                <div className="nav-logo">
                    <Link href='/'>
                        <Image
                            src="/assets/nav-logo-white.png"
                            alt="Logo"
                            width={100}
                            height={100}
                            className="logo-img"
                        />
                    </Link>
                </div>
                <ul className="nav-menu flex-center">
                    <li className="nav-link active"><Link href='/'>Начало</Link></li>
                    <li className="nav-link"><Link href='/'>Персонални Тренировки</Link></li>
                    <li className="nav-link"><Link href='/'>Свържете се с мен</Link></li>
                    <li className="nav-link"><Link href='/'>Еркин Етем</Link></li>
                </ul>
                <div className={`mobile-menu-btn ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
                <ul className={`nav-menu-mobile ${isOpen ? 'active' : ''}`}>

                    <li className="nav-link active"><Link href='/' onClick={toggleMenu}>Начало</Link></li>
                    <li className="nav-link"><Link href='/' onClick={toggleMenu}>Персонални Тренировки</Link></li>
                    <li className="nav-link"><Link href='/' onClick={toggleMenu}>Свържете се с мен</Link></li>
                    <li className="nav-link"><Link href='/' onClick={toggleMenu}>Еркин Етем</Link></li>

                </ul>
            </div>
        </motion.div >
    )
}

export default Navbar