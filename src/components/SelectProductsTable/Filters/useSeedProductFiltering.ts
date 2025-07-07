import { useEffect, useState } from "react";

import {
  CropType,
  SeedProduct,
  BayerProduct,
} from "../../../../generated/prisma";
import { resetFilters, getDistinctProductsColumnValues } from "./utils";

export type SeedFilter = {
  trait: string;
  variety: string;
  seedSize: string;
  treatment: string;
  packaging: string;
};

type Product = BayerProduct | SeedProduct;

const initialFilters = {
  trait: "",
  variety: "",
  seedSize: "",
  treatment: "",
  packaging: "",
};

export default function useSeedProductFiltering(
  products: Product[],
  cropType: CropType | undefined = undefined
) {
  const [filters, setFilters] = useState<SeedFilter>(initialFilters);

  const [filteringOptions, setFilteringOptions] = useState<
    Record<keyof SeedFilter, string[]>
  >({
    trait: [],
    variety: [],
    seedSize: [],
    treatment: [],
    packaging: [],
  });

  useEffect(() => {
    setFilteringOptions({
      trait: getDistinctProductsColumnValues(
        products.filter((product) => product.cropType === cropType),
        "trait"
      ),
      variety: getDistinctProductsColumnValues(
        products.filter((product) => product.cropType === cropType),
        "variety"
      ),
      seedSize: [],
      treatment: [],
      packaging: [],
    });
    setFilters(initialFilters);
  }, [products, cropType]);

  useEffect(() => {
    updateFilteringOptions(filters);
  }, [filters]);

  const reset = () => {
    setFilteringOptions({
      trait: getDistinctProductsColumnValues(
        products.filter((product) => product.cropType === cropType),
        "trait"
      ),
      variety: getDistinctProductsColumnValues(
        products.filter((product) => product.cropType === cropType),
        "variety"
      ),
      seedSize: [],
      treatment: [],
      packaging: [],
    });
    setFilters(initialFilters);
  };

  const onFilterValueChange = (key: keyof SeedFilter, value: string) => {
    setFilters((prevFilter) => {
      let resettedFilters = { ...prevFilter };

      if (key === "trait")
        resettedFilters = resetFilters(resettedFilters, [
          "variety",
          "treatment",
          "seedSize",
          "packaging",
        ]);
      if (key === "variety") {
        resettedFilters = resetFilters(resettedFilters, [
          "treatment",
          "seedSize",
          "packaging",
        ]);

        if (!prevFilter.trait) {
          const filteredProductsByVariety = products.filter(
            (product) =>
              product.cropType === cropType && product.variety === value
          );

          if (filteredProductsByVariety.length > 0)
            resettedFilters.trait = filteredProductsByVariety[0].trait;
        }
      }

      if (key === "treatment")
        resettedFilters = resetFilters(resettedFilters, [
          "seedSize",
          "packaging",
        ]);
      if (key === "seedSize")
        resettedFilters = resetFilters(resettedFilters, ["packaging"]);

      return {
        ...resettedFilters,
        [key]: value,
      };
    });
  };

  const updateFilteringOptions = (filters: SeedFilter) => {
    const filteredProductsByCropType = products.filter(
      (product) => product.cropType === cropType
    );

    if (filters.trait) {
      setFilteringOptions({
        trait: getDistinctProductsColumnValues(
          filteredProductsByCropType,
          "trait"
        ),
        variety: getDistinctProductsColumnValues(
          filteredProductsByCropType.filter(
            (product) => product.trait === filters.trait
          ),
          "variety"
        ),
        treatment: [],
        seedSize: [],
        packaging: [],
      });
    }

    if (filters.trait && filters.variety) {
      const filteredProductsByCropTypeAndTrait =
        filteredProductsByCropType.filter(
          (product) => product.trait === filters.trait
        );

      setFilteringOptions({
        trait: getDistinctProductsColumnValues(
          filteredProductsByCropType,
          "trait"
        ),
        variety: getDistinctProductsColumnValues(
          filteredProductsByCropTypeAndTrait,
          "variety"
        ),
        treatment: getDistinctProductsColumnValues(
          filteredProductsByCropType.filter(
            (product) =>
              product.trait === filters.trait &&
              product.variety === filters.variety
          ),
          "treatment"
        ),
        seedSize: [],
        packaging: [],
      });
    }

    if (filters.trait && filters.variety && filters.treatment) {
      const filteredProductsByCropTypeAndTrait =
        filteredProductsByCropType.filter(
          (product) => product.trait === filters.trait
        );
      const filteredProductsByCropTypeTraitAndVariety =
        filteredProductsByCropType.filter(
          (product) =>
            product.trait === filters.trait &&
            product.variety === filters.variety
        );

      setFilteringOptions({
        trait: getDistinctProductsColumnValues(
          filteredProductsByCropType,
          "trait"
        ),
        variety: getDistinctProductsColumnValues(
          filteredProductsByCropTypeAndTrait,
          "variety"
        ),
        treatment: getDistinctProductsColumnValues(
          filteredProductsByCropTypeTraitAndVariety,
          "treatment"
        ),
        seedSize: getDistinctProductsColumnValues(
          filteredProductsByCropType.filter(
            (product) =>
              product.trait === filters.trait &&
              product.variety === filters.variety &&
              product.treatment === filters.treatment
          ),
          "seedSize"
        ),
        packaging: [],
      });
    }

    if (
      filters.trait &&
      filters.variety &&
      filters.treatment &&
      filters.seedSize
    ) {
      const filteredProductsByCropTypeAndTrait =
        filteredProductsByCropType.filter(
          (product) => product.trait === filters.trait
        );
      const filteredProductsByCropTypeTraitAndVariety =
        filteredProductsByCropType.filter(
          (product) =>
            product.trait === filters.trait &&
            product.variety === filters.variety
        );
      const filteredProductsByCropTypeTraitVarietyAndTreatment =
        filteredProductsByCropType.filter(
          (product) =>
            product.trait === filters.trait &&
            product.variety === filters.variety &&
            product.treatment === filters.treatment
        );

      setFilteringOptions({
        trait: getDistinctProductsColumnValues(
          filteredProductsByCropType,
          "trait"
        ),
        variety: getDistinctProductsColumnValues(
          filteredProductsByCropTypeAndTrait,
          "variety"
        ),
        treatment: getDistinctProductsColumnValues(
          filteredProductsByCropTypeTraitAndVariety,
          "treatment"
        ),
        seedSize: getDistinctProductsColumnValues(
          filteredProductsByCropTypeTraitVarietyAndTreatment,
          "seedSize"
        ),
        packaging: getDistinctProductsColumnValues(
          filteredProductsByCropType.filter(
            (product) =>
              product.trait === filters.trait &&
              product.variety === filters.variety &&
              product.treatment === filters.treatment &&
              product.seedSize === filters.seedSize
          ),
          "packaging"
        ),
      });
    }
  };

  const getSelectedProduct = () => {
    return products.find(
      (product) =>
        product.cropType === cropType &&
        product.trait === filters.trait &&
        product.variety === filters.variety &&
        product.treatment === filters.treatment &&
        product.seedSize === filters.seedSize &&
        product.packaging === filters.packaging
    );
  };

  return {
    reset,
    filters,
    products,
    filteringOptions,
    onFilterValueChange,
    selectedProduct: getSelectedProduct(),
  };
}
