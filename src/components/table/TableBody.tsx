import React from "react";
import { ProductType } from "../../types/Types";

type TableBodyType = {
  product: ProductType;
  index: number;
};

const TableBody: React.FC<TableBodyType> = ({ product, index }) => {
  return (
    <tr key={product.id} className={index % 2 === 0 ? "even-row" : "odd-row"}>
      <td>{product.id}</td>
      <td>{product.title}</td>
      <td>{product.description}</td>
      <td>{product.price}</td>
      <td>{product.discountPercentage}</td>
      <td>{product.rating}</td>
      <td>{product.stock}</td>
      <td>{product.brand}</td>
      <td>{product.category}</td>
      <td>{product.thumbnail}</td>
    </tr>
  );
};

export default TableBody;
