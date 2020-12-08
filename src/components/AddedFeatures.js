import React from 'react';

import AddedFeature from './AddedFeature';

import { connect } from 'react-redux';

const AddedFeatures = props => {
  // mapped state features added to props, no longer needs passed props
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.features.length ? (
        <ol type="1">
          {props.features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    features: state.car.features
  }
}

export default connect(mapStateToProps)(AddedFeatures);
