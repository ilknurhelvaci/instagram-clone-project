import SearchIcon from "@mui/icons-material/Search";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { Avatar, Box } from "@mui/material";
import { Logo } from "../logo/Logo";

import "./header.css";
import { Link } from "react-router-dom";

export const Header = ({ handleOpen }) => {
  return (
    <div className="header-wrapper">
      <div className="container">
        <div className="header">
          <Logo />
          <Box sx={{ position: "relative" }}>
            <div className="search">
              <SearchIcon className="search-icon" />
              <input type="text" placeholder="Search" />
            </div>
          </Box>
          <div className="header-links">
            <a href="/">
              <HomeOutlinedIcon className="icon" />
            </a>
            <a href="/">
              <Link to={"/message"}>
              <ChatOutlinedIcon className="icon" />
              </Link>

              
            </a>
            <AddBoxOutlinedIcon
              className="icon"
              style={{ cursor: "pointer" }}
              onClick={handleOpen}
            />
            <Link to={"/profile"}>
            <a href={"/"}>
              <Avatar
                alt="Remy Sharp"
                src={"/images/person/6.jpg"}
                sx={{ width: 28, height: 28 }}
              />
            </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};