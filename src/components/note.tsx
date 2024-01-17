"use client";

import { Note as NoteModel } from "@prisma/client";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card";
import AddEditNoteDialog from "./add-edit-note-dialog";


interface NoteProps {
    note: NoteModel;
}

export default function Note({ note }: NoteProps) {
    const [showEditDialog, setShowEditDialog] = useState(false);
      
    const wasUpdated = note.updatedAt > note.createdAt;
      
    const createdUpdatedAtTimestamp = (
        wasUpdated ? note.updatedAt : note.createdAt
    ).toDateString();
      
    return (
        <>
            <Card
                className="cursor-pointer transition-shadow hover:shadow-lg max-h-[250px] overflow-hidden"
                onClick={() => setShowEditDialog(true)}
            >
                <CardHeader>
                    <CardTitle>{note.title}</CardTitle>
                    <CardDescription>
                        {createdUpdatedAtTimestamp}
                        {wasUpdated && " (updated)"}
                    </CardDescription>
                </CardHeader>
                <CardContent className="max-h-[200px] overflow-y-auto">
                    <p className="whitespace-pre-line">{note.content}</p>
                </CardContent>
            </Card>
            <AddEditNoteDialog
                open={showEditDialog}
                setOpen={setShowEditDialog}
                noteToEdit={note}
            />
        </>
    );
}