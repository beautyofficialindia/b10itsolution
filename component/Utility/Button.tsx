import { cn } from "@/lib/utils"
import { ButtonHTMLAttributes } from "react";

export const Button = ({children, className,} : {children:React.ReactNode; className?:string} & ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button className={cn("bg-green-700 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-green-800 transition duration-150 hover:-translate-y-0.5 active:scale-95", className)}>
            {children}
        </button>
    )
} 