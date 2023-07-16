import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface DrawerSubOptions {
    id:Number,
    subOptionTitle:string,
    subOptionIconUrl:string,
    subOptionRoute:string,
}
interface DrawerOptionProps {
    title: string;
    mainIcon: string;
    optionRoute: string;
    subOptions: DrawerSubOptions[] | undefined;
}
const DrawerOption:React.FC<DrawerOptionProps>=(props)=>{
    const [isDropDownVisible,setIsDropDownVisible]=useState(false);
    const {title,mainIcon,optionRoute,subOptions}=props;
    const router=useRouter();
    const toggleDropDown=()=>{
        setIsDropDownVisible(!isDropDownVisible);
        if(!subOptions){
            router.push(optionRoute);
        }
    }
    return(
        <div className="cursor-pointer select-none">
                <div onClick={toggleDropDown} className={`p-3 flex content-center hover:bg-[var(--secondary-100)] transition-all ${isDropDownVisible?"bg-[var(--secondary-100)]":""}`}>
                    <Image className="inline-block fill-current mr-2" src={mainIcon} alt="icon" width={16} height={16}/>
                    <span className="text-slate-300">{title}</span>
                </div>
            {
                subOptions?
                (<ul className={`flex content-center flex-wrap bg-[var(--secondary-80)] group transition-all px-3 m-0 duration-300 overflow-hidden ${isDropDownVisible?`h-[${subOptions.length*45}px] py-3`:"h-0"}`}>
                    {
                        subOptions.map((option:DrawerSubOptions)=>{
                            return (
                                <li key={String(option.id)} className="text-slate-300 mb-0">
                                    <Link href={option.subOptionRoute}>
                                        <Image className="inline-block  fill-current mr-2" src={option.subOptionIconUrl} alt="icon" width={16} height={16}/>
                                        <span className="text-slate-300 group-hover:text-white transition-all">{option.subOptionTitle}</span>
                                    </Link>
                                </li>
                            )
                        })
                    }
                    
                </ul>):null
            }
        </div>
    )
}
export default DrawerOption;