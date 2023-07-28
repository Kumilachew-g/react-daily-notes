import { useState } from 'react';
import Footer from './components/Footer';
import FormArea from './components/FormArea';
import Header from './components/Header';
import Note from './components/Note';

function App() {
  const [notes, setNotes] = useState([]);
  console.log(notes);

  function addNote(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }
  return (
    <div>
      <Header />
      <FormArea addNote={addNote} />
      <Note />
      <Note />
      <Note />
      <Footer />
    </div>
  );
}
export default App;
