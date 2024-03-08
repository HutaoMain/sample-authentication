import "./EditorHome.css";
import { useEffect, useState } from "react";
import { ProductType } from "../../types/Types";
import Navbar from "../navbar/Navbar";
import TableBody from "../table/TableBody";
import TableHead from "../table/TableHead";
import Search from "../search/Search";

const EditorHome = () => {
  const [productData, setProductData] = useState<ProductType[]>([]);
  const [sortBy, setSortBy] = useState<{
    key: keyof ProductType;
    order: "asc" | "desc";
  }>({ key: "id", order: "asc" });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const result = await res.json();
        setProductData(result.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [filter]);

  const handleSort = (key: keyof ProductType) => {
    if (sortBy.key === key) {
      const newOrder = sortBy.order === "asc" ? "desc" : "asc";
      setSortBy({ key, order: newOrder });
    } else {
      setSortBy({ key, order: "asc" });
    }
  };

  const filtered = productData.filter((product) =>
    Object.values(product)
      .join(" ")
      .toLowerCase()
      .includes(filter.toLowerCase())
  );

  const sorted = [...filtered].sort((a, b) => {
    const key = sortBy.key;

    if (sortBy.order === "asc") {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
    } else {
      if (a[key] > b[key]) return -1;
      if (a[key] < b[key]) return 1;
    }

    return 0;
  });

  return (
    <div className="home">
      <Navbar />
      <h2>This is Editor Home</h2>

      <Search filter={filter} setFilter={setFilter} />

      <table className="table">
        <TableHead handleSort={handleSort} sortBy={sortBy} />
        <tbody>
          {sorted.map((product, index) => (
            <TableBody key={product.id} product={product} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EditorHome;
