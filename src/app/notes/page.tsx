import Note from "@/components/note";
import prisma from "@/lib/db/prisma";
import { auth } from "@clerk/nextjs";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "FlowBrain - Notes",
};

export default async function NotePage() {
    const { userId } = auth();

    if (!userId) throw new Error("User ID Undefined");

    const allNotes = await prisma.note.findMany({ 
        where: { 
            userId 
        } 
    });
    
    return (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div
                aria-hidden='true'
                className='pointer-events-none absolute inset-x-0 top-0  transform-gpu overflow-hidden blur-3xl sm:-top-80'>
                <div
                    style={{
                        clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[50rem] h-[29.375rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(40%-10rem)] sm:w-[100rem] sm:h-[58.75rem]'
                />
            </div>
            {allNotes.map((note) => (
                <Note note={note} key={note.id} />
            ))}
            {allNotes.length === 0 && (
                <div className="col-span-full text-center p-10 text-xl bg-white/55 border rounded-lg border-gray-200">
                    {"You don't have any notes yet. Why don't you create one?"}
                </div>
            )}
            
        </div>
    )
}