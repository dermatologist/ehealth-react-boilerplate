import React from 'react'
import PropTypes from 'prop-types'
import pure from 'recompose/pure'
import styled from 'styled-components'

const Intro = styled.p`font-size: large;`;

function Drugs({drug}) {
  if (drug.singleResource == null) {
    return null;
  } else if (drug.fetching) {
    return <div>Loading...</div>;
  } else if (drug.length === 0) {
    return <div>None</div>;
  }

  return (
    <section>
      <Intro>
        {drug.singleResource}<br/>
        {drug.singleResource.publisher}
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
