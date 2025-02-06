import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  name: string | null;
  username: string | null;
  kundennummer: string | null;
  geburtstag: string | null;
  risikoklasse: string | null;
  steuerstatus: string | null;
  steuernummer: string | null;
  berufsgruppe: string | null;
  branche: string | null;
  beruf: string | null;
  stammadresse: string | null;
  telefon: string | null;
  mobilfunk: string | null;
  email: string | null;
  geschaeftskontakt: string | null;
  isAuthenticated: boolean;

}

const initialState: UserState = {
  name: null,
  username: null,
  kundennummer: null,
  geburtstag: null,
  risikoklasse: null,
  steuerstatus: null,
  steuernummer: null,
  berufsgruppe: null,
  branche: null,
  beruf: null,
  stammadresse: null,
  telefon: null,
  mobilfunk: null,
  email: null,
  geschaeftskontakt: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (
      state,
      action: PayloadAction<{
        name: string;
        username: string;
        email: string;
        isAuthenticated: boolean;
        kundennummer: string;
        geburtstag: string;
        risikoklasse: string;
        steuerstatus: string;
        steuernummer: string;
        berufsgruppe: string;
        branche: string;
        beruf: string;
        stammadresse: string;
        telefon: string;
        mobilfunk: string;
        geschaeftskontakt: string;
      }>
    ) => {
      const {
        name,
        username,
        email,
        isAuthenticated,
        kundennummer,
        geburtstag,
        risikoklasse,
        steuerstatus,
        steuernummer,
        berufsgruppe,
        branche,
        beruf,
        stammadresse,
        telefon,
        mobilfunk,
        geschaeftskontakt,
      } = action.payload;

      state.name = name;
      state.username = username;
      state.email = email;
      state.isAuthenticated = isAuthenticated;
      state.kundennummer = kundennummer;
      state.geburtstag = geburtstag;
      state.risikoklasse = risikoklasse;
      state.steuerstatus = steuerstatus;
      state.steuernummer = steuernummer;
      state.berufsgruppe = berufsgruppe;
      state.branche = branche;
      state.beruf = beruf;
      state.stammadresse = stammadresse;
      state.telefon = telefon;
      state.mobilfunk = mobilfunk;
      state.geschaeftskontakt = geschaeftskontakt;
    },
    clearUserData: (state) => {
      state.name = null;
      state.username = null;
      state.email = null;
      state.isAuthenticated = false;
      state.kundennummer = null;
      state.geburtstag = null;
      state.risikoklasse = null;
      state.steuerstatus = null;
      state.steuernummer = null;
      state.berufsgruppe = null;
      state.branche = null;
      state.beruf = null;
      state.stammadresse = null;
      state.telefon = null;
      state.mobilfunk = null;
      state.geschaeftskontakt = null;
    },
  },
});

export const { setUserData, clearUserData } = userSlice.actions;
export default userSlice.reducer;
