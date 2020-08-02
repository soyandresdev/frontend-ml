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
  pictures,
  condition,
  shipping,
  sold_quantity,
  description,
  category_id,
}) => ({
  id,
  title,
  price: {
    currency: currency_id,
    amount: price,
    decimals: price,
  },
  picture: pictures[0].url,
  condition,
  free_shipping: shipping.free_shipping,
  sold_quantity,
  description,
  category_id,
});

const createResponse = ({ data, categories, single = false }) => {
  let response = {
    author: {
      name: 'Andres',
      lastname: 'Hernandez Lozano',
    },
    items: data,
  };
  if (single) {
    const { items, ...rest } = response;
    response = { ...rest, item: data };
  }
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
