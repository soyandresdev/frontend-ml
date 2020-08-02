import axios from 'axios';
import { useProductsDispatch } from '@Hooks/store/productsStoreContext';

export default function useProductAction({ search }) {
  const dispatch = useProductsDispatch();

  async function getProducts() {
    dispatch({ type: 'LOADING', loading: true });
    const { data } = await axios.get(
      `${process.env.REACT_APP_API}/api/items${search ? `?q=${search}` : ''}`
    );
    dispatch({ type: 'LOAD_DATA', data });
    dispatch({ type: 'LOADING', loading: false });
  }

  return { getProducts };
}
