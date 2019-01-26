import React from 'react';
import PropTypes from 'prop-types';
import { FaRegGem as NotSavedIcon, FaGem as SavedIcon } from 'react-icons/fa';
import Constants from '../../common/constants';
import styles from './gemCard.css';

const GemCard = ({
  name,
  version,
  authors,
  downloads,
  info,
  licenses,
  project_uri,
  gem_uri,
  homepage_uri,
  documentation_uri,
  isSaved,
  onClickSave,
}) => {
  const icon = isSaved
    ? (
      <div
        className={[styles.saveIconContainer, 'save-icon-test-target'].join(' ')}
        onClick={() => onClickSave(Constants.UiElements.ACTION_DELETE_SAVED, name) }
      >
        <SavedIcon className={styles.saveIcon} />
      </div>
    ) : (
      <div
        className={[styles.saveIconContainer, 'save-icon-test-target'].join(' ')}
        onClick={() => onClickSave(Constants.UiElements.ACTION_SAVE, name) }
      >
        <NotSavedIcon className={[styles.saveIcon, styles.notSaved].join(' ')} />
      </div>
    );

  const downloadsOutput = String(downloads).length > 0
    ? (
      <div className={styles.downloads}>
        {Number(downloads).toLocaleString()} <span className={styles.label}>downloads</span>
      </div>
    ) : null;

  const authorsOutput = authors.length > 0
    ? (
      <div className={styles.authors}>
        <span className={styles.label}>Authors(s): </span>
        {authors}
      </div>
    ) : null;

  const licenseOutput = licenses && licenses.length > 0
    ? (
      <div className={styles.licenses}>
        <span className={styles.label}>License(s): </span>
        {licenses.join(', ')}
      </div>
    ) : null;

  const projectUriOutput = project_uri && project_uri.length > 0
    ? (
      <div className={styles.resource}>
        <span className={styles.label}>Project: </span>
        {project_uri}
      </div>
    ) : null;

  const gemUriOutput = gem_uri && gem_uri.length > 0
    ? (
      <div className={styles.resource}>
        <span className={styles.label}>Gem: </span>
        {gem_uri}
      </div>
    ) : null;

  const homepageUriOutput = homepage_uri && homepage_uri.length > 0
    ? (
      <div className={styles.resource}>
        <span className={styles.label}>Homepage: </span>
        {homepage_uri}
      </div>
    ) : null;

  const documentationUriOutput = documentation_uri && documentation_uri.length > 0
    ? (
      <div className={styles.resource}>
        <span className={styles.label}>Documentation: </span>
        {documentation_uri}
      </div>
    ) : null;

  return (
    <div className={styles.container}>
      {icon}
      <div>
        <div className={styles.descriptor}>
          <div>
            <span className={styles.name}>{name}</span>
            <span className={styles.secondary}>&nbsp;&nbsp;(v. {version})</span>
          </div>
          {downloadsOutput}
        </div>

        <div className={styles.info}>
          {info}
        </div>

        {authorsOutput}
        {licenseOutput}
        {projectUriOutput}
        {gemUriOutput}
        {homepageUriOutput}
        {documentationUriOutput}
      </div>
    </div>
  );
};

GemCard.propTypes = {
  name: PropTypes.string.isRequired,
  version: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  authors: PropTypes.string,
  downloads: PropTypes.number,
  licenses: PropTypes.array,
  project_uri: PropTypes.string,
  gem_uri: PropTypes.string,
  homepage_uri: PropTypes.string,
  documentation_uri: PropTypes.string,
  isSaved: PropTypes.bool,
  onClickSave: PropTypes.func,
};

GemCard.defaultProps = {
  authors: '',
  downloads: 0,
  licenses: [],
  project_uri: '',
  gem_uri: '',
  homepage_uri: '',
  documentation_uri: '',
  isSaved: false,
  onClickSave: () => {},
};

export default GemCard;
