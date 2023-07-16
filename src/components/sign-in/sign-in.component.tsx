"use client"
/**
 * Component for user sign-in using Firebase authentication.
 * @returns {JSX.Element} Sign-in form.
 */
import cls from "classnames";
import Image from "next/image";
import styles from "./sign-in.module.css";
import { useRouter } from "next/navigation";
import { usernameAtom, passwordAtom, isLoggedInAtom } from "../../app/lib/context/signInAtoms";
import { useAtom } from "jotai"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/lib/firebase";
import { useState } from "react";

const SignIn: React.FC = () => {
    const router = useRouter();
    const [username, setUserName] = useAtom(usernameAtom);
    const [password, setPassword] = useAtom(passwordAtom);
    const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);
    const [errorLoggingIn, setErrorLoggingIn] = useState(false);
    const clearInputs = () => {
        setUserName("");
        setPassword("");
    };
    /**
     * Handles the sign-in form submission.
     * @param {React.FormEvent} e - The form event.
     */
    const handleSignIn = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, username, password);
            router.push("/dashboard");
            clearInputs();
            setIsLoggedIn(true)
        } catch (error) {
            console.error("Sign-in error:", error)
            setErrorLoggingIn(true);
        }
    };

    /**
     * Handles the input change event.
     * @param {React.FormEvent<HTMLInputElement>} e - The input event.
     */
    const handleOnChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
        const name = (e.target as HTMLInputElement).name;
        const value = (e.target as HTMLInputElement).value;

        if (name === "username") {
            setUserName(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };

    return (
        <div className={styles.signInContainer}>
            <div className={styles.subContainer}>
                <div className="flex justify-center my-3">
                    <Image src="/logo.png" alt="logo" width={150} height={100} />
                </div>

                <form onSubmit={handleSignIn} className={cls("mb-10", styles.form)}>
                    <h2>Administrator Login</h2>
                    <div className={styles.inputbox}>
                        <input type="email" placeholder=" " onChange={handleOnChangeInput} name="username" className={styles.input} required />
                        <span className={errorLoggingIn ? "text-red-600" : ""}>Email</span>
                    </div>
                    <div className={styles.inputbox}>
                        <input type="password" placeholder=" " onChange={handleOnChangeInput} name="password" className={styles.input} required />
                        <span className={errorLoggingIn ? "text-red-600" : ""}>Password</span>
                    </div>
                    {errorLoggingIn ?
                        <div className="relative mt-2" role="alert">
                            <span className="block sm:inline text-red-600">Invalid email or password</span>
                        </div>
                        :
                        null
                    }
                    <input type="submit" className={styles.submit} value="Login" required />
                    <div className={styles.forgetPass}>
                        <a href="#"><span><strong>Forgot password?</strong></span></a>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default SignIn;