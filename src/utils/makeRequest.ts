import { MakeRequestPropsType } from '@App/common/types';
import { API_URL } from '@App/config';
import axios from 'axios';

const axiosConfig = axios.create({
  baseURL: API_URL,
});

const makeRequest = async (props: MakeRequestPropsType) => {
  const { url, method, data } = props;

  try {
    const response = await axiosConfig.request({
      url,
      method,
      data,
    });

    if (response) return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default makeRequest;
