import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MuiAlert from '@material-ui/lab/Alert';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

const Todo=()=>{
    let [value,setValue]=useState()
    let [isDo,setIsDo]=useState(0)
    let [list,setList]=useState([])
    
    const AddToList=(e)=>{
        if(e==='') return
        setList([...list,{id:Math.random(),item:value,isDone:false}])
        setValue('')
    }
    const inputHandler=(e)=>{
        setValue(e.target.value)
    }
    const deleteHandler=(e)=>{
        console.log(e)
        setList(list.filter(key=>key.id !== e))
    }

    const doneHandler=(e)=>{
        e.isDone=true 
        setIsDo(isDo+1)
    }

    const Alert=(props)=> {
        return <MuiAlert elevation={6} variant="filled" {...props} />
    }
    const useStyles = makeStyles(theme => ({
        '@global': {
          body: {
            backgroundColor: theme.palette.background.paper,
          },
        },
        root: {
            '& > *': {
              margin: theme.spacing(4),
              width: 200,
            },
        },
        menuButton: {
          marginRight: theme.spacing(2),
        },
      }));
    return(
        <div>
            <AppBar position="static" color="primary">
            <Toolbar>
                <Typography variant="h6" color="inherit">
                ToDo App
                </Typography>
            </Toolbar>
            </AppBar>
            <div style={{display:"flex"}}>
            <TextField style={{width:"100%",marginTop:20,marginLeft:20,marginRight:20}} onChange={e=>inputHandler(e)} value={value} id="standard-basic" label="Your ToDo (Tap on finished task)" />
            <Button style={{marginTop:20,marginRight:10}} onClick={()=>AddToList(value)} variant="contained" color="primary" href="#contained-buttons">
                ADD
            </Button>
            </div>
            {
            list.map((x,key)=>
            <div key={key} style={{display:"flex"}}>
                <Alert onClick={()=>doneHandler(x)} severity={!x.isDone?"warning":"success"} style={{width:"100%",marginTop:20,marginLeft:20,marginRight:20}}>{x.item}
                <DeleteIcon style={{position:"absolute",right:40}} onClick={()=>deleteHandler(x.id)}/></Alert>
            </div>)}
          </div>
    )
}

export default Todo;