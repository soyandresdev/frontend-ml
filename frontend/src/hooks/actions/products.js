import axios from 'axios';
import { useProductsDispatch } from '@Hooks/store/productsStoreContext';

export default function useProductAction() {
  const dispatch = useProductsDispatch();

  async function getProducts(search) {
    dispatch({ type: 'LOADING', loading: true });
    const { data } = await axios.get(
      `${process.env.REACT_APP_API}/api/items${search ? `?q=${search}` : ''}`
    );
    dispatch({ type: 'LOAD_DATA', data });
    dispatch({ type: 'LOADING', loading: false });
  }

  async function getProduct(id) {
    dispatch({ type: 'LOADING', loading: true });
    const { data } = await axios.get(`${process.env.REACT_APP_API}/api/items/${id}`);
    const { data: categories } = await axios.get(
      `${process.env.REACT_APP_API}/api/categories/${data?.item?.category_id}`
    );
    dispatch({ type: 'LOAD_PRODUCT', data: { ...data?.item, categories } });
    dispatch({ type: 'LOADING', loading: false });
  }

  return { getProducts, getProduct };
}
