import React from "react";
import AutoCompleteContainer from "./autocomplete/AutoCompleteContainer";
import {bindActionCreators} from "redux";
import debounce from 'debounce';


import * as autocompleteActions from '../../../store/actions/AutocompleteAction';
import { connect } from 'react-redux';


  class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.searchBarReference = React.createRef();
        this.bindFunctions();
    }

    render() {
        return ( <div className="search-bar">
            <input
                   ref={this.searchBarReference}
                    type="searchBox"
                    placeholder="Search for stuff"/>
            {this.props.autoCompleteVisible && <AutoCompleteContainer/> }
        </div>)
    }

    bindFunctions () {
        this.handleFocus = this.handleFocus.bind(this);
        this.handleFocusOut = this.handleFocusOut.bind(this);
        this.handleInput = this.handleInput.bind(this);

    }

    componentDidMount() {
        this.searchBarReference.current.addEventListener('focus', this.handleFocus)
        this.searchBarReference.current.addEventListener('focusout', this.handleFocusOut)
        this.searchBarReference.current.addEventListener('input', debounce(this.handleInput, 10))
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.autoCompleteVisible !== this.props.autoCompleteVisible;
    }

    handleInput (e) {
        const input = e.target.value || '';
        const formattedInput = formatQuery(input)
        this.props.autocompleteActions.retrieveSuggestions(formattedInput)
    }

    handleFocus () {
        this.props.autocompleteActions.displayAutocomplete(true);
    }

    handleFocusOut () {
        this.props.autocompleteActions.displayAutocomplete(false)
    }

}

function formatQuery (query) {
    return query.toLowerCase().trim().replace(/\s{2,}/g, ' ');
}

function mapStateToProps (state) {
    return {
        autoCompleteVisible: state.AutocompleteReducer.visible.isVisible
    }

}

function mapDispatchToProps (dispatch) {
    return {
        autocompleteActions: bindActionCreators(autocompleteActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
