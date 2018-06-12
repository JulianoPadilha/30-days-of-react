import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from './SearchForm';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchVisible: false
        }
    }

    // toggle visibility when run on the state
    showSearch() {
        this.setState({
            searchVisible: !this.state.searchVisible
        });
    }

    submitForm(value) {
        this.props.onSearch(value);
    }
    
    render() {
        // Classes to add to the <input /> element
        let searchInputClasses = ['searchInput'];

        // Update the class array if the state is visible
        if(this.state.searchVisible) {
            searchInputClasses.push('active');
        }

        return (
            <div className="header">
                <div className="menuIcon">
                    <div className="dashTop"></div>
                    <div className="dashBottom"></div>
                    <div className="circle"></div>
                </div>

                <span className="title">{ this.props.title }</span>
                <SearchForm
                    searchVisible={ this.state.searchVisible } 
                    onSubmit={ this.props.onSubmit } />
                    
                {/* Adding an onClick handler to call the showSearch button */}
                <div 
                    onClick={this.showSearch.bind(this)}
                    className="fa fa-search searchIcon"></div>
            </div>
        )
    }
}

Header.propTypes = {
    title: PropTypes.string,
    onSearch: PropTypes.func
}

Header.defaultProps = {
    title: "GitHub activity"
}

export default Header;