import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';

import phonebookReducer from './phonebook-reducers';

// const myMiddleware = store => next => action => {
// 	console.log('ПРОСЛОЙКА, йопта!', action);

// 	next(action);
// }

const middleware = [
	...getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		},
	}),
	// myMiddleware,
	logger,
];

export const store = configureStore({
    reducer: {
        contacts: phonebookReducer,
    },
    middleware,
	// devTools: process.env.NODE_ENV === 'development',
});