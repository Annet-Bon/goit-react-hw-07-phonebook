// import { createSelector } from '@reduxjs/toolkit';

export const getAllContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
export const getError = state => state.contacts.error;

// export const getFilteredContacts = createSelector(
//     [getAllContacts, getFilter],
//     (contacts, filter) => {
//         let normalizedFilter = filter.toLowerCase();
//         return contacts.filter(contact =>
//             contact.name.toLowerCase().includes(normalizedFilter),
//         )
// });

// export const getFilteredContacts = createSelector(
//     [getAllContacts, getFilter],
//     (contacts, filter) => contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
// );

export const getFilteredContacts = ({contacts, filter}) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter),
    );
};