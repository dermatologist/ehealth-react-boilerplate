import {fhirServer} from './crud';

export default class contextService {

  static getConfig() {
    return fhirServer.getResources('config.json');
  }

}
