import React from "react";
import {connect} from "react-redux";
import Header from "../../header/Header";


class Facet extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="filter">
                <h2>Filter Results</h2>
                <h3>Category</h3>
                <label>
                    <input type="checkbox" />
                    Noodles
                </label><br/>
                <label>
                    <input type="checkbox" />
                    Asian
                </label><br/>
                <label>
                    <input type="checkbox" />
                    Ramen
                </label><br/>

                <button>View All</button>

                <h3>Brand</h3>
                <label>
                    <input type="checkbox" />
                    Creamette
                </label><br/>
                <label>
                    <input type="checkbox" />
                    Barilla
                </label><br/>
                <label>
                    <input type="checkbox" />
                    Maruchan
                </label><br/>
                <button>View All</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        content: state.ContentReducer
    }

}

// function mapDispatchToProps (dispatch) {
//     return {
//         autocompleteActions: bindActionCreators(autocompleteActions, dispatch)
//     }
// }

export default connect(mapStateToProps, null)(Facet)
