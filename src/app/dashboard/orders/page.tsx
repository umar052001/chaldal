"use client"
import { isLoggedInAtom } from "@/app/lib/context/signInAtoms";
import SignIn from "@/components/sign-in/sign-in.component";
import { useAtom } from "jotai";

const Order = () => {
    const [isLoggedIn] = useAtom(isLoggedInAtom)
    if (!isLoggedIn) {
        return <SignIn />
    }
    return (
        <div>
            Order
        </div>
    )
}
export default Order;