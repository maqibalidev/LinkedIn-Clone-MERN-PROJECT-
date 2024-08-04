import React, { useEffect, useState } from 'react';
import './Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionIcon from '@mui/icons-material/Subscriptions';
import VideoIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { db } from './firebase'; // Make sure to have Firebase configuration in './firebase' file.
import { collection, addDoc, getDocs, orderBy } from "firebase/firestore";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState('');


  
  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "posts"), orderBy("createdAt", "desc"));

      // Handle the retrieved data as needed
      const fetchedPosts = [];
      querySnapshot.forEach((doc) => {
        fetchedPosts.push({ id: doc.id, data: doc.data() });
      });

      setPosts(fetchedPosts);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData(); // Call the async function






  const sendPost = async (e) => {
    e.preventDefault();

    try {
      // Add a new post to the "posts" collection
      const docRef = await addDoc(collection(db, "posts"), {
        name: "Ada",
        description: "Lovelace",
        message: input,
        photoUrl: "",
        timestamp: Date.now(),
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
      // Handle the error here, e.g., show an error message to the user
    }

    setInput('');
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              type="text"
              value={input}
              placeholder='Write in your Feed!'
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#7085f9" />
          <InputOption Icon={SubscriptionIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={VideoIcon} title="Event" color="#C0CABD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write Article"
            color="#7FC1CE"
          />
        </div>
      </div>

      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  );
}

export default Feed;