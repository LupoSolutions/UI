import React from "react";
import {connect} from "react-redux";

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
        const totalPrice = this.props.items.reduce((total, item) => total + item.price, 0);
        this.state = { totalPrice
        };
    }

    render() {
        return (
            <div className="shopping-cart">
                <button>Shopping Cart</button>
                <h2>Shopping Cart</h2>
                <ul>
                    {this.props.items.map((item) => (
                        <li key={item.id}>
                            {item.name} - ${item.price.toFixed(2)}
                            <button>Remove</button>
                            {/*<button onClick={() => onItemRemove(item.id)}>Remove</button>*/}
                        </li>
                    ))}
                </ul>
                <p>Total Price: ${this.state.totalPrice.toFixed(2)}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        items: state.ShoppingCartReducer.items
    }

}

// function mapDispatchToProps (dispatch) {
//     return {
//         autocompleteActions: bindActionCreators(autocompleteActions, dispatch)
//     }
// }

export default connect(mapStateToProps, null)(ShoppingCart)
