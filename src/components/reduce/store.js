import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "./filtersSlice";
import { contactsReducer } from './contactsSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, contactsReducer)

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    filters: filtersReducer,
  },
});

 export const persistor = persistStore(store)

