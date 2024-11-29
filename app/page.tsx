"use client";

import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import NoteCard from './NoteCard';

const Page: React.FC = () => {
  const [count, setCount] = useState(1); // Inicializar con 1 porque ya hay una nota inicial
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'Titulo',
      content: 'Agregar contenido a la tarjeta',
      checklist: [
        { id: 1, text: 'Item 1', completed: false },
        { id: 2, text: 'Item 2', completed: true },
        { id: 3, text: 'Item 3', completed: false },
      ],
    },
  ]);

  useEffect(() => {
    console.log(`Count has changed to: ${count}`);
  }, [count]);

  const addNote = () => {
    const newNote = {
      id: notes.length + 1,
      title: `Titulo ${notes.length + 1}`,
      content: 'Agregar contenido a la tarjeta',
      checklist: [
        { id: 1, text: 'Item 1', completed: false },
        { id: 2, text: 'Item 2', completed: true },
        { id: 3, text: 'Item 3', completed: false },
      ],
    };
    setNotes([...notes, newNote]);
    setCount(count + 1); // Incrementar el contador cada vez que se agrega una nueva nota
  };

  const deleteNote = (id: number) => {
    setNotes(notes.filter(note => note.id !== id));
    setCount(count - 1); // Decrementar el contador cada vez que se elimina una nota
  };

  return (
    <div className="page">
      <Sidebar items={['Home', 'Sobre nosotros', 'Contacto']} />
      <div className="content">
        <h1>Bienvenido al gestor de notas</h1>
        <button onClick={addNote}>Haz click para generar notas</button>
        <p>Notas generadas: {count}</p>
        {notes.map(note => (
          <NoteCard
            key={note.id}
            title={note.title}
            content={note.content}
            checklist={note.checklist}
            onDeleteNote={() => deleteNote(note.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;