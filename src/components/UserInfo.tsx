"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';

const UserInfo = () => {

    const { data: session } = authClient.useSession();
    const user = session?.user;

    const handleSignOut = async () => {
        await authClient.signOut();
    }


    return (
        <div className='flex gap-2'>
            {
                user ? (<div className='flex flex-col items-center gap-2'>
                    <Link href={'/profile'}>
                        <div className="avatar">
                            <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                                <img
                                    alt="Tailwind-CSS-Avatar-component"
                                    src="{user?.image as string}"
                                />
                            </div>
                        </div>
                    </Link>

                    <h2>{user?.name}</h2>
                    <button onClick={handleSignOut} className='btn btn-error btn-xl'>Sign Out</button>

                </div>) : (<div>
                    <Link href={'/signin'}>
                        <button className='btn'>সাইন ইন</button>
                    </Link>
                    <Link href={'/signup'}>
                        <button className='btn bg-red-700 text-white'>সাইন আপ</button>
                    </Link>
                </div>)
            }
        </div>

    );
};

export default UserInfo;