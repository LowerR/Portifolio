import '../app/globals.css';
import React from 'react';
import Image from 'next/image';



function Home() {
    return (
        <div className='bg-gradient-to-r from-purple-500 to-blue-500 h-screen"'>
            <div className='h-screen flex items-center'>
                <div className='mx-auto text-white'>
                    <div className='flex text-white flex-col'>
                        <h1 className='font-sans font-bold pl-4 text-xs sm:text-base md:text-xl'>OLÁ, MEU NOME É LUCAS</h1>
                        <div className='flex items-center'>
                          <h1 className='font-sans pl-3 text-5xl sm:text-5xl md:text-8xl'>REACT</h1>
                          <div className='flex flex-row space-x-2 justify-center pl-3'>
                           <a href='https://www.linkedin.com/in/lucas-orlando-159a51246/' title='Linkedin' target="_blank" className='w-5 sm:w-base md:w-16'><Image src="/images/linkedin.svg" alt="Linkedin" width={45} height={45} /></a>
                           <a href='https://github.com/LowerR' title='GitHub' target="_blank" className='w-5 md:w-16'><Image src="/images/github.svg" alt="Linkedin" width={45} height={45} /></a>
                           <a href='/images/curriculo.pdf' download="Curriculo" title='Curriculo' target="_blank" className='w-5 md:w-16'><Image src="/images/curriculo.svg" alt="Linkedin" width={35} height={35} /></a>
                           </div>
                        </div>
                        <h1 className='pl-3 text-5xl sm:text-5xl md:text-8xl'>DEVELOPER</h1>
                        <p className='pl-4 text-xs font-sans'>Tenho 18 anos, sou desenvolvedor frontend com 6 meses de experiencia trabalhando como freelancer.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home 