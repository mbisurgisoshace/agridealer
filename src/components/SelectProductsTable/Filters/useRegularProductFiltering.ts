import { useEffect, useState } from "react";

import { RegularProduct } from "../../../../generated/prisma";
import { resetFilters, getDistinctProductsColumnValues } from "./utils";

export type RegularFilter = {
  product: string;
  type: string;
  description: string;
};

type Product = RegularProduct;

const initialFilters = {
  product: "",
  type: "",
  description: "",
};

export default function useRegularProductFiltering(products: Product[]) {
  const [filters, setFilters] = useState<RegularFilter>(initialFilters);

  const [filteringOptions, setFilteringOptions] = useState<
    Record<keyof RegularFilter, string[]>
  >({
    product: [],
    type: [],
    description: [],
  });

  useEffect(() => {
    setFilteringOptions({
      product: getDistinctProductsColumnValues(products, "product"),
      type: [],
      description: [],
    });
    setFilters(initialFilters);
  }, [products]);

  useEffect(() => {
    updateFilteringOptions(filters);
  }, [filters]);

  const onFilterValueChange = (key: keyof RegularFilter, value: string) => {
    setFilters((prevFilter) => {
      let resettedFilters = { ...prevFilter };

      if (key === "product")
        resettedFilters = resetFilters(resettedFilters, [
          "type",
          "description",
        ]);
      if (key === "type") {
        resettedFilters = resetFilters(resettedFilters, ["description"]);
      }

      return {
        ...resettedFilters,
        [key]: value,
      };
    });
  };

  const updateFilteringOptions = (filters: RegularFilter) => {
    if (filters.product) {
      setFilteringOptions({
        product: getDistinctProductsColumnValues(products, "product"),
        type: getDistinctProductsColumnValues(
          products.filter((product) => product.product === filters.product),
          "type"
        ),
        description: [],
      });
    }

    if (filters.product && filters.type) {
      const filteredProductsByProductAndType = products.filter(
        (product) =>
          product.product === filters.product && product.type === filters.type
      );

      setFilteringOptions({
        product: getDistinctProductsColumnValues(products, "product"),
        type: getDistinctProductsColumnValues(
          products.filter((product) => product.product === filters.product),
          "type"
        ),
        description: getDistinctProductsColumnValues(
          filteredProductsByProductAndType,
          "description"
        ),
      });
    }
  };

  const getSelectedProduct = () => {
    return products.find(
      (product) =>
        product.product === filters.product &&
        product.type === (filters.type === "-" ? null : filters.type) &&
        product.description ===
          (filters.description === "-" ? null : filters.description)
    );
  };

  return {
    filters,
    products,
    filteringOptions,
    onFilterValueChange,
    selectedProduct: getSelectedProduct(),
  };
}
