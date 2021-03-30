import axios from 'axios';
import { v4 as uuidv4 } from "uuid";

import {
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError,
} from './phonebook-actions';

axios.defaults.baseURL = 'http://localhost:4221';

export const addContact = ({name, number}) => dispatch => {
    const contact = {
        id: uuidv4(),
        name,
        number
    };

    dispatch(addContactRequest());

    axios.post('/contacts', contact)
        .then(({ data }) => dispatch(addContactSuccess(data)))
        .catch(error => dispatch(addContactError(error)))
};

export const deleteContact = id => dispatch => {
    dispatch(deleteContactRequest());

    axios.delete(`/contacts/${id}`)
        .then(() => dispatch(deleteContactSuccess(id)))
        .catch(error => dispatch(deleteContactError(error)))
};

export const fetchContacts = () => dispatch => {
    dispatch(fetchContactRequest());

    axios.get('/contacts')
        .then(({ data }) => dispatch(fetchContactSuccess(data)))
        .catch(error => dispatch(fetchContactError(error)))
};