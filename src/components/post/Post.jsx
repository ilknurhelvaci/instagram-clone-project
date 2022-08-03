import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./post.css";

export const Post = ({ top, bottom }) => {
  return (
    <div className="post-wrapper">
        {top && (
        <div className="post-header">
          <div className="post-header-left">
            <a href="/">
              <Avatar src="/images/person/6.jpg"
              sx={{widht:32, height:32}}/>
            </a>
            <a href="/" className="profile-username">
              ilknur.h
            </a>
          
          </div>
          <div className="post-header-right">
            <button>
              <MoreHorizIcon/>
            </button>
          </div>
        </div>
        )}
        <div className="post-image">
          <img src="/images/post/2.png" alt="Post Img" style={{widht:500, height:500}}/>

        </div>
        {bottom && (
        <div className="post-bottom">
          <div className="post-like"> 
          <button>
            <FavoriteIcon className="post-like-icon-active"/>
            </button>
            </div>
          <span className="post-like-count">0 like </span>
          <div className="post-content">
               <a href="/" className="profile-username">
                ilknur.h</a>           
             </div>
             <span className="post-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime iure accusantium modi amet cupiditate voluptatibus! Tempora est nobis obcaecati placeat?</span>
          <div className="post-time"> 1 dakika önce</div>
        </div>
        )}

    </div>
  );
};


