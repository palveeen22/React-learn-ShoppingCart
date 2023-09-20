import api from "./api";

export default class CartApi {
  static async getAllCarts() {
    return await api.get(`/carts`);
  }
  static async getCartById(id) {
    return await api.get(`/carts/${id}`);
  }
  static async deleteCartById(id) {
    return await api.delete(`/carts/${id}`);
  }
  static async updateCartById(id) {
    return await api.patch(`/carts/${id}`);
  }
}

// export const getAllCarts = async () => {
//   const res = await api.get(`/carts`);
//   return res.data;
// };
