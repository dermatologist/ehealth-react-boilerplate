import { fhirServer } from "./crud";


// All functions return a promise

export default class crudService {


  static getResources(_service, _function, _id) {
    // return fhirServer.get(`${_service}/${_function}?${_id}`); // TODO: To change
    return fhirServer.get(`${_function}/${_id}`);

  }

  static postResource(_service, _function, _id, _hcn) {

    const fhirquery = {};

    fhirquery["patient:patient.identifier"] = `${_id}${_hcn}`;

    fhirquery["_format"] = "fhir+json";

    // let resp = null;
    //
    // const fsu = new FhirUtils();

    return fhirServer.search({
      type: _function,
      query: fhirquery
    });

    // fhirServer.method = 'POST'
    //
    // fhirServer
    //   .search({
    //     type: _function,
    //     query: _query
    //   })
    //   .then((res) => {
    //      console.log(res)
    //      resp = fsu.parseJSONBundle(res.data);
    //      console.log(resp);
    //   })
    //   .catch((res) => {
    //     // Error responses
    //     if (res.status) {
    //       console.log("Error", res.status);
    //     }
    //     // Errors
    //     if (res.message) {
    //       console.log("Error", res.message);
    //     }
    //   });
    // return resp;
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
