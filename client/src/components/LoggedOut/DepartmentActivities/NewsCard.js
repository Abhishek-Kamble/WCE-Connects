import {  makeStyles } from '@material-ui/core';
import React,{useState,useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
  cardroot: {
   border:"1px solid lightgrey"
  },
}));
export const NewsCard = ({deptData}) => {
    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(false)
    return (
    <Card className={classes.cardroot}>
        <CardActionArea>
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {deptData.title}
            </Typography>
            {
                isOpen?(
                    <>
                        <Typography variant="body2" color="textSecondary" component="p" style={{whiteSpace:'pre-line'}}>
                            {deptData.description}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" style={{textAlign:'left'}} >
                           
                                
                               
                                <strong>
                                    Date:{deptData.dates}
                                <br/>
                                    Contact :  {deptData.contactPerson}
                                <br/>
                                Mobile No:  {deptData.contactNumber}
                                <br/>
                                     Email:  {deptData.contactEmail} 
                                </strong>
                           
                            
                        </Typography>
                    </>
                ):(
                    <>
                        <Typography variant="body2" color="textSecondary" component="p" style={{whiteSpace:'pre-line'}}>
                            {deptData.description}
                        </Typography>
                    </>
                )
            }
            
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary" onClick={()=>setIsOpen(!isOpen)}>
            {
                isOpen?(
                    <>
                   
                    {"show less"}
                    </>
                ):(
                    <>
                     {"Learn More"}
                    </>
                )
            }
            </Button>
        </CardActions>
    </Card>
  )
}
