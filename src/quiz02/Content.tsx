import { useContext } from "react";
import MyContext from "../context/MyContext";

const Content = () => {
  const { products, step } = useContext(MyContext);

  let filteredProducts = products;

  if (step < 1 || step > 3) {
      filteredProducts = products;
  } else {
      filteredProducts = products.filter(product => product.step === step);
  }
    return (
        <div className='card'>
            <h1>Products:</h1>
            <ul>
                {filteredProducts.map(product => (
                    <li key={product.id}>
                        <strong>{product.name}</strong> - ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Content;