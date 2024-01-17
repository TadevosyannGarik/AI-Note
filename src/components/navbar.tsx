"use client";

import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { BrainCircuit, Plus } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState } from "react";
import AddNoteDialog from "@/components/add-edit-note-dialog";
import { Code2 } from 'lucide-react';
import AIChatButton from "@/components/ai-chat-button";


export default function NavBar() {
    const [showAddEditNoteDialog, setShowAddEditNoteDialog] = useState(false);

    return (
        <>
            <div className="p-4 border-b border-gray-200 bg-white/55 backdrop-blur-xs">
                <div className="m-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
                    <Link href="/notes" className="flex items-center gap-1">
                        <BrainCircuit className="w-10 h-10" />
                        <span className="font-bold">
                            Note AI
                        </span>
                    </Link>
                    <div className="text-center">
                        <Link href="https://github.com/TadevosyannGarik/AI-Note" target="_blank">
                            <Button variant="outline">
                                <Code2 />
                            </Button>
                        </Link>
                    </div>
                    <div className="flex items-center gap-2">
                        <UserButton
                            afterSignOutUrl="/"
                            appearance={{
                            elements: { avatarBox: { width: "2.5rem", height: "2.5rem" } },
                        }}
                    />
                        <Button onClick={() => setShowAddEditNoteDialog(true)}>
                            <Plus size={20} className="mr-2" />
                            Add Note
                        </Button>
                        <AIChatButton />
                    </div>
                </div>
            </div>
            {showAddEditNoteDialog && <AddNoteDialog
                open={showAddEditNoteDialog}
                setOpen={setShowAddEditNoteDialog}
            />}
        </>
    );
}