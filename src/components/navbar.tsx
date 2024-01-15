"use client";

import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { BrainCircuit, Plus } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState } from "react";
import AddNoteDialog from "@/components/add-edit-note-dialog";


export default function NavBar() {

    const [showAddEditNoteDialog, setShowAddEditNoteDialog] = useState(false);

    return (
        <>
            <div className="p-4 border-b border-gray-200 bg-white/55 backdrop-blur-xs">
                <div className="m-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
                    <Link href="/notes" className="flex items-center gap-1">
                        <BrainCircuit className="w-10 h-10" />
                        <span className="font-bold">
                            Note
                        </span>
                    </Link>
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