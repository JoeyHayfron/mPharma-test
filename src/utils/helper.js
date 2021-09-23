import { normalize, schema } from "normalizr";

const prices = new schema.Entity("prices");

const products = new schema.Entity("products", {
  prices: [prices],
});

export const normalizedData = (originalData) => {
  return normalize(originalData, [products]);
};

export const getLatestPrice = (prices) => {
  let latestDate = Math.max.apply(
    null,
    prices.map(function (e) {
      return new Date(e.date);
    })
  );

  return prices.find(
    (item) => new Date(item.date) == new Date(latestDate).toString()
  );
};
