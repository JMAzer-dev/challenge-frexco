import Cards from '../components/Cards';

const Home = ({ items, handleAddToCart }) => {
  return (
    <>
      <Cards items={items} handleAddToCart={handleAddToCart} />
    </>
  );
};

export default Home;
