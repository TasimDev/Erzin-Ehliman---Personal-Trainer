import Image from "next/image"
import Link from "next/link"


const Info = () => {
    return (
        <div className="info">
            <div className="info-first flex-center">
                <div className="title">
                    <div className="wrapper">  <h2>Влез в мечтаната форма</h2>
                        <span>Мотивирай се още повече, поглени клиентите които постигат успех всеки ден.</span>
                        <Link href="#clients" className="info-btn info-btn-first">Доволни клиенти</Link></div>

                </div>
                <div className="image">
                    <img src="/assets/logan-weaver-lgnwvr-sPiMBrdGG9c-unsplash.jpg" alt="first-image-info" />
                </div>
            </div>
            <div className="info-second flex-center">
                <div className="title">
                    <div className="wrapper"><h2>Започни да постигаш целите си oще от сега</h2>
                        <span>Погледни пакетите които ти подготвих и започни тренировките си точно сега.</span>
                        <Link href="#packages" className="info-btn info-btn-second">Пакети</Link></div>

                </div>
                <div className="image">
                    <img src="/assets/anastase-maragos-fG0p4Qh_aWI-unsplash.jpg" alt="second-image-info" />
                </div>
            </div>
        </div>
    )
}

export default Info