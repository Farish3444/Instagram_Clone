import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ReAvatar({src,style}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt="Femy Sharp" 
      src={src} 

      style={style}    
      />
      {/* <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" /> */}
    </div>
  );
}
