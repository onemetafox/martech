import { configureStore } from '@reduxjs/toolkit';
import EventReducer from './actions/eventAction';
import ContactReducer from './actions/contactAction';
import CallRuducer from './actions/callAction';

export default configureStore({
    reducer: {
        eventsData: EventReducer,
        contactsData:ContactReducer,
        callsData: CallRuducer
    },
});