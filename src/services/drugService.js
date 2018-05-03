import crudService from "./crudService";
import { configparams } from "../config/config";

export default class drugService {


  static getDrugs(_service = configparams.service, _function = configparams.function, _fhir = configparams.fhir, _hcn = configparams.hcn) {
    console.log(configparams);
    // return crudService.getResources(_service, _function, _fhir)
    return crudService.postResource(_service, _function, _fhir, _hcn);
  }

}
