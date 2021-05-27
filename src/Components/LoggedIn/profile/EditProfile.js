import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import BusinessIcon from '@material-ui/icons/Business';
import SchoolRoundedIcon from '@material-ui/icons/SchoolRounded';
import defaultPic from './default.png';
import { Typography } from "@material-ui/core";


const user = {
    short_profile: {
        first_name: 'Saurabh',
        last_name: 'Hirugade',
        post:'Student',
        organization:'Walchand College of Engineering, Sangli',
    },
    professional_info: [
        {
            post: 'Program Director',
            company: 'WCE ACM Student Chapter',
            from:'April 2019',
            to: 'Present'
        },
    ],
    educational_info:[
        {
            school:'Walchand College of Engineering, Sangli',
            course:'B.Tech in Computer Science and Engineering',
            score:'8.37',
            outof:'10',
        },
        {
            
            school:'Swami Vivekanand College, Kolhapur',
            course:'HSC (Science)',
            score:'89.85',
            outof:'100'
        },

    ],
    personal_info: {
        about_me: "Hello, I'm Pre-Final Year Computer Science And Enigneering Student. I love development and problem solving.",
        birthdate:'11/09/2000',
    },
    contact_info: {
        mobile_no: '7769983805',
        email: 'saurabhhirugade@gmail.com',
    },
    profiles: {
        linkedin: 'https://www.linkedin.com/in/saurabh-hirugade/',
        github: 'https://github.com/cognitive-ninja',
        twitter: 'https://twitter.com/DarkEnergy__',
        youtube: '',
        instagram: '',
        facebook: '',
    }
}
const useStyles = makeStyles((theme) => ({
   root: {
        padding:"2% 20% 10% 20%",
    },
    content: {
        justifyContent: "center"
    },
    accordionItem: {
        backgroundColor:"papayawhip",
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: "600",
        fontFamily: "Montserrat",
        textAlign: "center"
    },
    subheading: {
        textAlign:"left",
        fontFamily:"Montserrat", fontSize:"medium",
        fontWeight:"500",
        margin:"0px",
    },
    basic_profile: {
        padding: '30px',
        
        // backgroundColor:'lightgrey',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    propic: {
        minWidth:'150px',
        minHeight:'150px'
    },
    basic_info: {
        textAlign:"left",
        marginLeft:"25px",
    },
    details: {
        fontFamily:"Montserrat",
        textAlign:"left",
        fontWeight: "300"
    }
  }));

export default function ProfilePage() {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(true);

    const toggleExpanded = () => {
      setExpanded(!expanded);
    };
  
    return (
        <>
        <div style={{display: 'flex', flexDirection:"column", alignItems: 'center'}}>
            <div className={classes.basic_profile}>
                <div className="profile-photo">
                    <Avatar alt="Profile Photo" className={classes.propic} src={defaultPic} />
                </div>
                <div className={classes.basic_info}>
                    <div style={{display:"flex", justifyContent:"space-between", alignItems: 'center', minWidth: '700px'}}>
                        <p style={{fontFamily:"Montserrat", fontSize:"40px", margin: "0px" }}>{user.short_profile.first_name} {user.short_profile.last_name}</p>
                    </div>
                    <div style={{fontFamily:"Montserrat",fontStyle:"italic", fontWeight:"300"}}>
                        <p style={{ fontSize:"large",   margin:"10px 0px 0px 0px" }}>{user.short_profile.post}</p>
                        <p style={{fontSize:"x-large",  margin:"0px" }}>{user.short_profile.organization}</p>
                    </div>
                </div>
            </div>
        </div>

    <div className={classes.root}>
      <Accordion className={classes.accordionItem} expanded={expanded} onChange={toggleExpanded}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1d-content"
          id="panel1d-header"
        //   classes={{ content: classes.content }}
        >
          <Typography className={classes.heading}>PROFESSIONAL INFORMATION</Typography>
        </AccordionSummary>

        <AccordionDetails className={classes.details}>
            <div style={{display:"flex", alignItems:"flex-start", padding:"2px 10px"}}>
                <BusinessIcon />
                <div style={{padding:"0px 10px"}}>
                    <div style={{fontWeight: "700"}}>
                        {user.professional_info[0].post}
                    </div>  
                    {/* <br/> */}
                    <div style={{fontWeight: "500"}}>
                        {user.professional_info[0].company}
                    </div>
                    {/* <br/>   */}
                    <div style={{fontSize: "small"}}>
                        {user.professional_info[0].from}-{user.professional_info[0].to}
                    </div>  
                </div>
            </div>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accordionItem}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>EDUCATIONAL INFORMATION</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
            <div style={{display:"flex", alignItems:"flex-start", padding:"2px 10px"}}>
                <SchoolRoundedIcon />
                <div style={{padding:"0px 10px"}}>
                    <div style={{fontWeight: "700"}}>
                        {user.educational_info[0].school}
                    </div>  
                    {/* <br/> */}
                    <div style={{fontWeight: "500"}}>
                        {user.educational_info[0].course}
                    </div>
                    {/* <br/>   */}
                    <div style={{fontSize: "small"}}>
                        {user.educational_info[0].score}/{user.educational_info[0].outof}
                    </div>  
                </div>
            </div>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accordionItem}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>PERSONAL INFORMATION</Typography>
        </AccordionSummary>
        <AccordionDetails>
          
            <div style={{display: 'flex', flexDirection: 'column', padding:"2px"}}>
                <div style={{display:"flex", padding:"4px"}}><p className={classes.subheading}>About me:</p> <p style={{ margin:"0px", padding:"2px 10px 2px 10px",textAlign: 'left', fontFamily:"Montserrat", fontWeight:"300"}}>{user.personal_info.about_me}</p></div>
                <hr/>
                <div style={{display:"flex", padding:"4px"}}><p className={classes.subheading}>Birth-Date:</p> <p style={{margin:"0px", padding:"2px 10px 2px 10px",textAlign: 'left', fontFamily:"Montserrat", fontWeight:"300"}}>{user.personal_info.birthdate}</p></div>
            </div>

        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accordionItem}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>CONTACT INFORMATION</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <div style={{display: 'flex', flexDirection: 'column', padding:"2px"}}>
                <div style={{display:"flex", padding:"4px"}}><p className={classes.subheading}>Email:</p> <p style={{ margin:"0px", padding:"2px 10px 2px 10px",textAlign: 'left', fontFamily:"Montserrat", fontWeight:"300"}}>{user.contact_info.email}</p></div>
                <hr/>
                <div style={{display:"flex", padding:"4px"}}><p className={classes.subheading}>Mobile No:</p> <p style={{margin:"0px", padding:"2px 10px 2px 10px",textAlign: 'left', fontFamily:"Montserrat", fontWeight:"300"}}>{user.contact_info.mobile_no}</p></div>
            </div>
        </AccordionDetails>
      </Accordion>
      
    </div>

        </>
    )
}
