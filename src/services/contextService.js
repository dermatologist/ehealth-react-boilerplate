import crudService from "./crudService";

export default class contextService {

  static getConfig() {
    return crudService.getResources('config.json');
  }

}
