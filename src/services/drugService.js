import crudService from "./crudService";
import { configparams } from "../config/config";

export default class drugService {


  static getDrugs(_hcn = configparams.hcn, _service = configparams.service, _function = configparams.function, _fhir = configparams.fhir) {
    // return crudService.getResources(_service, _function, _fhir)
    return crudService.postResource(_service, _function, _fhir, _hcn);
  }

}
