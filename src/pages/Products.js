import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <h1>Products to page.</h1>
      <ul>
        <li>
          <Link to="/products/p1">A book</Link>
        </li>
        <li>
          <Link to="/products/p2">A carpet</Link>
        </li>
        <li>
          <Link to="/products/p3">Online Course</Link>
        </li>
        <li>
          <Link to="/products/p4">Laptop </Link>
        </li>
      </ul>
    </div>
  );
};
export default Products;
