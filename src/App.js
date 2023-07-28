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
  return (
    <div>
      <Header />
      <FormArea addNote={addNote} />
      {notes.map((note) => (
        <Note title={note.title} content={note.content} />
      ))}
      <Footer />
    </div>
  );
}
export default App;
