// import { makeStyles } from "@mui/material";
import { makeStyles } from '@mui/styles';
// import { makeStyles } from '@material-ui/core/styles';

export default makeStyles (()=> ({
    root: {
        display: 'flex',
        height: '100%',
    },
    toolbar:{
        height:'70px',
    },
    content: {
        flexGrow: '1',
        padding: '2em',
    },

}));