import React from 'react';
import AdditionalFeature from './AdditionalFeature';

import { connect } from 'react-redux';

const AdditionalFeatures = props => {
  // correctly importing state into props from redux rather than prop drilling
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalFeatures: state.additionalFeatures
  }
}

export default connect(mapStateToProps)(AdditionalFeatures);
