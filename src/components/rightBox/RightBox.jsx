import { Avatar } from "@mui/material";
import { Button } from "@mui/material";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import "./rightBox.css";

export const RightBox = () => {
  return (
    <div className="right-box">
      <div className="account">
        <a href="/">
          <Avatar src={"/images/person/6.jpg"} sx={{ width: 56, height: 56 }} />
        </a>
        <div className="account-titles">
          <a href="/">ilknur.h</a>
          <span>İlknur Helvacı</span>
        </div>
      </div>
      <span className="friends-title">My Friends</span>
      <ul className="friends-list">
        <li className="friend-item">
          <div className="friend-item-left">
            <a href="/">
              <Avatar
                src={"/images/person/5.jpg"}
                sx={{ width: 50, height: 50 }}
              />
            </a>
            <div className="friend-username">
              <a href="/">yunusinan</a>
              <span>Yunus İnan</span>
            </div>
          </div>
          <div className="friend-item-right">
            <Button
              variant="contained"
              endIcon={<ArrowCircleRightOutlinedIcon />}
              size="small"
            >
              Profile Git
            </Button>
          </div>
        </li>
      </ul>
    </div>
  );
};