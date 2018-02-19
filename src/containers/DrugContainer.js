import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createSelector, createStructuredSelector} from 'reselect'
import {bindActionCreators} from 'redux'
import Drugs from '../components/Drugs'
import Patient from '../components/Patient'

import * as DrugActions from '../actions/drugAction'

// import {GET_DRUGS} from "../constants/ActionTypes";

class DrugContainer extends React.Component {
  static propTypes = {
    getDrugs: PropTypes.func.isRequired,
    drug: PropTypes.shape({
      resources: PropTypes.array,
      fetching: PropTypes.bool,
      fetched: PropTypes.bool,
      error: PropTypes.object,
      id: PropTypes.any,
      singleResource: PropTypes.object,
    }),
  };

  static defaultProps = {
    drug: {
      resources: [],
      fetching: false,
      fetched: false,
      error: null,
      id: null,
      singleResource: null,
    }
  };


  componentDidMount = () => {
    this.props.getDrugs()

  };


  componentWillReceiveProps = () => {


  };

  schema = {
    title: "",
    type: "object",
    required: [],
    properties: {}
  };

  render() {

    const drug = this.props.drug;
    if (drug.id == null) {
      return null;
    } else if (drug.fetching) {
      return <div>Loading...</div>;
    } else if (drug.length === 0) {
      return <div>None</div>;
    }

    return (
      this.props.drug.resources.map((item, index) => {

        switch (item.resourceType) {
          case `Medication`:
            return <div key={item.id}><Drugs
              drug={item} key={item.id} index={index}
            />
            </div>;
          case `Patient`:
            return <div key={item.id}><Patient
              pid={item} key={item.id} index={index}
            />
            </div>;
          default:
            return (<div key={item.id}>Unknown</div>)

        }

      })



    )
  }
}

const mapStateToProps = createStructuredSelector({
  drug: createSelector(
    (state) => state.drug,
    (counterState) => counterState // Implement filters if required
    // https://github.com/reactjs/reselect#motivation-for-memoized-selectors
  ),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(DrugActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DrugContainer)
