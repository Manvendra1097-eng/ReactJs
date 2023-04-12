import React, { useState } from 'react';
import Spinner from '../components/Spinner';
import Product from '../components/Product';
import { toast } from 'react-hot-toast';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchProducts() {
    setLoading(true);
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      toast.error('Something went wrong! try later');
    }
    setLoading(false);
  }

  useState(() => {
    fetchProducts();
  }, []);

  return (
    <div className=" w-10/12 mx-auto">
      {loading ? (
        <div className="w-full h-screen flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <div>
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-8 gap-2">
            {products?.map((product) => (
              <div key={product.id}>
                <div>
                  <Product product={product} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
