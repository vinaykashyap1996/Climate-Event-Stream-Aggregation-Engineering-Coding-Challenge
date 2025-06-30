import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

interface ErrorComponentProps {
  message: string;
  open: boolean;
  onClose: () => void;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({
  message,
  open,
  onClose,
}) => {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
      <Alert onClose={onClose} severity='error' sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default ErrorComponent;
