export class FhirUtils {
  /**
   *  This code is from the template provided by
   *  EHO-Innovation-Lab
   *
   *  https://github.com/EHO-Innovation-Lab/FHIRNorthJavaScript/blob/master/routes/index.js
   *
   */

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
