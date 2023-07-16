"use client"
import Home from "@/components/home/home.component";
import { NextUIProvider } from '@nextui-org/react';

const Dashboard = () => {

    return (
        <div>
            <NextUIProvider>
                <Home/>
            </NextUIProvider>
        </div>
    );
};

export default Dashboard;