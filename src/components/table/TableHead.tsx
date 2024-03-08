// TableHeaderComponent.jsx
import React from "react";
import { ProductType } from "../../types/Types";

type TableHeadType = {
  handleSort: (key: keyof ProductType) => void;
  sortBy: { key: keyof ProductType; order: "asc" | "desc" };
};

const TableHead: React.FC<TableHeadType> = ({ handleSort, sortBy }) => {
  return (
    <thead>
      <tr>
        <th className="th" onClick={() => handleSort("id")}>
          ID
          {sortBy.key === "id" && (sortBy.order === "asc" ? "↑" : "↓")}
        </th>
        <th className="th" onClick={() => handleSort("title")}>
          Title
          {sortBy.key === "title" && (sortBy.order === "asc" ? "↑" : "↓")}
        </th>
        <th className="th" onClick={() => handleSort("description")}>
          Description
          {sortBy.key === "description" && (sortBy.order === "asc" ? "↑" : "↓")}
        </th>
        <th className="th" onClick={() => handleSort("price")}>
          Price
          {sortBy.key === "price" && (sortBy.order === "asc" ? "↑" : "↓")}
        </th>
        <th className="th" onClick={() => handleSort("discountPercentage")}>
          Discount Percentage
          {sortBy.key === "discountPercentage" &&
            (sortBy.order === "asc" ? "↑" : "↓")}
        </th>
        <th className="th" onClick={() => handleSort("rating")}>
          Rating
          {sortBy.key === "rating" && (sortBy.order === "asc" ? "↑" : "↓")}
        </th>
        <th className="th" onClick={() => handleSort("stock")}>
          Stock
          {sortBy.key === "stock" && (sortBy.order === "asc" ? "↑" : "↓")}
        </th>
        <th className="th" onClick={() => handleSort("brand")}>
          Brand
          {sortBy.key === "brand" && (sortBy.order === "asc" ? "↑" : "↓")}
        </th>
        <th className="th" onClick={() => handleSort("category")}>
          Category
          {sortBy.key === "category" && (sortBy.order === "asc" ? "↑" : "↓")}
        </th>
        <th className="th" onClick={() => handleSort("thumbnail")}>
          Thumbnail
          {sortBy.key === "thumbnail" && (sortBy.order === "asc" ? "↑" : "↓")}
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;
