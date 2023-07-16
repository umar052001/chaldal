"use client"
import Home from "@/components/home/home.component";
import { NextUIProvider } from '@nextui-org/react';
import SignIn from "@/components/sign-in/sign-in.component";
import { isLoggedInAtom } from "../lib/context/signInAtoms";
import { useAtom } from "jotai";

const Dashboard = () => {
    const [isLoggedIn] = useAtom(isLoggedInAtom);
    return (
        <div>
            <NextUIProvider>
            {
                isLoggedIn ?
                    <Home /> : <SignIn />
            }
            </NextUIProvider>
        </div>
    );
};

export default Dashboard;