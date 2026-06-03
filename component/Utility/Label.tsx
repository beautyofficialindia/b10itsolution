import { cn } from "@/lib/utils";

export const Label = ({children, className, ...props} : {children: React.ReactNode; className?:string;} & React.LabelHTMLAttributes<HTMLLabelElement>) => {
    return (   
        <label {...props} className={cn("text-neutral-700 font-medium", className)}>
            {children}
        </label>  
    )
}