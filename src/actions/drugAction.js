import {GET_DRUGS} from '../constants/ActionTypes'
import drugService from "../services/drugService";


export function getDrugs(message) {
  return {type: GET_DRUGS, payload: drugService.getDrugs(message)};
}
