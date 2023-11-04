/* eslint-disable react/prop-types */


const Products = ({ items }) => {
    
  return (
    <div className="products">
      {items.map((item) => {
        return <Product key={item.id} item={item} />;
      })}
    </div>
  );
};

const Product = ({ item }) => {
  return <div className="product">{item}</div>;
};


// Baska bir component olduğunu dusun
const products = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Samsung" },
];

<Products items={products} />
