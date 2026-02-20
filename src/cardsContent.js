import { createContext, useState } from 'react';

export const CardsContext = createContext(null);

export const CardsProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [signal, setSignal] = useState('await');

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

  return (
    <CardsContext.Provider
      value={{ cards, addCard, deleteCard, signal, setSignal }}
    >
      {children}
    </CardsContext.Provider>
  );
};
