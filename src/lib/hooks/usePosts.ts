import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@api/axiosInstance';

const fetchPostById = async (id: number) => {
  console.log('Axios Base URL: ', axiosInstance.defaults.baseURL);
  const { data } = await axiosInstance.get(`/posts/${id}`);
  return data;
};

export const usePostById = (id: number) => {
  return useQuery(['post', id], () => fetchPostById(id));
};
