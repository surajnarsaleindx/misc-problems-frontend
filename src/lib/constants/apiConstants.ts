import axiosInstance from "@/api/axiosInstance";

export const fetchPostById = async (id: number) => {
  const { data } = await axiosInstance.get(`/posts/${id}`);
  return data;
};
