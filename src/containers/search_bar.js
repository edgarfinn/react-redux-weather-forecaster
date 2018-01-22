import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {term: ''};

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value})
  }

  onFormSubmit(event) {
    event.preventDefault();
    // Trigger action creator
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});
  }

  render() {
    return (
      <form
        className="input-group"
        onSubmit={this.onFormSubmit}>
        <input
          type="text"
          placeholder="Get a five-day forecast in your favourite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    )
  }
}
// make 'fetchWeather' action creator up to the SearchBar's props
// function mapDispatchToProps(dispatch) {
  // bind action creator 'fetchWeather' to dispatch,
  // and pass it through all middleware and then reducers in redux
//   return bindActionCreators({ fetchWeather }, dispatch)
// }

// mapStateToProps is passed as the first argument,
// mapDispatchToProps goes in as the second argument.
// So if there is no mapStateToProps function yet, pass 'null' in as the first argument.

export default connect(null, {fetchWeather})(SearchBar);
