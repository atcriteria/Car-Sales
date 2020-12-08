import React from 'react';

import { connect } from 'react-redux';
import { addFeature, removeFeature } from '../actions/index';

const AdditionalFeature = props => {

  const clickHandler = e => {
    e.preventDefault();
    props.addFeature(props.feature);
    props.removeFeature(props.feature);
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={clickHandler} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    additionalFeatures: state.additionalFeatures
  }
}

export default connect(mapStateToProps, { addFeature, removeFeature })(AdditionalFeature);
