import {Home} from "./pages/home/Home";
import { Header } from "./components/header/Header";
import { useState } from "react";
import { Share } from "@mui/icons-material";
// import { Register } from "./pages/register/Register";
import { Route, Routes } from "react-router-dom";
import { Profile } from "./pages/profile/Profile";
import { Messenger } from "./pages/messenger/Messenger";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="App">
      <Share open={open} handleClose={handleClose} />
      <Header handleOpen={handleOpen} />
      <Routes>
        <Route path="/message" element={<Messenger/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
       


      </Routes> 

      {/* <Home /> */}
      {/* <Profile /> */}
      {/* <Messenger /> */}
      {/* <Login /> */}
      {/* <Register/> */}

    

    
    </div>
  );
}

export default App;
