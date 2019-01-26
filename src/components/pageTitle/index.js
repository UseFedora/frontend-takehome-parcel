import React from 'react';
import PropTypes from 'prop-types';
import styles from './pageTitle.css';

const PageTitle = ({
  label,
}) => (
  <h1 className={styles.component}>
    { label }
  </h1>
);

PageTitle.propTypes = {
  label: PropTypes.string.isRequired,
};

export default PageTitle;
