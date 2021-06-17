import React, {useState,useEffect} from 'react';
import { FormControl,Input, } from '@material-ui/core';
import Message from './Message';
import './App.css';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  //useState is like a variable in REACT.
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{username:'Faith', message:'hey there'},{username:'Moody', message:'hey'}]);
  const [username, setUsername] = useState('');

  //useEffect is block of code tha gets executed on a condition.
  useEffect(()=> {
    //runs when the app components load.
    db.collection('chat')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc =>({id:doc.id , message:doc.data()})))
    })
  },[])

useEffect(()=> {
  //run code here
  setUsername(prompt('Please Enter your name..'))
},[]) //condition here

  const sendMessage =(event) => { 
  event.preventDefault();  
  db.collection('chat').add ({
    message:input,
    username:username,
    timestamp:firebase.firestore.FieldValue.serverTimestamp(),
  })
//all the logic to send message goes here..
setMessages([...messages,{username:username, message:input}]);
setInput('');
  }

  return (
    <div className="App">
      <h1>Hello there!😉@FAM</h1>
<img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" />
      <h2>Welcome {username}</h2>
      <form className="app__form">
      <FormControl className="app__formcontrol">

  <Input className="app__input" placeholder="Enter a message..." value={input} onChange={event => setInput(event.target.value)} />
  <IconButton className="app_iconButton " disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>Send Message <SendIcon /></IconButton>
</FormControl>
      </form>
      <FlipMove>
      {
        messages.map(({id,message}) => (
          <Message key={id} username={username} message={message} />
      
        ))
      }
      </FlipMove>
     
    </div>
  );
}
export default App;
