import { createContext } from "react";

export interface IState {
  name: string;
  email_address: string;
  password: string;
  displayName: string;
  token: string;
}

export const initialState = {
  name: "",
  email_address: "",
  password: "",
  displayName: "",
  token: "",
};

export enum APP_ACTIONS {
  UPDATE_NAME = "UPDATE_NAME",
  UPDATE_EMAIL = "UPDATE_EMAIL",
  UPDATE_PASSWORD = "UPDATE_PASSWORD",
  UPDATE_DISPLAY_NAME = "UPDATE_DISPLAY_NAME",
  UPDATE_TOKEN = "UPDATE_TOKEN",
}

type AppAction = { [key: string]: (state: IState, action: any) => IState };

export const appActions: AppAction = {
  [APP_ACTIONS.UPDATE_NAME]: (state: IState, actions: any) => {
    return { ...state, name: actions.payload };
  },
  [APP_ACTIONS.UPDATE_EMAIL]: (state: IState, actions: any) => {
    return { ...state, email_address: actions.payload };
  },
  [APP_ACTIONS.UPDATE_PASSWORD]: (state: IState, actions: any) => {
    return { ...state, password: actions.payload };
  },

  [APP_ACTIONS.UPDATE_DISPLAY_NAME]: (state: IState, actions: any) => {
    return { ...state, displayName: actions.payload };
  },
  [APP_ACTIONS.UPDATE_TOKEN]: (state: IState, actions: any) => {
    return { ...state, token: actions.payload };
  },
};

export const reducer = (state: IState, action: any) => {
  return appActions[action.type](state, action);
};

export const StateContext: any = createContext(initialState);
