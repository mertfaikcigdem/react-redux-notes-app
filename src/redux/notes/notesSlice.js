import { createSlice, nanoid } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: [
      {
        id: nanoid(),
        note: "lightblue note",
        color: "lightblue",
      },
      {
        id: nanoid(),
        note: "lightgreen note",
        color: "lightgreen",
      },
      {
        id: nanoid(),
        note: "lightpink note",
        color: "lightpink",
      },
    ],
    filteredItems: [],
  },
  reducers: {
    addNote: {
      reducer: (state, action) => {
        state.items.push(action.payload);
        state.filteredItems.push(action.payload);
      },
      prepare: ({ note, color }) => {
        return {
          payload: {
            id: nanoid(),
            note,
            color,
          },
        };
      },
    },
    searchNote: {
      reducer: (state, action) => {
        const filtered = state.items.filter((item) => {
          if (action.payload.text === "") {
            return item;
          } else if (
            item.note.toLowerCase().includes(action.payload.text.toLowerCase())
          ) {
            return item;
          }
        });

        state.filteredItems = filtered;
      },
    },
  },
});

export const { addNote, searchNote } = notesSlice.actions;
export default notesSlice.reducer;
