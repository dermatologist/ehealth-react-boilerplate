import crudService from "./crudService";
import {contextService} from "../config";

export default class drugService {


  static getDrugs(_service = contextService.service, _function = contextService.function, _id = contextService.id) {
    return crudService.getResources(_service, _function, _id)
  }

}
