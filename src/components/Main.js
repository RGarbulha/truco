import { useState, useEffect } from 'react';

const unshuffled = [
  { title: '4D', path: '/cards/4D.png', value: 1, suit: 'diamond' },
  { title: '5D', path: '/cards/5D.png', value: 2, suit: 'diamond' },
  { title: '6D', path: '/cards/6D.png', value: 3, suit: 'diamond' },
  { title: '7D', path: '/cards/7D.png', value: 4, suit: 'diamond' },
  { title: 'QD', path: '/cards/QD.png', value: 5, suit: 'diamond' },
  { title: 'JD', path: '/cards/JD.png', value: 6, suit: 'diamond' },
  { title: 'KD', path: '/cards/KD.png', value: 7, suit: 'diamond' },
  { title: 'AD', path: '/cards/AD.png', value: 8, suit: 'diamond' },
  { title: '2D', path: '/cards/2D.png', value: 9, suit: 'diamond' },
  { title: '3D', path: '/cards/3D.png', value: 10, suit: 'diamond' },
  { title: '4S', path: '/cards/4S.png', value: 1, suit: 'spade' },
  { title: '5S', path: '/cards/5S.png', value: 2, suit: 'spade' },
  { title: '6S', path: '/cards/6S.png', value: 3, suit: 'spade' },
  { title: '7S', path: '/cards/7S.png', value: 4, suit: 'spade' },
  { title: 'QS', path: '/cards/QS.png', value: 5, suit: 'spade' },
  { title: 'JS', path: '/cards/JS.png', value: 6, suit: 'spade' },
  { title: 'KS', path: '/cards/KS.png', value: 7, suit: 'spade' },
  { title: 'AS', path: '/cards/AS.png', value: 8, suit: 'spade' },
  { title: '2S', path: '/cards/2S.png', value: 9, suit: 'spade' },
  { title: '3S', path: '/cards/3S.png', value: 10, suit: 'spade' },
  { title: '4H', path: '/cards/4H.png', value: 1, suit: 'hearth' },
  { title: '5H', path: '/cards/5H.png', value: 2, suit: 'hearth' },
  { title: '6H', path: '/cards/6H.png', value: 3, suit: 'hearth' },
  { title: '7H', path: '/cards/7H.png', value: 4, suit: 'hearth' },
  { title: 'QH', path: '/cards/QH.png', value: 5, suit: 'hearth' },
  { title: 'JH', path: '/cards/JH.png', value: 6, suit: 'hearth' },
  { title: 'KH', path: '/cards/KH.png', value: 7, suit: 'hearth' },
  { title: 'AH', path: '/cards/AH.png', value: 8, suit: 'hearth' },
  { title: '2H', path: '/cards/2H.png', value: 9, suit: 'hearth' },
  { title: '3H', path: '/cards/3H.png', value: 10, suit: 'hearth' },
  { title: '4C', path: '/cards/4C.png', value: 1, suit: 'club' },
  { title: '5C', path: '/cards/5C.png', value: 2, suit: 'club' },
  { title: '6C', path: '/cards/6C.png', value: 3, suit: 'club' },
  { title: '7C', path: '/cards/7C.png', value: 4, suit: 'club' },
  { title: 'QC', path: '/cards/QC.png', value: 5, suit: 'club' },
  { title: 'JC', path: '/cards/JC.png', value: 6, suit: 'club' },
  { title: 'KC', path: '/cards/KC.png', value: 7, suit: 'club' },
  { title: 'AC', path: '/cards/AC.png', value: 8, suit: 'club' },
  { title: '2C', path: '/cards/2C.png', value: 9, suit: 'club' },
  { title: '3C', path: '/cards/3C.png', value: 10, suit: 'club' },
];

const Main = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Main</h1>
      <Hand player={'player'} />
      <Hand player={'competidor1'} />
      <Hand player={'competidor1'} />
      <Hand player={'partner'} />
    </div>
  );
};

const Hand = (props) => {
  const [hand, setHand] = useState([]);

  const shuffleCards = () => {
    let shuffled = unshuffled
      .map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value);
    for (let i = 0; i < 3; i++)
      if (unshuffled.length > 0)
        unshuffled.splice(unshuffled.indexOf(shuffled[i]), 1);
    setHand([shuffled[0] || [], shuffled[1] || [], shuffled[2] || []]);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  return <div></div>;
};

export default Main;
