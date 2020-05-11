import { START_LOADER, END_LOADER } from "./types";

export const startLoader = () => ({ type: START_LOADER });

export const endLoader = () => ({ type: END_LOADER });
