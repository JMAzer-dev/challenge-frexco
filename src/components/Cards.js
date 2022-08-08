const Cards = ({ handleAddToCart, items, price = 20 }) => {
  return (
    <section className="grid md:grid-cols-4 gap-5 lg:grid-cols-5 grid-cols-1  pt-24 mx-4">
      {items
        ? items.map((item) => (
            <div key={item.id} className="flex justify-center">
              <div className="w-[200px] h-[240px] border border-green-200 bg-white/80 rounded-xl flex flex-col justify-between text-black hover:bg-white/90 hover:text-black hover:font-medium transition duration-200">
                <div>
                  <h2 className="font-bold text-xl text-center mb-2">
                    {item.name}
                  </h2>
                  <div className="font-normal ml-1">
                    <p>Carbs: {item.nutritions.carbohydrates}g</p>
                    <p>Protein: {item.nutritions.protein}g</p>
                    <p>Fat: {item.nutritions.fat}g</p>
                    <p>Calories: {item.nutritions.calories}kcal</p>
                    <p>Sugar: {item.nutritions.sugar}g</p>
                    <p>Price: ${price} kg</p>
                  </div>
                </div>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="w-full text-center hover:bg-gray-300/60 active:bg-gray-400/60 rounded-xl p-1 cursor-pointer"
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))
        : 'Tivemos um problema técnico, por favor volte mais tarde.'}
    </section>
  );
};

export default Cards;
