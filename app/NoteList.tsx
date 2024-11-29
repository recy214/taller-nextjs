import { NoteData } from "./types/Note";
import NoteCard from "./NoteCard";

interface NoteListProps {
    notes: NoteData[];
    onUpdateNote: (updatedNote: NoteData) => Promise<void>;
    onDeleteNote: (noteId: number) => void;
}

const NoteList = ({ notes, onUpdateNote, onDeleteNote }: NoteListProps) => {
    return (
        <div className="flex flex-wrap p-6 gap-6 bg-primaryBlack text-neonGreen max-h-screen overflow-auto rounded-lg">
            {notes.map((note) => (
                <NoteCard
                    key={note.id}
                    title={note.title}
                    content={note.content}
                    checklist={note.checklist}
                    onDeleteNote={() => onDeleteNote(note.id)}
                />
            ))}
        </div>
    );
};

export default NoteList;