import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
// import styled from 'styled-components'
import { Card, CardActions, CardHeader, CardTitle } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

// const Intro = styled.p`font-size: large;`;

function Patient({pid}, {index}) {

  return (

    <Card>
      <CardHeader
        title={pid.familyName}
        subtitle={pid.givenName}
        avatar="images/patient.png"
      />

      <CardTitle title={index} subtitle={pid.birthDate}/>

      <CardActions>
        <FlatButton label="View"/>
      </CardActions>
    </Card>

  )

}

Patient.propTypes = {
  pid: PropTypes.shape({
    resources: PropTypes.array,
    fetching: PropTypes.bool,
    fetched: PropTypes.bool,
    error: PropTypes.object,
    singleResource: PropTypes.object,
  }).isRequired,
};

export default pure(Patient)
