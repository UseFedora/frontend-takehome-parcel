import React from 'react';
import PropTypes from 'prop-types';
import styles from './searchButton.css';

const SearchButton = ({
  onClick,
}) => (
  <button
    className={styles.component}
    onClick={onClick}
  >
    Search
  </button>
);

SearchButton.propTypes = {
  onClick: PropTypes.func,
};

SearchButton.defaultProps = {
  onClick: () => {},
};

export default SearchButton;
