import { SET_VALUE } from "../types";

export const getCurrentValueAction = (currentValue) => ({
  type: SET_VALUE,
  payload: currentValue
})
