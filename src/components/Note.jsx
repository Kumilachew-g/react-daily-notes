import { Paper } from '@material-ui/core';

function Note() {
  return (
    <Paper
      style={{
        minWidth: '200px',
        minHeight: '100px',
        padding: '10px',
        margin: '20px',
      }}
    >
      <h1>Title</h1>
      <p>Content</p>
    </Paper>
  );
}

export default Note;