import React from 'react';
import PropTypes from 'prop-types';

function ResposiveImage({ small, medium, large, alt, ...rest }) {
  return (
    <img alt={alt} src={small} srcSet={`${small} 300w, ${medium} 768w, ${large} 1280w`} {...rest} />
  );
}

ResposiveImage.propTypes = {
  alt: PropTypes.string.isRequired,
  small: PropTypes.string.isRequired,
  medium: PropTypes.string.isRequired,
  large: PropTypes.string.isRequired,
};

export default ResposiveImage;
