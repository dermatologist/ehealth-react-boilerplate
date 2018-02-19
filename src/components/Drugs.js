import React from 'react'
import PropTypes from 'prop-types'
import pure from 'recompose/pure'
// import styled from 'styled-components'
import {Card, CardActions, CardHeader, CardText, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

// const Intro = styled.p`font-size: large;`;

function Drugs({drug}, {index}) {
  if (drug.id == null) {
    return null;
  } else if (drug.fetching) {
    return <div>Loading...</div>;
  } else if (drug.length === 0) {
    return <div>None</div>;
  }

  return (

    <Card>
      <CardHeader
        title={drug.resourceType}
        subtitle={index}
        avatar="images/medicine.png"
      />

      <CardTitle title={drug.id} subtitle={drug.product.form.text}/>
      <CardText>

        {drug.code.coding.map((name, index2) => {
          return (<div key={index2}>{name.display}
            <small>({name.system})</small>
          </div>);
        })}

      </CardText>
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
