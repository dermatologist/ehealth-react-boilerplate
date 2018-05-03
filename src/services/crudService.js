import uuidv4 from "uuid/v4";
import { fhirServer } from "./crud";

export class FhirUtils {
  /**
   * Object containing functions which simplify locations of data.
   *
   */
  parseResource = {

    Patient(resource) {
      return {
        id: resource.id,
        healthCardNumber: resource.identifier[0].value,
        givenName: resource.name[0].given[0],
        familyName: resource.name[0].family[0],
        gender: resource.gender,
        birthDate: resource.birthDate
      };
    },
    Practitioner(resource) {
      return {
        id: resource.id,
        givenName: resource.name[0].given[0],
        familyName: resource.name[0].family[0]
      };
    },
    Medication(resource) {
      return {
        id: resource.id,
        medicationName: resource.code.coding[0].display,
        medicationCode: resource.code.coding[0].code,
        medicationType: resource.code.coding[1].display,
        medicationTypeCode: resource.code.coding[1].code,
        medicationSubtype: resource.code.coding[2].display,
        medicationSubtypeCode: resource.code.coding[2].code
      };
    },
    MedicationDispense(resource) {
      return {
        daysSupply: resource.daysSupply.value,
        id: resource.id,
        identifier: resource.identifier.value,
        status: resource.status,
        whenHandedOver: resource.whenHandedOver
      };
    },
    MedicationOrder(resource) {
      return {
        id: resource.id,
        identifier: resource.identifier[0].value,
        medicationReference: resource.medicationReference.reference
      };
    }
  };

  /**
   * Builds query to be sent to DHDR server.
   *
   */
  static buildQuery(request) {

    const query = {};

    query["patient:patient.identifier"] = `https://ehealthontario.ca/API/FHIR/NamingSystem/ca-on-patient-hcn|${  request.healthCardNumber}`;

    query._format = "fhir+json";

    return query;
  }

  /**
   * Returns custom headers required by DHDR server.
   *
   */
  queryHeaderDHDR() {

    return {
      "ClientTxID": uuidv4(),
      "X-Sender-Id": "06d29224-25a2-4178-a203-8b1424a15bbe",
      "X-License-Text": "I hereby accept the service agreement here: https://innovation-lab.ca/media/1147/innovation-lab-terms-of-use.pdf"
    };
  }

  /**
   * Parses bundle returned from DHDR and returns javascript object containing all FHIR resources found in bundle.
   *
   */
  parseJSONBundle(bundle) {

    const entries = new Array(bundle.entry.length);
    for (let i = 0; i < bundle.entry.length; i++) {
      entries[i] = {};
      entries[i].MedicationDispense = this.parseResource.MedicationDispense(bundle.entry[i].resource);
      for (let j = 0; j < bundle.entry[i].resource.contained.length; j++) {
        entries[i][this.BundleType(bundle.entry[i].resource.contained[j])] = this.parseResource[bundle.entry[i].resource.contained[j].resourceType](bundle.entry[i].resource.contained[j]);
      }
    }
    return entries;
  }

  /**
   * Called by parseJSONBundle function. Required due to Patient resources since there are two possible subtypes (MasterPatient and DispensePatient).
   *
   */
  BundleType(containedResource) {
    if (containedResource.resourceType !== "Patient") {
      return containedResource.resourceType;
    }

    if (containedResource.id.charAt(3) === "D") {
      return "DispensePatient";
    }

    return "MasterPatient";


  }
}

// All functions return a promise

export default class crudService {


  static getResources(_service, _function, _id) {
    // return fhirServer.get(`${_service}/${_function}?${_id}`); // TODO: To change
    return fhirServer.get(`${_function}/${_id}`);

  }

  static postResource(_service, _function, _id, _hcn) {

    console.log(fhirServer);
    const _query = {};

    _query["patient:patient.identifier"] = `${_id}${_hcn}`;

    _query._format = "fhir+json";

    let resp = null;

    const fsu = new FhirUtils();

    console.log(_query, _function);
    fhirServer
      .search({
        type: _function,
        query: _query
      })
      .then((res) => {
        console.log(_query);
        console.log(fsu.parseJSONBundle(res.data));
        resp = fsu.parseJSONBundle(res.data);
      })
      .catch((res) => {
        // Error responses
        if (res.status) {
          console.log("Error", res.status);
        }
        // Errors
        if (res.message) {
          console.log("Error", res.message);
        }
      });
    return resp;
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
