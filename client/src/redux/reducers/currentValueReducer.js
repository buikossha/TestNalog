import { SET_VALUE } from "../types"

export default function setCurrentValueReducer(state = null, action) {
  const { type, payload } = action
  switch (type) {
    case SET_VALUE: {
      return payload
    }
    default: {
      return state
    }
  }
}
