import React from 'react';

interface ChecklistItem {
  id: number;
  text: string;
  completed: boolean;
}

interface NoteCardProps {
  title: string;
  content: string;
  checklist: ChecklistItem[];
  onDeleteNote: () => void;
}

const NoteCard: React.FC<NoteCardProps> = ({ title, content, checklist, onDeleteNote }) => {
  return (
    <div className="note-card bg-white shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="mb-4">{content}</p>
      <ul>
        {checklist.map(item => (
          <li key={item.id} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={item.completed}
              readOnly
              className="mr-2"
            />
            <span className={item.completed ? 'line-through' : ''}>{item.text}</span>
          </li>
        ))}
      </ul>
      <button onClick={onDeleteNote} className="mt-4 text-red-500">Delete</button>
    </div>
  );
};

export default NoteCard;