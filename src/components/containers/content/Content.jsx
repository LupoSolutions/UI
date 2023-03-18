import React from "react";
import {connect} from "react-redux";


class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="header-test">
                <h1>Noodles</h1>
              <p>Discover what you need with ease</p>
                </div>
                {this.props.content.map((value) =>
                    <div className="item">
                    <article>
                            <img alt={value.description}
                                 src={value.pictureUrl}/>
                            <div role="button">
                                {value.description}
                            </div>
                            <span>{value.price} </span>
                        </article>
                    </div>
                )}

            </>
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

export default connect(mapStateToProps, null)(Content)
