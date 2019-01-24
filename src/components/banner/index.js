import React from 'react';
import PropTypes from 'prop-types';
import styles from './banner.css';

const Banner = ({
  children,
}) => (
  <div className={styles.container}>
    { children }
  </div>
);

Banner.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
};

export default Banner;
