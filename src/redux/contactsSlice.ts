import { createSlice } from "@reduxjs/toolkit";

interface Contact {
  firstname: string;
  lastname: string;
  status: "active" | "inactive";
  id: string;
  // image: File;
}

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: [] as Contact[],
  },
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    removeContact: (state, action) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload.id
      );
    },
    editContact: (state, action) => {
      const { id, firstname, lastname, status } = action.payload;
      state.contacts = state.contacts.map((contact) =>
        contact.id === id
          ? { ...contact, firstname, lastname, status }
          : contact
      );
    },
  },
});

export const { addContact, removeContact, editContact } = contactsSlice.actions;
export default contactsSlice.reducer;
