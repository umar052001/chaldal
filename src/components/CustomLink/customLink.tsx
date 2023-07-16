"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const CustomLink = () => {
    const path=usePathname();
    const links=path.split("/").filter(el=>el!=="");
    return (
            <span >
                {links.map((p,idx)=>{
                    return  <span key={idx}>
                        {
                            idx===links.length-1? <span className="select-none capitalize">{p}</span>:
                            <Link className="text-blue-400 capitalize hover:underline leading-4" href={`/dashboard${idx==-0?"":`/${p}`}`} >{p}</Link>
                        }
                                {idx!==links.length-1?<span className="px-1 text-lg font-bold">/</span>:""}
                            </span>
                })}
            </span>
    );
};

export default CustomLink;