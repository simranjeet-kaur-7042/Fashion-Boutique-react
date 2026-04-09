import React from "react";
import { useParams } from "react-router-dom";

const Category = () => {
  const { name } = useParams();

  return (
    <div>
      <h2>{name} Collection</h2>
    </div>
  );
};

export default Category;