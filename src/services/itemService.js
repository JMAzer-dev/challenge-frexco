import { api, requestConfig } from '../utils/config';

// Fetch api
const getAllItems = async () => {
  const config = requestConfig('GET');

  try {
    const res = await fetch(api, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

const itemService = {
  getAllItems,
};

export default itemService;
