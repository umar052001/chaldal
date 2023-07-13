"use client"
import NavBar from "@/components/navbar/navbar.component";
import Drawer from "@/components/sidebar/sidebar.component";
import { isLoggedInAtom } from "../lib/context/signInAtoms";
import { useAtom } from "jotai";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isLoggedIn] = useAtom(isLoggedInAtom);

    return (
        <div>
            {isLoggedIn && <NavBar />}
            {isLoggedIn && <Drawer />}
            <main>{children}</main>
        </div>
    );
}
