import React from 'react'
import PropTypes from 'prop-types'
import pure from 'recompose/pure'
// import styled from 'styled-components'
import {Card, CardActions, CardHeader, CardText, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

// const Intro = styled.p`font-size: large;`;

function Patient({pid}, {index}) {
  if (pid.id == null) {
    return null;
  } else if (pid.fetching) {
    return <div>Loading...</div>;
  } else if (pid.length === 0) {
    return <div>None</div>;
  }

  return (

    <Card>
      <CardHeader
        title={pid.resourceType}
        subtitle={index}
        avatar="images/patient.png"
      />

      <CardTitle title={pid.id} subtitle={pid.birthDate}/>
      <CardText>

        {pid.name.map((name, index2) => {
          return (<div key={index2}>{name.given[0]}
            {name.family[0]}
          </div>);
        })}

      </CardText>
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
