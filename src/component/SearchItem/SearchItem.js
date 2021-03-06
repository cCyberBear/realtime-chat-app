import { ListItemText, MenuItem, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./SearchItem.scss";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../action/userActions";
import AvatarByName from "../AvatarByName/AvatarByName";
const SearchItem = ({ value }) => {
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);
  const currentUser = useSelector((state) => state.userReducer.currentUser);
  const conserv = [currentUser._id, value._id];
  const conservations = useSelector((state) => state.chatReducer.conservations);
  const members = conservations.map((val) => val.members);
  const check = members.map((mem) => {
    const idAvailable = mem.map((val) => val._id);
    return (
      JSON.stringify(idAvailable.sort()) === JSON.stringify(conserv.sort())
    );
  });
  useEffect(() => {
    if (check.includes(true)) {
      setAdded(true);
    }
  }, [check]);
  const handleAdd = () => {
    dispatch(addContact(conserv));
    setAdded(true);
  };
  return (
    <MenuItem className="SearchItem">
      <div className="left">
        <AvatarByName
          style={{ margin: "10px 20px 10px 0px" }}
          name={value.username}
        />
        <ListItemText>{value.username}</ListItemText>
      </div>
      <div className="right">
        <Typography>
          {added ? <PeopleAltIcon /> : <PersonAddIcon onClick={handleAdd} />}
        </Typography>
      </div>
    </MenuItem>
  );
};

export default SearchItem;
