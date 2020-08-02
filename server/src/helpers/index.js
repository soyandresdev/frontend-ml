export const createObjectItems = ({
  id,
  title,
  currency_id,
  price,
  thumbnail,
  condition,
  shipping,
  address,
}) => ({
  id,
  title,
  price: {
    currency: currency_id,
    amount: price,
    decimals: price,
  },
  picture: thumbnail,
  condition,
  free_shipping: shipping.free_shipping,
  address: address.state_name,
});

export const createObjectItem = ({
  id,
  title,
  currency_id,
  price,
  thumbnail,
  condition,
  shipping,
  sold_quantity,
  description,
}) => ({
  id,
  title,
  price: {
    currency: currency_id,
    amount: price,
    decimals: price,
  },
  picture: thumbnail,
  condition,
  free_shipping: shipping.free_shipping,
  sold_quantity,
  description,
});

const createResponse = (items, categories) => {
  const response = {
    author: {
      name: 'Andres',
      lastname: 'Hernandez Lozano',
    },
    items,
  };

  if (categories) {
    return {
      ...response,
      categories: categories
        ? categories.values[0].path_from_root.map((category) => category.name)
        : [],
    };
  }
  return response;
};

export default createResponse;
