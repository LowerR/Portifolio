import '../app/globals.css';
import React from 'react';
import Image from 'next/image';



function Home() {
    return (
        <div className='bg-gradient-to-r from-purple-500 to-blue-500 p-4"'>
            <div className='h-screen flex items-center justify-end'>
                <div className='mx-auto text-white'>
                  <h4 className='relative top-7 left-2 font-sans font-bold text-2xl'>OLÁ, MEU NOME É LUCAS</h4>
                    <div className='flex text-white space-x-2'>
                      <h1 className=' text-9xl relative top-5 font-sans'>REACT</h1>
                        <div className='flex flex-row space-x-5 relative top-16 left-5' >
                          <a href='https://www.linkedin.com/in/lucas-orlando-159a51246/' title='Linkedin' target="_blank"><Image src="/images/linkedin.svg" alt="Linkedin" width={45} height={45} /></a>
                          <a href='https://github.com/LowerR' title='GitHub' target="_blank"><Image src="/images/github.svg" alt="Linkedin" width={45} height={45} /></a>
                          <a href='/images/curriculo.pdf' download="Curriculo" title='Curriculo' target="_blank"><Image src="/images/curriculo.svg" alt="Linkedin" width={35} height={35} /></a>
                        </div>
                    </div>
                  <h1 className=' text-9xl'>DEVELOPER</h1>
                  <p className='text-center text-2xs font-sans'>Tenho 18 anos, sou desenvolvedor frontend com 6 meses de experiencia trabalhando como freelancer.</p>
                </div>
            </div>
        </div>
    )
}

export default Home 