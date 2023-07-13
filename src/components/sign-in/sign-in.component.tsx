"use client"
import cls from "classnames";
import Image from "next/image";
import styles from "./sign-in.module.css";
import { useRouter } from "next/navigation";
import {usernameAtom,passwordAtom} from "../../app/lib/context/signInAtoms";
import {useAtom} from "jotai"


const SignIn:React.FC = () => {
    const router=useRouter();
    const [username,setUserName]=useAtom(usernameAtom);
    const [password,setPassword]=useAtom(passwordAtom);
    const handleSignIn=(e:React.FormEvent)=>{
        e.preventDefault();
        // TODO: Implement sign in
        router.push("/dashboard");
    }
    const handleOnChangeInput=(e:React.FormEvent<HTMLInputElement>)=>{
        const {name,value}=e.target;
        if(name==="username"){
            setUserName(value);
        }else{
            setPassword(value);
        }
    }
    return (
        <div className={styles.signInContainer}>
            <div className={styles.subContainer}>
                <div className="flex justify-center my-10 ">
                    <Image src="/static/logo.png" alt="logo" width={150} height={100}/>
                </div>
                <form onSubmit={handleSignIn} className={cls("mb-10",styles.form)}>
                    <h2>Administrator Login</h2>
                    <div className={styles.inputbox}>
                        <input type="text" onChange={handleOnChangeInput} name="username" className={styles.input} required/>
                        <span>Username</span>
                    </div>
                    <div className={styles.inputbox}>
                        <input type="password" onChange={handleOnChangeInput} name="password" className={styles.input} required/>
                        <span>Password</span>
                    </div>
                    <input type="submit" className={styles.submit} value="Login" required/>
                    <div className={styles.forgetPass}>
                        <a href="#"><strong>Forgot password?</strong></a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;