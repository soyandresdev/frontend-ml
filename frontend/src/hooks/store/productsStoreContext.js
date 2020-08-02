import makeStore from '../makeStore';

const initalState = {
  data: {},
  product: {},
  loading: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_DATA':
      return {
        ...state,
        data: { ...action.data },
      };
    case 'LOAD_PRODUCT':
      return {
        ...state,
        product: { ...action.data },
      };
    case 'LOADING':
      return {
        ...state,
        loading: action.loading,
      };
    default:
      return state;
  }
};

const [ProductsProvider, useProductsStore, useProductsDispatch] = makeStore(reducer, initalState);

export { ProductsProvider, useProductsStore, useProductsDispatch };
