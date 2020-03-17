import React, { useState, FunctionComponent } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';

export const App: FunctionComponent = () => {
  const [num, setNum] = useState(0);

  const testClick = (e: React.MouseEvent): void => {
    e.preventDefault();
    setNum(num + 1);
  };
  return (
    <>
      <CssBaseline />
      <p>Hallo, dies ist ein Test: {num}</p>
      <Button variant="contained" onClick={testClick}>
        TEST IT
      </Button>
    </>
  );
};
