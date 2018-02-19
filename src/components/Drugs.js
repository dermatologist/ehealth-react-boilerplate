import React from 'react'
import PropTypes from 'prop-types'
import pure from 'recompose/pure'
import styled from 'styled-components'

const Intro = styled.p`font-size: large;`;

function Drugs({drug}, {index}) {
  if (drug.fullUrl == null) {
    return null;
  } else if (drug.fetching) {
    return <div>Loading...</div>;
  } else if (drug.length === 0) {
    return <div>None</div>;
  }

  return (
    <section>
      <Intro>
        {index}

        <b>URL:</b> {drug.fullUrl}<br/>
        <b>ID:</b> {drug.resource.id}<br/>
        <b>Patient:</b> {drug.resource.patient.reference}<br/>
        <b>Medication:</b>{drug.resource.medicationReference.reference}<br/>
        <b>Identifier:</b><i>(System)</i>{drug.resource.identifier.system}.
        <i>(Value):</i>{drug.resource.identifier.value}<br/>
        <b>Days Supply:</b>{drug.resource.daysSupply.value}<br/>
        <b>Quantity:</b>{drug.resource.quantity.value}<br/>
        <b>When Handed Over:</b>{drug.resource.whenHandedOver}<br/>

      </Intro>
    </section>
  )

}

Drugs.propTypes = {
  drug: PropTypes.shape({
    resources: PropTypes.array,
    fetching: PropTypes.bool,
    fetched: PropTypes.bool,
    error: PropTypes.object,
    singleResource: PropTypes.object,
  }).isRequired,
};

export default pure(Drugs)
