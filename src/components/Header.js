import React, { useEffect } from "react";
import "../App.css";
import { useDispatch } from "react-redux";
import { searchNote } from "../redux/notes/notesSlice";

function Header() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchNote({ text: "" }));
  }, []);
  const searchTerm = (event) => {
    const searchText = event.target.value;
    dispatch(searchNote({ text: searchText }));
  };

  return (
    <div className="header">
      <span>Notes App</span>
      <input placeholder="Search..." onChange={searchTerm} />
    </div>
  );
}

export default Header;
