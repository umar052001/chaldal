"use client"
import cls from "classnames";
import Image from "next/image";
// ign-in.module.css";
import { useRouter } from "next/navigation";

const SignIn = () => {
    const router=useRouter();
    const handleSignIn=()=>{
        router.push("/dashboard");
    }

    return (
        <div>
            Dashboard
        </div>
    );
};

export default SignIn;