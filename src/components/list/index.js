import React from 'react';
import PropTypes from 'prop-types';
import styles from './list.css';

const List = ({
  children
}) => (
  <div className={styles.container}>
    { children }
  </div>
);

List.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
}

export default List;
