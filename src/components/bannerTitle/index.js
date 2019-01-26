import React from 'react';
import PropTypes from 'prop-types';
import styles from './bannerTitle.css';

const BannerTitle = ({
  label,
}) => (
  <h4 className={styles.component}>
    { label }
  </h4>
);

BannerTitle.propTypes = {
  label: PropTypes.string.isRequired,
};

export default BannerTitle;
