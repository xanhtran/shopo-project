import makeRequest from '@App/utils/makeRequest';

const getProducts = async () => {
  const products = await makeRequest({
    url: 'https://fakestoreapi.com/products',
    method: 'GET',
  });

  return products;
};

export { getProducts };
