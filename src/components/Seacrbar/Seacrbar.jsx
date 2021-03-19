import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styles from './Searchbar.module.css';

class Seacrbar extends Component {
  state = {
    query: '',
  };

  handleInput = e => {
    this.setState({
      query: e.currentTarget.value.replace(' ', '+'),
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
  };

  render() {
    return (
      <form className={styles.SearchForm}>
        <Link to={`${this.props.match.url}?query=${this.state.query}`}>
          <button
            type="submit"
            className={styles.SearchForm__button}
            onClick={this.handleSubmit}
          >
            <span className={styles.SearchForm__button__label}>Search</span>
          </button>
        </Link>

        <input
          className={styles.SearchForm__input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie..."
          onChange={this.handleInput}
        />
      </form>
    );
  }
}

export default withRouter(Seacrbar);
