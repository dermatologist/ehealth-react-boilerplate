import crudService from "./crudService";
import contextService from "../config";

export default class drugService {


  static getDrugs(message) {
    const context = contextService;
    console.log(message);
    return crudService.postResource(context)
  }

}
