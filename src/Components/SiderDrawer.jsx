import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Link from 'next/link';
import Logo from './Logo';


const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  });

export default function SiderDrawer({ancore, classess}) {
    const classes = useStyles();
    const [state, setState] = React.useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });
  
    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };
  
    const list = (anchor) => (
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role="presentation"
        // onClick={toggleDrawer(anchor, false)}
        // onKeyDown={toggleDrawer(anchor, false)}
      >
        <div>
            <Logo width="200" type="dark" classes="py-6 px-3" />
        </div>
          
        <List>

            <Link href="/" >
                <ListItem button >
                    <ListItemText>Home</ListItemText>
                </ListItem>
            </Link>

            <Link href="/concepts" >
                <ListItem button >
                    <ListItemText>Concepts</ListItemText>
                </ListItem>
            </Link>

            <Link href="/projects" >
                <ListItem button >
                    <ListItemText>Projects</ListItemText>
                </ListItem>
            </Link>

            <Link href="/reviews" >
                <ListItem button >
                    <ListItemText>Reviews</ListItemText>
                </ListItem>
            </Link>


            <Link href="/articles" >
                <ListItem button >
                    <ListItemText>Articles</ListItemText>
                </ListItem>
            </Link>

  
        </List>



        {/* <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </div>
    );
  
    return (
      
          <React.Fragment>
            {/* <Button onClick={toggleDrawer(ancore, true)}>
            <i className="icon-menu m-0"></i>
            </Button> */}
            <a href="#" id="menubarg" className={`nav-link ${classess}`} onClick={toggleDrawer(ancore, true)}>
                <i className="icon-menu m-0"></i>
            </a>

            <Drawer anchor={ancore} open={state[ancore]} onClose={toggleDrawer(ancore, false)}>
              {list(ancore)}
            </Drawer>
          </React.Fragment>
      
    );
}
