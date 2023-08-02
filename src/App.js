import { useState } from 'react';
import Footer from './components/Footer';
import FormArea from './components/FormArea';
import Header from './components/Header';
import Note from './components/Note';

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <FormArea addNote={addNote} />
      {notes.map((note, index) => (
        <Note
          id={index}
          deleteNote={deleteNote}
          title={note.title}
          content={note.content}
          key={index}
        />
      ))}
      <Footer />
    </div>
  );
}
export default App;
