import axios from 'axios';

const getcategories = async (req, res) => {
  try {
    const response = await axios.get(`${process.env.API_ML}/categories/${req.params.id}`);
    const { path_from_root } = response.data;
    const categories = path_from_root.map((category) => category.name);
    res.json(categories);
  } catch (error) {
    console.log(error);
    if (error.response) {
      res.status(error.response.status).json({ error: error.response.data.message });
    }
  }
};

// eslint-disable-next-line import/prefer-default-export
export { getcategories };
