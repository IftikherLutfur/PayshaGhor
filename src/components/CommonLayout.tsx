import type { ReactNode } from "react";
import { Navbar } from "./Shared/Navbar";
    
interface IProps {
    children: ReactNode
}
export default function CommonLayout({ children }: IProps) {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="grow-1">
                {children}
            </main>
        </div>
    )
}