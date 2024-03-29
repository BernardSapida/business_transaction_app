import { useUser } from '@/hooks/useUser';
import { useRouter } from 'next/router';
import React from 'react';

const Navbar = () => {
    const router = useRouter();
    const { isLoggedIn } = useUser();

    const handleRedirect = (path) => {
        router.push(path);
    };

    return (
        <nav className="bg-gray-700 p-4 flex justify-between items-center">
            <div className="text-white text-2xl font-bold">E-Billing App {isLoggedIn ? 'ONLINE' : 'OFFLINE'}</div>
            <div className='flex gap-3'>
                <button className="text-white" onClick={() => handleRedirect('/login')}>Login</button>
                <button className="text-white" onClick={() => handleRedirect('/register')}>Register</button>
            </div>
        </nav>
    );
};

export default Navbar;
