import React from "react";
import {connect} from "react-redux";

function setIsOpen(b) {

}

class ShoppingCart extends React.Component {
    isOpen = true;
    constructor(props) {
        super(props);
        const totalPrice = this.props.items.reduce((total, item) => total + item.price, 0);
        this.state = {
            totalPrice
        };
    }

    render () {
        return (
            <div className="shopping-cart">
            <button onClick={() => setIsOpen(!this.isOpen)}>
                    {this.isOpen ? 'Hide Cart' : 'Show Cart'}
                </button>
                {this.isOpen && (
                    <div>
                        <h2>Shopping Cart</h2>
                        <ul>
                            {this.props.items.map((item) => (
                                <li key={item.id}>
                                    {item.name} - ${item.price.toFixed(2)}
                                    <button onClick={() => handleRemoveFromCart(item.id)}>
                                        Remove
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                <div>
                    <h2>Products</h2>
                    <ul>
                        <li>
                            Product 1 - $10.00{' '}
                            <button onClick={() => handleAddToCart({ id: 1, name: 'Product 1', price: 10 })}>
                                Add to Cart
                            </button>
                        </li>
                        <li>
                            Product 2 - $20.00{' '}
                            <button onClick={() => handleAddToCart({ id: 2, name: 'Product 2', price: 20 })}>
                                Add to Cart
                            </button>
                        </li>
                        <li>
                            Product 3 - $30.00{' '}
                            <button onClick={() => handleAddToCart({ id: 3, name: 'Product 3', price: 30 })}>
                                Add to Cart
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

function handleAddToCart(item) {
    // setItems([...items, item]);
}

function handleRemoveFromCart(id) {
    // setItems(items.filter((item) => item.id !== id));
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
