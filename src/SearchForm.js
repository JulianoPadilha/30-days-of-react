import React from 'react';
import PropTypes from 'prop-types';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchText: ''
        }
    }

    updateSearchInput(event) {
        const value = event.target.value;
        this.setState({
            searchText: value
        });
    }

    submitForm(event) {
        event.preventDefault();

        const { searchText } = this.state;
        this.props.onSubmit(this.state.searchText);

    }

    render() {
        const { searchVisible } = this.props;

        // Classes to add to the <input /> element
        let searchClasses = ['searchInput'];

        // Update the class array if the state is visible
        if(searchVisible) {
            searchClasses.push('active');
        }
        return (
            <form onSubmit={this.submitForm.bind(this)}>
                <input 
                    type="text" 
                    className={searchClasses.join(' ')}
                    onChange={ this.updateSearchInput.bind(this) }
                    placeholder="Search..."/>
                
            </form>
        )
    }
}

SearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    searchVisible: PropTypes.bool
};

SearchForm.defaultProps = {
    onSubmit: () => {},
    searchVisible: false
};

export default SearchForm;