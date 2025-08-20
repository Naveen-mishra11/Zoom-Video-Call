import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home'; 

export default function History() {
  const { getHistoryOfUser } = useContext(AuthContext);

  const [meetings, setMeetings] = useState([]);

  const routeTo = useNavigate();

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const history = await getHistoryOfUser();
        setMeetings(history);
      } catch {}
    };
    fetchHistory();
  }, []);

  let formatDate =(dateString)=>{

    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2,"0");
    const month = (date.getMonth()+1).toString().padStart(2,'0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`
  }

let  formatTime = (dateString)=>{ // Creates a Date object for the current date and time

const date = new Date(dateString);    
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

 return `${hours}:${minutes}:${seconds}`;
}

  return (
    <div>
        <IconButton onClick={() => {
                routeTo("/home")
            }}>
                <HomeIcon fontSize="large"/>
            </IconButton>
      {(meetings.length !== 0)? meetings.map((e,i) => {
        return (
          <>
            
            <Card key={i} variant="outlined">
              <CardContent>
                <Typography
                  sx={{ color: "text.secondary", mb: 1.5 }}
                >
                  <b>Meeting Code:</b> {e.meetingCode} 
                </Typography>
                <Typography gutterBottom
                  sx={{ color: "text.secondary", fontSize: 14 }}>
                  <b>Time:</b> {formatTime(e.date)}
                </Typography>
                <Typography gutterBottom
                  sx={{ color: "text.secondary", fontSize: 14 }}>
                  <b>Date:</b> {formatDate(e.date)}
                </Typography>
              </CardContent>
            </Card>
          </>
        );
      }):<> <p>No History Yet!</p> </>}
    </div>
  );
}
