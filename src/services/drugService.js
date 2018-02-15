import crudService from "./crudService";
import contextService from "./contextService";

export default class drugService {


  static getDrugs(message) {
    const context = contextService.getConfig();
    context.params.add({
      name: "message",
      value: message
    });
    return crudService.postResource(context)
  }

}
