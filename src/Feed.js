import React, { useEffect, useState } from 'react';
import './Feed.css';
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption";
import ImageIcon from "@material-ui/icons/Image";
import SuscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from "./Post";
import { db } from "./firebase";
import firebase from 'firebase';

function Feed() {
   const [input, setInput] = useState('');
   const [posts, setPosts] = useState([]);

   useEffect(() => {
      db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => 
         setPosts(
            snapshot.docs.map((doc) =>({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
   }, []);

   const sendPost = (e) => {
      e.preventDefault();

      db.collection('posts').add({
         name: 'Johan Rodriguez',
         description: 'Esto es un mensaje',
         message: input,
         photoUrl:'',
         timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });

      setInput("");
   };

    return (
        <div className="feed">
            <div className="feed_inputContainer">
               <div className="feed_input">
                  <CreateIcon />
                  <form>
                     <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                     <button onClick={sendPost} type="submit">Enviar</button>
                  </form>
               </div>
               <div className="feed_inputOptions">
                  <InputOption Icon={ImageIcon} title="Foto" color="#70B5F9"/>
                  <InputOption Icon={SuscriptionsIcon} title="Video" color="#E7A33E"/>
                  <InputOption Icon={EventNoteIcon} title="Eventos" color="black"/>
                  <InputOption Icon={CalendarViewDayIcon} title="Articulos" color="green"/>
               </div>
            </div>
            {posts.map(({ id, data:{name, description,message,photoUrl} }) => {
               <Post 
                 key={id}
                 name={name}
                 description={description}
                 message={message}
                 photoUrl={photoUrl}
               />
            })}

            <Post name='Johan Rodriguez' 
            description='Esto es una prueba' 
            message='Estamos trabajando duro.'/>  
            
            <Post name='Daniel Toro' 
            description='Desarrollador' 
            message='El desarrollo me encanta.'/>  

          <Post name='Amalia Rueda' 
            description='Una Consultura' 
            message='La Consultoria es lo mejor que hay en la vida.'/> 
         
          <Post name='Estefania Morales' 
            description='La vida con estilo' 
            message='Aca disfrutando de la vida'/> 

         <Post name='Sandra Mora' 
            description='Hola Bienvenidos' 
            message='Esta cancion si que es buena.'/> 


        </div>
    )
}

export default Feed;
