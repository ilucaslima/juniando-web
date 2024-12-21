import Image from 'next/image';
import React from 'react';

export default function Header() {
    return (
        <>
            <div className="flex justify-between mx-36 mt-4 flex-wrap text-center itens-center">
                <div className="">
                    <Image 
                        src="/Logo.svg" 
                        alt="Juniando" 
                        width={174} 
                        height={38} 
                    />    
                </div>
                <div className="">
                    <a className='text-lg mr-28 text-graytext hover:border-b-4 border-blue transition-all duration-100' href='#'>Home</a>
                    <a className='text-lg mr-28 text-graytext hover:border-b-4 border-blue transition-all duration-100' href='#'>Artigos</a>
                    <a className='text-lg mr-28 text-graytext hover:border-b-4 border-blue transition-all duration-100' href='#'>Vagas</a>
                    <a className='text-lg mr-28 text-graytext hover:border-b-4 border-blue transition-all duration-100' href='#'>Sobre nós</a>
                </div>
                <div className="">
                    <button className='bg-blue px-5 py-2 rounded-full text-white font-semibold'>SIGN IN</button>
                </div>
            </div>
        </>
    )
}