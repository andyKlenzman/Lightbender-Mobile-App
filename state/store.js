import {configureStore} from '@reduxjs/toolkit';
import bluetoothSlice from './bluetoothSlice';

export const store = configureStore({
  reducer: {
    bluetooth: bluetoothSlice,
  },
});
