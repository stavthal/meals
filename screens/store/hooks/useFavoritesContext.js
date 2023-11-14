import { useContext } from "react";
import { FavoritesContext } from "../context/favorites-context";

export const useFavoritesContext = () => {
  const context = useContext(FavoritesContext);

  const { ids, addFavorite, removeFavorite } = context;

  return { ids, addFavorite, removeFavorite };
};
