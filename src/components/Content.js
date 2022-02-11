import React, { useState, useEffect } from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../redux/notes/notesSlice";
import Notes from "./Notes";

function Content() {
  const [note, setNote] = useState("");
  const [color, setColor] = useState("");
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addNote({ note, color }));
    setNote("");
    setColor("");
  };
  const items = useSelector((state) => state.notes.items);
  const filteredItems = useSelector((state) => state.notes.filteredItems);
  const [filteredLightblue, setFilteredLightblue] = useState(
    items.filter((item) => item.color === "lightblue")
  );
  const [filteredLightgreen, setFilteredLightgreen] = useState(
    items.filter((item) => item.color === "lightgreen")
  );
  const [filteredLightpink, setFilteredLightpink] = useState(
    items.filter((item) => item.color === "lightpink")
  );

  useEffect(() => {
    if (filteredItems) {
      setFilteredLightblue(
        filteredItems.filter((item) => item.color === "lightblue")
      );
      setFilteredLightgreen(
        filteredItems.filter((item) => item.color === "lightgreen")
      );
      setFilteredLightpink(
        filteredItems.filter((item) => item.color === "lightpink")
      );
    } else {
      setFilteredLightblue(items.filter((item) => item.color === "lightblue"));
      setFilteredLightgreen(
        items.filter((item) => item.color === "lightgreen")
      );
      setFilteredLightpink(items.filter((item) => item.color === "lightpink"));
    }
  }, [filteredItems]);

  return (
    <div className="content">
      <textarea
        rows={10}
        cols={70}
        placeholder="Enter your note here..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <div className="content-footer">
        <div className="color-divs">
          <div className="div-lightblue" onClick={() => setColor("lightblue")}>
            {color == "lightblue" ? "✓" : ""}
          </div>
          <div
            className="div-lightgreen"
            onClick={() => setColor("lightgreen")}
          >
            {color == "lightgreen" ? "✓" : ""}
          </div>
          <div className="div-lightpink" onClick={() => setColor("lightpink")}>
            {color == "lightpink" ? "✓" : ""}
          </div>
        </div>
        <button onClick={handleClick}> Add </button>
      </div>
      <Notes
        filteredLightblue={filteredLightblue}
        filteredLightgreen={filteredLightgreen}
        filteredLightpink={filteredLightpink}
      />
    </div>
  );
}

export default Content;
