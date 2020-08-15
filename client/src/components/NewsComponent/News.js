import React, { useState, useCallback } from "react";
import NewList from "./NewsList";
import Categories from "./Categories";

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const onSelect = useCallback(
    selectedCategory => setSelectedCategory(selectedCategory),
    []
  );

  return (
    <div>
      <Categories category={selectedCategory} onSelect={onSelect} />
      <NewList category={selectedCategory} />
    </div>
  );
};

export default News;
