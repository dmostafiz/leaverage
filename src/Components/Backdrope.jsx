import React, { useEffect } from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default function Backdrope() {
  
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  
  const defaultBackdrop = useSelector(state => state.backdrop);
  // console.log(defaultBackdrop);
  console.log("backdrop triggered", defaultBackdrop);
  
  useEffect(() => {

    // setOpen(defaultBackdrop);

  }, []);

  const handleClose = () => {
    
    setOpen(false);
  };

  const handleToggle = () => {
    // console.log("backdrop triggered". defaultBackdrop);
    setOpen(!open);
  };

  return (
    <div>
      <p>{defaultBackdrop}</p>
      {/* <Button variant="outlined" color="primary" onClick={handleToggle}>
        Show backdrop
      </Button> */}

      {/* <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <CircularProgress color="inherit" />
      </Backdrop> */}
    </div>
  );
}
