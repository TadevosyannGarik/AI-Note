import NavBar from "@/components/navbar";
import { Toaster } from "@/components/ui/sonner";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <NavBar />
            <main className="m-auto max-w-7xl p-4">
                <Toaster />
                {children}
            </main>
        </>
    );
}