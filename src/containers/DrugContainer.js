import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createSelector, createStructuredSelector} from 'reselect'
import {bindActionCreators} from 'redux'
import Drugs from '../components/Drugs'

import * as DrugActions from '../actions/drugAction'

class DrugContainer extends React.Component {
  static propTypes = {
    getDrugs: PropTypes.func.isRequired,
    drug: PropTypes.shape({
      resources: PropTypes.array,
      fetching: PropTypes.bool,
      fetched: PropTypes.bool,
      error: PropTypes.object,
      singleResource: PropTypes.object,
    }),
  };

  static defaultProps = {
    drug: {
      resources: [],
      fetching: false,
      fetched: false,
      error: null,
      singleResource: null,
    }
  };


  componentDidMount = () => {
    this.props.getDrugs('')

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

    if (this.props.drug.fetched) {
      const items = this.props.drug.singleResource.item;
      console.log(items);
      items.forEach((item) => {
        const buff = item;
        buff.title = item.text;
        if (item.type === 'text')
          buff.type = 'string';
        if (item.type === 'open-choice')
          buff.type = 'string';
        this.schema.properties[item.linkId] = buff
      })
    }

    return (

      <div><Drugs
        drug={this.props.drug}
      />
      </div>

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
