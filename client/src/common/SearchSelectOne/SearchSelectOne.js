import React, { Component } from 'react';
import './SearchSelectOne.scss';

import Input from '../Input/Input';

export class SearchSelectOne extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = {
      result: null,
      error: null,
      loading: false,
      keysPressed: 0,
      isFocus: false
    };
  }

  addKeysPressed(hits, callback) {
    let keysPressed = this.state.keysPressed;
    keysPressed += hits;
    this.setState({ keysPressed }, callback);
  }

  handleAsyncGetOptions() {
    const { asyncGetOptions, value } = this.props;
    const searchOptions = {
      search: value,
      page: 1,
      per_page: 10
    };

    this.setState({ result: null, error: null, loading: true });

    asyncGetOptions(searchOptions, (data, error) => {
      if (error) return this.setState({ result: null, error: error, loading: false });
      this.setState({ result: data, error: null, loading: false });
    });
  }

  isSearchSameAfterHalfSecond(callback) {
    const previous = this.state.keysPressed;
    window.setTimeout(() => {
      callback(previous === this.state.keysPressed);
    }, 500);
  }

  render () {
    const { setValue, value } = this.props;
    const { isFocus } = this.state;
    const { result } = this.state;

    return (
      <div className={`search-select-one-container${isFocus ? '-focus' : ''}`}>
        <Input
          {...this.props}
          autoComplete="off"
          onFocus={() => this.setState({ isFocus: true })}
          setValue={(val) => {
            setValue(val);

            this.addKeysPressed(1, () => {
              this.isSearchSameAfterHalfSecond((searchSame) => {
                if (!searchSame) return;
  
                this.handleAsyncGetOptions();
              });  
            });
          }}
          value={value || ""}
        />
        {isFocus ? (
          <div className="search-select-one-suggestion-container">
            {result && result.items && result.items.length > 0 ? result.items.map((item, i) => {
              return (
                <div
                  className="search-select-one-suggestion"
                  key={"SearchSelectOne" + item.name + i}
                  onClick={() => {
                    this.setState({ isFocus: false });
                    setValue(item.name);
                  }}>
                  {item.name}
                </div>
              );
            }): <div className="search-select-one-suggestion">No Results :(</div>}
          </div>
        ) : ''}
      </div>
    );
  }
}

export default SearchSelectOne;