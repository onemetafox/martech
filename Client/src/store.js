import { configureStore } from '@reduxjs/toolkit';
import EventReducer from './actions/eventAction';

export default configureStore({
  reducer: {
    eventsData: EventReducer,
  },
});