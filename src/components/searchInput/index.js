import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './searchInput.css';

class SearchInput extends Component {
  static propTypes = {
    searchValue: PropTypes.string,
    placeholderText: PropTypes.string,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
  };
  
  static defaultProps = {
    searchValue: '',
    placeholderText: '',
    onChange: () => {},
    onSubmit: () => {},
  };

  handleChange = (event) => {
    const { onChange } = this.props;
    const searchValue = event.target.value;
    onChange(searchValue);
  };

  handleKeyPress = (event) => {
    const { onSubmit } = this.props;
    if (event.key === 'Enter') {
      onSubmit();
    }
  };

  render() {
    const { placeholderText, searchValue } = this.props;

    return (
      <div className={styles.container}>
        <input
          className={styles.component}
          type="text"
          value={searchValue}
          placeholder={placeholderText}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
      </div>
    );
  }
}

export default SearchInput;
