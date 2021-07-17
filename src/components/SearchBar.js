import React from "react";


class SearchBar extends React.Component {
    constructor() {
        super()

        this.state = {
            term: ""
        }
    }

    onInputChange = (event) => {
        this.setState({ term: event.target.value })
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onTermSubmit(this.state.term);
        //Todo : Make sure a call back from the parent component.
    }

    render() {
        return (
            <div className="ui segment search-bar">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Search video here...vivektest</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>


            </div>
        )
    }
}
export default SearchBar;
