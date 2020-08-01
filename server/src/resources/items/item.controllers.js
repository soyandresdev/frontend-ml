import axios from 'axios';
import createResponse, { createObjectItems, createObjectItem } from '../../helpers/index';

export const getItems = async (req, res) => {
  try {
    const response = await axios.get(
      `${process.env.API_ML}/sites/MLA/search?q=${req.query.q}&limit=4`
    );
    const categories = response.data.filters.find((filter) => filter.id === 'category');
    const items = response.data.results.map((item) => createObjectItems(item));
    res.json(createResponse(items, categories));
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).json({ error: error.response.data.message });
    }
  }
};

export const getOne = async (req, res) => {
  try {
    const itemResponse = await axios.get(`${process.env.API_ML}/items/${req.params.id}`);
    const description = await axios.get(`${process.env.API_ML}/items/${req.params.id}/description`);
    const item = createObjectItem({
      ...itemResponse.data,
      description: description.data.plain_text,
    });
    res.json(createResponse(item));
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).json({ error: error.response.data.message });
    }
  }
};
