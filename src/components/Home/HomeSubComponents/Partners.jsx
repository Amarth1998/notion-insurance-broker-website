import React from 'react'

const LOGOS = [
    <img width='70%' height='100%' key='1' src="/assets/images/company/Future generali.webp" alt="company1" />,
    <img width='70%' height='100%' key='2' src="/assets/images/company/HDFC ERGo.webp" alt="company2" />,
    <img width='70%' height='100%' key='3'  src="/assets/images/company/ICICI Prudential.webp" alt="company3" />,
    <img width='70%' height='100%' key='4' src="/assets/images/company/icicibank.webp" alt="company4" />,
    <img width='70%' height='100%' key='5' src="/assets/images/company/IFCO TOKIO.webp" alt="company5" />,
    <img width='70%' height='100%' key='6' src="/assets/images/company/liberty.webp" alt="company6" />,
    <img width='70%' height='100%' key='7' src="/assets/images/company/Max Life.webp" alt="company7" />,
    <img width='70%' height='100%' key='8' src="/assets/images/company/National insurance.webp" alt="company8" />,
    <img width='70%' height='100%' key='9' src="/assets/images/company/Niva Bupa Health in.webp" alt="company9" />,
    <img width='70%' height='100%' key='10' src="/assets/images/company/oriental.webp" alt="company10" />,

];

const Partners = () => {
    return (
        <div className='flex items-center justify-center  py-10'>
           <div className='w-[10rem] h-[4rem] bg-[#96d2f5] flex items-center justify-center'>
                <p className='text-md text-white font-semibold rounded-md max-w-max'>Our Partners</p>
           </div>
            <div className="relative m-auto w-screen h-[4rem] overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,#96d2f5_0%,rgba(255,255,255,0)_20%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,#96d2f5_0%,rgba(255,255,255,0)_20%)] after:content-['']">
                <div className="animate-infinite-slider flex h-full w-[calc(450px*10)]">
                    {LOGOS.map((logo, index) => (
                        <div
                            className="slide flex w-[120px] h-full items-center justify-center"
                            key={index}
                        >
                            {logo}
                        </div>
                    ))}
                    {LOGOS.map((logo, index) => (
                        <div
                            className="slide flex w-[120px] h-full items-center justify-center"
                            key={index}
                        >
                            {logo}
                        </div>
                    ))}
                </div>

            </div>

        </div>
    )
}

export default Partners