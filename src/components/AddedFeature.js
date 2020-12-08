import React from 'react';

import { connect } from 'react-redux';
import { removeAddedFeature, addAdditionalFeature } from '../actions/index';

const AddedFeature = props => {

  const clickHandler = e => {
    e.preventDefault();
    props.removeAddedFeature(props.feature);
    props.addAdditionalFeature(props.feature);
  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={clickHandler} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {
  }
}

export default connect(mapStateToProps, { removeAddedFeature, addAdditionalFeature })(AddedFeature);
