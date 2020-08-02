import React from 'react';
import PropTypes from 'prop-types';

function ArrowRight({ fill, width, height }) {
  return (
    <svg width={width} height={height}>
      <rect width={width} height={height} fill="none" rx="0" ry="0" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.0601 10.9425L10.0601 4.9425C9.47006 4.3525 8.52006 4.3525 7.94006 4.9425C7.35006 5.5325 7.35006 6.4825 7.94006 7.0625L12.8801 12.0025L7.94006 16.9425C7.35006 17.5325 7.35006 18.4825 7.94006 19.0625C8.23006 19.3525 8.62006 19.5025 9.00006 19.5025C9.38006 19.5025 9.77006 19.3525 10.0601 19.0625L16.0601 13.0625C16.6501 12.4825 16.6501 11.5225 16.0601 10.9425Z"
        fill={fill}
      />
    </svg>
  );
}

ArrowRight.defaultProps = {
  fill: '#00AAff',
  width: '24',
  height: '24',
};

ArrowRight.propTypes = {
  fill: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default ArrowRight;
