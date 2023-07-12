"use client"
import cls from "classnames";
import Image from "next/image";
import styles from "./sign-in.module.css";
import { useRouter } from "next/navigation";
import { usernameAtom, passwordAtom } from "../../app/lib/context/signInAtoms";
import { useAtom } from "jotai"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/lib/firebase";


const SignIn: React.FC = () => {
    const router = useRouter();
    const [username, setUserName] = useAtom(usernameAtom);
    const [password, setPassword] = useAtom(passwordAtom);
    const handleSignIn = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, username, password);
            router.push("/dashboard");
            console.log("signed in success")
        } catch (error) {
            console.error("Sign-in error:", error);
        }
    }
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
                <Image src="/logo.png" alt="logo" width={150} height={100} />
                <form onSubmit={handleSignIn} className={cls("mb-10", styles.form)}>
                    <h2>Administrator Login</h2>
                    <div className={styles.inputbox}>
                        <input type="email" onChange={handleOnChangeInput} name="username" className={styles.input} required />
                        <span>Username</span>
                    </div>
                    <div className={styles.inputbox}>
                        <input type="password" onChange={handleOnChangeInput} name="password" className={styles.input} required />
                        <span>Password</span>
                    </div>
                    <input type="submit" className={styles.submit} value="Login" required />
                    <div className={styles.forgetPass}>
                        <a href="#"><span><strong>Forgot password?</strong></span></a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;