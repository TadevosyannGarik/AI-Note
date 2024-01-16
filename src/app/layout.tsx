import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from "@clerk/nextjs";
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/sonner'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'AI Note',
    description: 'AI Note',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body  className={cn('antialiased grainy', inter.className)}>
                    <Toaster />
                    {children}
                </body>
            </html>
        </ClerkProvider>
    )
}
