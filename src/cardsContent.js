import { createContext, useState } from 'react';

export const CardsContext = createContext(null);

export const CardsProvider = ({ children }) => {
    const [open, setOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(localStorage.logged);
  const [cards, setCards] = useState([]);
  const [signal, setSignal] = useState({ state: 'await', cod: 0, city: null });
  const [favourites, setFavourites] = useState(() => {
    const stored = localStorage.getItem('favourite');
    return stored ? JSON.parse(stored) : [];
  });
  const addCard = newCard => {
    setCards(prev => {
      if (typeof newCard === 'string') {
        const exists = prev.find(card => card.city === newCard);

        if (exists) return prev;

        return [
          ...prev,
          {
            city: newCard,
            context: null,
          },
        ];
      }
      if (typeof newCard === 'object' && newCard !== null) {
        const cityName = newCard.name;

        return prev.map(card =>
          card.city === cityName ? { ...card, context: newCard } : card
        );
      }

      return prev;
    });
  };

  const deleteCard = cardCity => {
    setCards(cards.filter(card => card.city !== cardCity));
  };

  const favouriteCard = cardCity => {
  setFavourites(prev => {
    if (prev.some(card => card.city === cardCity)) return prev;

    const cardObject = cards.find(card => card.city === cardCity);

    if (!cardObject) return prev;

    const updated = [...prev, cardObject];
    localStorage.setItem('favourite', JSON.stringify(updated));

    return updated;
  });
};

const removeFavourite = cardCity => {
  setFavourites(prev => {
    const updated = prev.filter(card => card.city !== cardCity);
    localStorage.setItem('favourite', JSON.stringify(updated));
    return updated;
  });
};

  return (
    <CardsContext.Provider
      value={{ cards, addCard, deleteCard, signal, setSignal, favouriteCard, isLogged, setIsLogged, favourites, removeFavourite, open, setOpen }}
    >
      {children}
    </CardsContext.Provider>
  );
};
