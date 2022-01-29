import { configureStore } from '@reduxjs/toolkit';
import EventReducer from './actions/eventAction';
import ContactReducer from './actions/contactAction';

export default configureStore({
    reducer: {
        eventsData: EventReducer,
        contactsData:ContactReducer
    },
});