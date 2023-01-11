import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  availableDevices: [],
};

export const bluetoothSlice = createSlice({
  name: 'bluetooth',
  initialState,
  reducers: {},
});

export default bluetoothSlice.reducer;
