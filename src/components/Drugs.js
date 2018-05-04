import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
// import styled from 'styled-components'
import { Card, CardActions, CardHeader, CardTitle } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

// const Intro = styled.p`font-size: large;`;

function Drugs({drug}, {index}) {

  return (

    <Card>
      <CardHeader
        title={drug.medicationType}
        subtitle={index}
        avatar="images/medicine.png"
      />

      <CardTitle title={drug.id} subtitle={drug.medicationName}/>

      <CardActions>
        <FlatButton label="View"/>
      </CardActions>
    </Card>

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
