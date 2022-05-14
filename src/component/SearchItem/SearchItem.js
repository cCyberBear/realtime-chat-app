import { Avatar, ListItemText, MenuItem, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./SearchItem.scss";
import noAvatar from "../../assets/img/noAvatar.png";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { useSelector } from "react-redux";
const SearchItem = ({ value }) => {
  const [added, setAdded] = useState(false);
  const currentUser = useSelector((state) => state.userReducer.currentUser);
  const conserv = [currentUser._id, value._id];
  const conservations = useSelector((state) => state.chatReducer.conservations);
  const members = conservations.map((val) => val.members);
  const check = members.map((mem) => {
    const idAvailable = mem.map((val) => val._id);
    return JSON.stringify(idAvailable) === JSON.stringify(conserv);
  });
  useEffect(() => {
    if (check.includes(true)) {
      setAdded(true);
    }
  }, []);

  return (
    <MenuItem className="SearchItem">
      <div className="left">
        <Avatar
          className="avatar"
          src={value.profilePicture ? value.profilePicture : noAvatar}
        />
        <ListItemText>{value.username}</ListItemText>
      </div>
      <div className="right">
        <Typography>{added ? <PeopleAltIcon /> : <PersonAddIcon />}</Typography>
      </div>
    </MenuItem>
  );
};

export default SearchItem;
