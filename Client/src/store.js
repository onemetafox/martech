import { configureStore } from '@reduxjs/toolkit';
import EventReducer from './actions/eventAction';
import ContactReducer from './actions/contactAction';
import CallReducer from './actions/callAction';
import FaqReducer from './actions/faqAction';

export default configureStore({
    reducer: {
        eventsData: EventReducer,
        contactsData:ContactReducer,
        callsData: CallReducer,
        faqsData: FaqReducer
    },
});