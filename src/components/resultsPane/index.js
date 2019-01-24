import React from 'react';
import PropTypes from 'prop-types';
import { DotLoader } from 'react-spinners';
import styles from './resultsPane.css';

const ResultsPane = ({
  children,
  numberOfResults,
  emptyResultsMessage,
  isLoading,
}) => {
  const emptyResults = isLoading
    ? (
      <div className={styles.loadingContainer}>
        <DotLoader
          sizeUnit='px'
          size={120}
          color='#caebf2'
        />
      </div>
    ) : (
      <div className={styles.noResultsContainer}>
        <p className={styles.noResultsMessage}>
          {emptyResultsMessage}
        </p>
      </div>
    );

  return (
    <div className={styles.container}>
      {numberOfResults > 0
        ? children
        : emptyResults}
    </div>
  );
};


ResultsPane.propTypes = {
  emptyResultsMessage: PropTypes.string,
  numberOfResults: PropTypes.number,
  isLoading: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
};

ResultsPane.defaultProps = {
  emptyResultsMessage: '',
  numberOfResults: 0,
  isLoading: false,
  children: null,
};

export default ResultsPane;
