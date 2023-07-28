import { Fab, Paper, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';

function FormArea({ addNote }) {
  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  function clickHandler() {
    addNote(note);
    setNote({
      title: '',
      content: '',
    });
  }

  function changeHandler(e) {
    const { name, value } = e.target;
    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  // console.log(note);
  return (
    <Paper style={{ margin: '10px 10%', padding: '25px 50px' }}>
      <form>
        <TextField
          onChange={changeHandler}
          label='title'
          name='title'
          value={note.title}
          fullWidth
          autoComplete='off'
        />
        <TextField
          onChange={changeHandler}
          label='content'
          name='content'
          value={note.content}
          multiline
          rows={4}
          fullWidth
          autoComplete='off'
        />
        <Fab onClick={clickHandler} style={{ marginTop: '20px' }}>
          <AddIcon />
        </Fab>
      </form>
    </Paper>
  );
}

export default FormArea;
