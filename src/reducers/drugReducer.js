import { GET_DRUGS } from "../constants/ActionTypes";
import { initialState } from "../constants/initialState";
import { FhirUtils } from "../utils/fhirUtils";

export default function drugReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_DRUGS}_PENDING`:
      return {...state, fetching: true};
    case `${GET_DRUGS}_FULFILLED`: {
      const fu = new FhirUtils();
      return {
        ...state,
        fetching: false,
        fetched: true,
        id: action.payload.data.id,
        resources: fu.parseJSONBundle(action.payload.data)
      };
    }
    case `${GET_DRUGS}_REJECTED`:
      return {...state, fetching: false, error: action.payload};
    default:
      return state;
  }
}
