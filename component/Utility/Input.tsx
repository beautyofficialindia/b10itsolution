import { cn } from "@/lib/utils";

export const Input = ({className, ...props }: {className?: string } & React.InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <input
        {...props}
            className={cn("focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2 border focus:border-neutral-300 focus:bg-neutral-100 border-transparent px-4 py-2 bg-gray-50 rounded-lg shadow-input transition-all duration-200 placeholder:text-neutral-300", className)}
        />

    )
}