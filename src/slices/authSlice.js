import { createSlice } from '@reduxjs/toolkit';
import { getCountryByCca2 } from 'react-native-international-phone-number';

const initialState = {
  country: getCountryByCca2('NG'),
  phoneNumber: '',
  fullNumber: '',
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCountry: (state, action) => {
      state.country = action.payload;
    },
    setPhonenumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    setFullnumber: (state, action) => {
      state.fullNumber = action.payload;
    },
    loginUser: (state) => {
      state.isLoggedIn = true;
    },
  },
});

export const { setCountry, setPhonenumber, setFullnumber, loginUser } =
  authSlice.actions;
export default authSlice.reducer;

//selectors
export const getCountry = (state) => state.auth.country;
export const getPhonenumber = (state) => state.auth.phoneNumber;
export const getFullnumber = (state) => state.auth.fullNumber;
export const getLoggedInStatus = (state) => state.auth.isLoggedIn;
