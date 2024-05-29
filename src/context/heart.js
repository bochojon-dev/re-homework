export const heart = (set) => {
  return {
    heart: JSON.parse(localStorage.getItem("wishlist")) || [],
    toggleHeart: (payload) =>
      set((state) => {
        let index = state.heart.findIndex((i) => i.id === payload.id);
        let newHeart = state.heart;
        if (index < 0) {
          newHeart = [...state.heart, payload];
        } else {
          newHeart = state.heart.filter((i) => i.id !== payload.id);
        }
        localStorage.setItem("wishlist", JSON.stringify(newHeart));
        return {
          heart: newHeart,
        };
      }),
  };
};
