import React from 'react';
import Paper from '@material-ui/core/Paper';

function Header() {
  return (
    <Paper style={{ padding: '5px', display: 'flex' }} square elevation={3}>
      <img
        style={{ width: '60px' }}
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYNH9kZSS3ypHqRs37553_d5wTXdAMMq6kvA&usqp=CAU'
        alt=''
      />
      <h1 style={{ margin: '0', fontFamily: 'cursive', fontWeight: '100' }}>
        Daily Notes
      </h1>
    </Paper>
  );
}

export default Header;
