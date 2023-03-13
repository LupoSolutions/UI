import React from 'react';
import {bindActionCreators} from "redux";
import * as autocompleteActions from "../../../../store/actions/AutocompleteAction";
import { connect } from 'react-redux';

 class AutoCompleteContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="dropdown" className="auto-complete">

                <ul>
                    {
                        this.props.suggestions!= null && this.props.suggestions.map((suggestion) =>
                            <li key={suggestion}>
                                <a href="#">{suggestion}</a>
                            </li>
                        )
                    }
                </ul>
            </div>)
    }


}

function mapStateToProps (state) {
    return {
        suggestions: state.AutocompleteReducer.suggestions
    }
}

export default connect(mapStateToProps, null)(AutoCompleteContainer);
