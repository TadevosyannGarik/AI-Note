import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";


export default function Home() {

    const { userId } = auth();

  if (userId) redirect("/notes");
    return (
        <>
            <div className='mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center'>
                <div
                    aria-hidden='true'
                    className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
                    <div
                        style={{
                            clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[50rem] h-[29.375rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[100rem] sm:h-[58.75rem]'
                    />
                </div>
                <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
                    Chat with your{' '}
                    <span className=' text-indigo-500'>
                        Notes <br />
                    </span>{' '}
                    in seconds.
                </h1>
                <p className='mt-5 max-w-prose text-zinc-700 sm:text-lg'>
                    Note AI allows you to have conversations with your notes. 
                    Simply create notes and start asking questions right away.
                    An intelligent note-taking app with AI integration, built with OpenAI,
                    Pinecone, Next.js, Shadcn UI, Clerk, and more.
                </p>

                <Button size="lg" asChild className='mt-5'>
                    <Link href="/notes">
                        Get started{' '}
                        <ArrowRight className='ml-2 h-5 w-5' />
                    </Link>
                </Button>
            </div> 
        </>
    )
}