export const cart = (set) => {
  return {
    cart: JSON.parse(localStorage.getItem("cart")) || [],
    addToCard: (payload) =>
      set((state) => {
        let index = state.cart.findIndex((i) => i.id === payload.id);
        let newCart = state.cart;
        if (index < 0) {
          newCart = [...state.cart, { ...payload, quantity: 1 }];
        }
        // else {
        //   newCart = state.cart.map((item, inx) =>
        //     inx === index ? { ...item, quantity: item.quantity + 1 } : item
        //   );
        // }
        localStorage.setItem("cart", JSON.stringify(newCart));
        return {
          cart: newCart,
        };
      }),
    removeFromCart: (payload) =>
      set((state) => {
        let newCart = state.cart;
        newCart = state.cart.filter((i) => i.id !== payload);
        localStorage.setItem("cart", JSON.stringify(newCart));
        return {
          cart: newCart,
        };
      }),
    incrementCart: (payload) =>
      set((state) => {
        let newCart = state.cart;
        let index = state.cart.findIndex((i) => i.id === payload.id);
        newCart = state.cart.map((item, inx) =>
          inx === index ? { ...item, quantity: item.quantity + 1 } : item
        );
        localStorage.setItem("cart", JSON.stringify(newCart));
        return {
          cart: newCart,
        };
      }),
    decrementCart: (payload) =>
      set((state) => {
        let newCart = state.cart;
        let index = state.cart.findIndex((i) => i.id === payload.id);
        newCart = state.cart.map((item, inx) =>
          inx === index ? { ...item, quantity: item.quantity - 1 } : item
        );
        localStorage.setItem("cart", JSON.stringify(newCart));
        return {
          cart: newCart,
        };
      }),
  };
};
