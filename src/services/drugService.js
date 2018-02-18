import crudService from "./crudService";
import {configparams} from "../config/config";

export default class drugService {


  static getDrugs(_service = configparams.service, _function = configparams.function, _id = configparams.id) {
    console.log(configparams);
    return crudService.getResources(_service, _function, _id)
  }

}
