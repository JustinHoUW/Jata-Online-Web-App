
import React, { useState } from 'react';

export const ShoppingCart = () => {
    const [items, setItems] = useState([
        { id: 1, title: "Straight-Fit Jeans", size: "6", quantity: 1, price: 89.99, image: "https://static.e-stradivarius.net/5/photos4/2024/V/0/1/p/7343/202/702/7343202702_2_4_1.jpg?t=1689848347398&impolicy=stradivarius-itxmediumhigh&imwidth=480&imformat=chrome&imdensity=2.625" },
        { id: 2, title: "Sunglasses", size: "One Size", quantity: 1, price: 59.99, image: "https://target.scene7.com/is/image/Target/GUEST_73be79b1-bf94-4ddd-a3af-9cabef4ab071?wid=1200&hei=1200&qlt=80&fmt=webp" },
        { id: 3, title: "Satin Dress", size: "M", quantity: 1, price: 129.99, image: "https://finesse.us/cdn/shop/products/3D-Dress-Front.jpg?v=1674914516&width=1426" },
        { id: 4, title: "Watch", size: "One Size", quantity: 1, price: 199.99, image: "https://larssonjennings.com/cdn/shop/products/Boyfriend_Mini_Elevate_Gold_Green_1296x.jpg?v=1697367250" }
    ]);

    const increaseQuantity = (itemId) => {
        const updatedItems = items.map(item => {
            if (item.id === itemId) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setItems(updatedItems);
    };

    const decreaseQuantity = (itemId) => {
        const updatedItems = items.map(item => {
            if (item.id === itemId && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        setItems(updatedItems);
    };

    const removeItem = (itemId) => {
        const updatedItems = items.filter(item => item.id !== itemId);
        setItems(updatedItems);
    };

    const totalPrice = items.reduce((acc, item) => acc + item.quantity * item.price, 0);

    return (
        <div>
            <h2>Your Shopping Cart</h2>
            <div className="alert alert-dismissible alert-warning">
                <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                <h4 className="alert-heading">Bag</h4>
                <p className="mb-0">Your shopping cart is currently empty.</p>
            </div>
            {items.map(item => (
                <div style={{ width: '500px' }} key={item.id}>
                    <div className="card mb-3">
                        <div className="card-header d-flex justify-content-end">
                            <button type="button" className="btn-close" aria-label="Close" onClick={() => removeItem(item.id)}></button>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                        </div>
                        <img src={item.image} className="card-img-top" alt={item.title} />
                        <div className="card-body">
                            <p className="card-text"> Size: {item.size}<br /> Quantity: {item.quantity}
                                <button className="btn btn-primary btn-sm me-2" onClick={() => increaseQuantity(item.id)}>+</button>
                                <button className="btn btn-primary btn-sm me-2" onClick={() => decreaseQuantity(item.id)}>-</button><br />
                                Price: ${item.price.toFixed(2)} <br /> Total: ${(item.quantity * item.price).toFixed(2)}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
            <div>Subtotal: ${totalPrice.toFixed(2)}</div>
            <button className="btn btn-success">Checkout</button>
        </div>
    );
};