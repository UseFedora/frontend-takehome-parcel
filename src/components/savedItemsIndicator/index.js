import React from 'react';
import PropTypes from 'prop-types';
import { FaRegGem as SavedIcon } from 'react-icons/fa';
import styles from './savedItemsIndicator.css';

const SavedItemsIndicator = ({
  numberOf,
}) => {
  const text = numberOf === 1
    ? 'gem'
    : 'gems';
  return (
    <div className={styles.component}>
      <p>
        <SavedIcon className={styles.icon} />
        <span className={styles.label}>{`${numberOf} ${text}`}</span>
      </p>
    </div>
  );
};

SavedItemsIndicator.propTypes = {
  numberOf: PropTypes.number,
};

SavedItemsIndicator.defaultProps = {
  numberOf: 0
};

export default SavedItemsIndicator;
