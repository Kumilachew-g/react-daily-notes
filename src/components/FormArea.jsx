import { Fab, Paper, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

function FormArea() {
  return (
    <Paper style={{ margin: '10px 10%', padding: '25px 50px' }}>
      <form>
        <TextField label='title' fullWidth autoComplete='off' />
        <TextField
          label='content'
          multiline
          rows={4}
          fullWidth
          autoComplete='off'
        />
        <Fab style={{ marginTop: '20px' }}>
          <AddIcon />
        </Fab>
      </form>
    </Paper>
  );
}

export default FormArea;
