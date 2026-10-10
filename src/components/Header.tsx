import React from 'react';
import Image from 'next/image';
import NavLinks from './NavLinks';
import UserInfo from './UserInfo';

const Header = () => {

    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full"
    });

    console.log(date);

    return (
        <header>
            <div className='flex justify-between'>
                <div className='flex items-center gap-2 max-width-7xl mx-auto' >
                    <Image className='w-10 h-10' height={50} width={50} src={'/logo.webp'} alt='' />

                    <div>
                        <h2>Bangla News 24</h2>
                        <div>{date}</div>
                    </div>
                </div>

                <UserInfo/>
            </div>

            <NavLinks />
        </header>
    );
};

export default Header;