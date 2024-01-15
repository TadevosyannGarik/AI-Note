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
            {allNotes.map((note) => (
                <Note note={note} key={note.id} />
            ))}
            {allNotes.length === 0 && (
                <div className="col-span-full text-center pt-40 text-xl">
                    {"You don't have any notes yet. Why don't you create one?"}
                </div>
            )}
        </div>
    )
}