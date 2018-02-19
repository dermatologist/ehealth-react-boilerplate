import {GET_DRUGS} from '../constants/ActionTypes'
import {initialState} from "../constants/initialState";

export default function drugReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_DRUGS}_PENDING`:
      return {...state, fetching: true};
    case `${GET_DRUGS}_FULFILLED`:
      return {
        ...state,
        fetching: false,
        fetched: true,
        id: action.payload.data.id,
        resources: action.payload.data.resource.entry,
      };
    case `${GET_DRUGS}_REJECTED`:
      return {...state, fetching: false, error: action.payload};
    default:
      return state;
  }
}
