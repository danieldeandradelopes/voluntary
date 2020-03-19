import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import HomeIcon from '@material-ui/icons/Home';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));


export default function Album() {
    const classes = useStyles();

    return (

        <AppBar position="relative" >
            <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex' }}>
                    <HomeIcon className={classes.icon} />
                    <Link style={{ textDecoration: 'none', color: '#fff' }} to="/">
                        <Typography variant="h6" color="inherit" noWrap>
                            Voluntary
                        </Typography>
                    </Link>
                </div>
                <div>
                    <Link to="/signIn" style={{ marginLeft: 10, marginRight: 10, textDecoration: 'none' }}>
                        <Button variant="contained" size="small" color="secondary">
                            Login
                        </Button>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="/signUp">
                        <Button variant="contained" size="small" color="secondary">
                            Register
                        </Button>
                    </Link>
                </div>
            </Toolbar>
        </AppBar>


    );
}