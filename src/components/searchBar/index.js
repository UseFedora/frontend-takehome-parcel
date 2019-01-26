import React from 'react';
import PropTypes from 'prop-types';
import styles from './searchBar.css';

const SearchBar = ({
  children
}) => (
  <div className={styles.container}>
    {children}
  </div>
);

SearchBar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
};

SearchBar.defaultProps = {
  children: null,
};

export default SearchBar;
