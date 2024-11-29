export interface NoteData {
    checklist: any;
    id: number;
    category: number;
    title: string;
    content: string;
    status: number;
    created_at: Date;

    isCreating?: boolean;
}