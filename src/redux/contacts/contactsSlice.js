import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from './operations';
import { logOut } from '../auth/operations';
import {
  fetchContactsFulfilledReducer,
  addContactPendingReducer,
  addContactFulfilledReducer,
  deleteContactFulfilledReducer,
  editContactFulfilledReducer,
  anyPendingReducer,
  anyFullfilledReducer,
  anyRejectedReducer,
} from './contactsSliceReducers';

const extraActions = [fetchContacts, addContact, deleteContact, editContact];

const getActions = type => isAnyOf(...extraActions.map(action => action[type]));

const contactsInitialState = {
  items: [],
  isLoading: false,
  isContactAdded: true,
  error: null,
  editContact: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder =>
    builder
      .addCase(addContact.pending, addContactPendingReducer)
      .addCase(fetchContacts.fulfilled, fetchContactsFulfilledReducer)
      .addCase(addContact.fulfilled, addContactFulfilledReducer)
      .addCase(deleteContact.fulfilled, deleteContactFulfilledReducer)
      .addCase(editContact.fulfilled, editContactFulfilledReducer)
      .addCase(logOut.fulfilled, state => {
        state.items = [];
      })
      .addMatcher(getActions('pending'), anyPendingReducer)
      .addMatcher(getActions('fulfilled'), anyFullfilledReducer)
      .addMatcher(getActions('rejected'), anyRejectedReducer),
});

export const contactsReducer = contactsSlice.reducer;
