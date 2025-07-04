export function resetFilters<T>(filters: T, keysToReset: (keyof T)[]): T {
  const newFilters = { ...filters };
  keysToReset.forEach((key) => {
    if (newFilters[key] !== undefined) {
      newFilters[key] = "" as any;
    }
  });
  return newFilters;
}

export function getDistinctProductsColumnValues<T>(
  products: T[],
  column: keyof T
): string[] {
  const values = new Set<string>();
  products.forEach((product) => {
    if (product[column]) {
      values.add(product[column].toString());
    } else {
      values.add("-");
    }
  });
  return Array.from(values);
}

export function getDistinctProductsColumnValuesByColumn<T>(
  products: T[],
  columns: Array<keyof T>
): Record<keyof T, string[]> {
  const result: Record<keyof T, string[]> = {} as Record<keyof T, string[]>;
  columns.forEach((column) => {
    result[column] = getDistinctProductsColumnValues(products, column);
  });
  return result;
}
