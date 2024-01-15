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
                    className="cursor-pointer transition-shadow hover:shadow-lg"
                    onClick={() => setShowEditDialog(true)}
                >
                    <CardHeader>
                        <CardTitle className="overflow-hidden whitespace-nowrap overflow-ellipsis">
                            {note.title}
                        </CardTitle>
                        <CardDescription>
                            {createdUpdatedAtTimestamp}
                            {wasUpdated && " (updated)"}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="overflow-hidden whitespace-nowrap overflow-ellipsis">
                            {note.content}
                        </p>
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