"use client"
import { useAtom } from 'jotai';
import Image from 'next/image';
import {isDrawerOpenAtom} from "../../app/lib/context/dashboardAtoms";

const NavBar = () => {
    const [isDrawerOpen,setIsDrawerOpen]=useAtom(isDrawerOpenAtom)
    const toggleDrawer=()=>{
        setIsDrawerOpen(!isDrawerOpen);
    }

    return (
        <div className='bg-[var(--primary-90)] sticky top-0 left-0 z-20 flex justify-between p-3'>

            <span onClick={toggleDrawer} className="w-8 h-8 cursor-pointer">
                <div className={`mx-auto h-1 w-[90%] bg-black transition-all ${isDrawerOpen?"rotate-[45deg] w-[100%] mt-4":"mt-1.5"}`}></div>
                {!isDrawerOpen && <div className='mx-auto my-1 h-1 w-[90%] bg-black transition-all'></div>}
                <div className={`mx-auto h-1 w-[90%] bg-black transition-all ${isDrawerOpen?"rotate-[-45deg] w-[100%] mb-4":"mb-1.5"}`}></div>
            </span>
            <Image src="/static/logo.png" alt="logo" height={96} width={120} className='cursor-pointer'/>
            <Image src="/static/icons/admin.png" alt="hamburger icon" height={32} width={32} className='cursor-pointer'/>
        </div>
    );
};

export default NavBar;