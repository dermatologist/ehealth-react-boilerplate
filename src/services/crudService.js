import {fhirServer} from './crud';


// All functions return a promise

export default class crudService {


  static getResources(_service, _function, _id) {
    // return fhirServer.get(`${_service}/${_function}?${_id}`); // TODO: To change
    return fhirServer.get(`${_function}/${_id}`);

  }

  static postResource(resource) {
    return fhirServer.post('/', resource);
  }

  // static getResource(baseUrl, uri, _id, _version) {
  //   return fhirServer.get(`${baseUrl}${uri}/${_id}/_history/${_version}?_format=json`);
  // }

  // updateResource(url, resource) {
  //   return fhirServer.put(`${url}/${resource._id}`, resource);
  // }
  //
  // deleteResource(url, _id) {
  //   return fhirServer.delete(`${url}/${_id}`);
  //
  // }
}
