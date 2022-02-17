import PropTypes from 'prop-types';

function Heading({ heading }) {
  return <h1>{heading}</h1>
}

Heading.propTypes= {
  heading: PropTypes.string.isRequired,
};

export default Heading