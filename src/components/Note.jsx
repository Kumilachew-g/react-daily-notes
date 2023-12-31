import { Button, Paper } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

function Note({ title, content, id, deleteNote }) {
  function clickHandler() {
    deleteNote(id);
  }
  return (
    <Paper
      style={{
        minWidth: '200px',
        minHeight: '100px',
        padding: '10px',
        margin: '20px',
        display: 'inline-flex',
      }}
    >
      <div>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
      <Button onClick={clickHandler} style={{ marginLeft: '120px' }}>
        <DeleteIcon style={{ color: 'red' }} />
      </Button>
    </Paper>
  );
}

export default Note;
