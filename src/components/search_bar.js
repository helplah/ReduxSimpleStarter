/* must import react because jsx actually means:

const App = () => {
    return <div>Hello World</div>;
}

var App = function App() {
    return React.createElement(
        "div",
        null,
        "Hello World"
    );
};

*/
import React, { Component } from 'react';

class SearchBar extends Component {
    /* first and only function called automatically
        whenever a new instance of the class is created */
    constructor(props) {
        // inherit super class props
        super(props);

        this.state = { term: '' };
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    render() {
        return (
            <div className='search-bar'>
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }
}

export default SearchBar;
