import api from "./api";

export const getAllCarts = async () => {
  const res = await api.get(`/carts`);
  return res.data;
};

export const getCartsById = async (id) => {
  const res = await api.get(`/carts/${id}`);
  return res.data;
};
