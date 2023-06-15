import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

export default function Settings() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:8000/images/"

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const posts = await axios.get("/posts/?user=" + user.username);
      //get posts id's
      const postIds = posts.data.map((post) => post._id);
    //update each post with the new username
    postIds.forEach(async (postId) => {
      await axios.put("/posts/" + postId, {
        userId: user._id,
        username:
    username,
    });
    });      

  const res = await axios.put("/users/" + user._id, updatedUser);
      
     

      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  }

  const handleDelete = async () => {
    try {
      await axios.delete(`/users/${user._id}`, {
        data: { userId: user._id },
      });
      handleLogout();
      window.location.replace("/");
    } catch (err) {}
  };

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle" onClick={handleDelete}>Delete Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={file ? URL.createObjectURL(file) : PF+user.profilePic}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => {
              if(e.target.value === "") {
                setUsername(user.username);
              }
              else {
              setUsername(e.target.value);}}}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => {
              //if input is empty, set email to the user's email
              if (e.target.value === "") {
                setEmail(user.email);
              } 
              //otherwise, set email to the input value
              else {
                setEmail(e.target.value);
              }
            }}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => {
              if(e.target.value === "") {
                setPassword(user.password);
              }
              else {
                setPassword(e.target.value);}
            }}
          />
          <button className="settingsSubmit" type="submit">
            Update
          </button>
          {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile has been updated...
            </span>
          )}
        </form>
      </div>
      <Sidebar />
    </div>
  );
}