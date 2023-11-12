'use client';

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"


const Navbar = () => {
    return (
        <nav className="nav ">
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
                <div className="mobile-menu-btn">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
                <ul className="nav-menu-mobile ">

                    <li className="nav-link active"><Link href='/'>Начало</Link></li>
                    <li className="nav-link"><Link href='/'>Персонални Тренировки</Link></li>
                    <li className="nav-link"><Link href='/'>Свържете се с мен</Link></li>
                    <li className="nav-link"><Link href='/'>Еркин Етем</Link></li>

                </ul>
            </div>
        </nav>
    )
}

export default Navbar