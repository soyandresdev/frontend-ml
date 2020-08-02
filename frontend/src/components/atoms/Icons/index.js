import React from 'react';
import PropTypes from 'prop-types';

import ArrowLeft from './IconComponets/ArrowLeft';
import ArrowRight from './IconComponets/ArrowRight';

export default function Icons({ type, ...resProps }) {
  return (
    <>
      {{
        ArrowLeft: <ArrowLeft {...resProps} />,
        ArrowRight: <ArrowRight {...resProps} />,
      }[`${type}`] || <div />}
    </>
  );
}

Icons.propTypes = {
  type: PropTypes.oneOf(['ArrowLeft', 'ArrowRight']).isRequired,
};
