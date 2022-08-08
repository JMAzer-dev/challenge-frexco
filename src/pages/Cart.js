import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems }) => {
  const getTotalItems = cartItems.reduce((a, item) => a + item.amount, 0);

  return (
    <>
      <section className="max-w-[1240px] flex justify-center">
        <div className="bg-white mt-28 sm:w-[50%] w-[80%] h-[200px] rounded-xl shadow-lg shadow-gray-700">
          <div className="p-8">
            <h1 className="text-3xl mb-4">Shopping Cart</h1>
            {getTotalItems ? (
              <div className="flex justify-between items-center">
                <p>Items in cart: {getTotalItems}</p>
                <button className="cursor-pointer px-4 py-2 rounded-xl bg-green-300 hover:bg-green-400 active:bg-green-500">
                  Checkout
                </button>
              </div>
            ) : (
              <p>
                Cart is empty,{' '}
                <Link to="/" className="text-blue-700">
                  Go Shopping
                </Link>
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
