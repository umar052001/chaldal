"use client"
import Home from "@/components/home/home.component";
import SignIn from "@/components/sign-in/sign-in.component";
import { isLoggedInAtom } from "../lib/context/signInAtoms";
import { useAtom } from "jotai";

const Dashboard = () => {
    const [isLoggedIn] = useAtom(isLoggedInAtom);
    return (
        <div>
            {
                isLoggedIn ?
                    <Home /> : <SignIn />
            }
        </div>
    );
};

export default Dashboard;