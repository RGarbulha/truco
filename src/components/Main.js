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
  const [gamePoints, setGamePoints] = useState([0, 0]);
  const [matchPoints, setMatchPoints] = useState([0, 0]);
  const [matchValue, setMatchValue] = useState(1);
  const [roundPoints, setroundPoints] = useState([null, null, null]);
  const [roundIndex, setRoundIndex] = useState(1);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const [player1Hand, setPlayer1Hand] = useState([]);
  const [player2Hand, setPlayer2Hand] = useState([]);
  const [player3Hand, setPlayer3Hand] = useState([]);
  const [player4Hand, setPlayer4Hand] = useState([]);
  const [centerCard, setCenterCard] = useState(null);
  const [playerdCards, setPlayedCards] = useState([]);

  const getCards = (unshuffled) => {
    return unshuffled;
  };

  const shuffleCards = () => {
    let shuffled = null;
    if (unshuffled.length)
      shuffled = unshuffled
        .map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value);
    return shuffled;
  };

  const startGame = () => {
    setSelectedPlayer(Math.floor(Math.random() * 4) + 1);
    if (gamePoints[0] <= 3 && gamePoints[1] <= 3) startMatch();
  };

  const selectPlayer = (index) => {};

  const startMatch = () => {
    if (matchPoints[0] <= 12 && matchPoints[1] <= 12) startRound();
  };

  const endMatch = (winner, points) => {};

  const startRound = () => {
    setMatchValue(1);
    const cards = getCards(unshuffled);
    const shuffled = shuffleCards(cards);

    setPlayer1Hand([
      shuffled.splice(0, 1),
      shuffled.splice(0, 1),
      shuffled.splice(0, 1),
    ]);
    setPlayer2Hand([
      shuffled.splice(0, 1),
      shuffled.splice(0, 1),
      shuffled.splice(0, 1),
    ]);
    setPlayer3Hand([
      shuffled.splice(0, 1),
      shuffled.splice(0, 1),
      shuffled.splice(0, 1),
    ]);
    setPlayer4Hand([
      shuffled.splice(0, 1),
      shuffled.splice(0, 1),
      shuffled.splice(0, 1),
    ]);
    setCenterCard(shuffled.splice(0, 1));
  };

  const compareCards = () => {
    //return winner team
    return 1;
  };

  const endRound = (winner) => {
    if (roundIndex < 3) {
      setRoundIndex(roundIndex + 1);
      startRound();
    }
  };

  const endGame = () => {};

  useEffect(() => {
    startGame();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Main</h1>
      <Table>
        <Hand player={'player'} team={1} id={'p1'} cards={player1Hand} />
        <Hand player={'competidor1'} team={2} id={'p2'} cards={player2Hand} />
        <Hand player={'competidor2'} team={2} id={'p4'} cards={player4Hand} />
        <Hand player={'partner'} team={1} id={'p3'} cards={player3Hand} />
      </Table>
    </div>
  );
};

const Table = (props) => {
  const shuffleCards = () => {
    let shuffled = unshuffled
      .map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value);
  };

  props.children.map((child) => {
    // console.log(child);
  });

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="table" style={{ position: 'relative', height: '90vh' }}>
      {props.children.map((child) => child)}
    </div>
  );
};

const Hand = (props) => {
  const handStyle = {
    position: 'absolute',
    height: props.team === 1 ? '25%' : '50%',
    width: props.team === 1 ? '100%' : '25%',
    right: props.player === 'competidor1' ? 0 : 'none',
    backgroundColor: 'transparent', //background vermelho pra teste
    top: props.player === 'player' ? 'none' : props.team === 2 ? '25%' : 0,
    bottom: props.player === 'player' ? 0 : 'none',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  };

  const cardsDisplayStyle = {
    position: 'absolute',
    transform:
      props.player === 'competidor2'
        ? 'rotate(90deg)  translateY(50%)'
        : props.player === 'competidor1'
        ? 'rotate(-90deg)'
        : 'translate(-50%)',
    width: 'fit-content',
    height: 'fit-content',
    margin: 'auto',
    left:
      props.player === 'partner'
        ? '50%'
        : props.player === 'player'
        ? '50%'
        : 0,
    right: props.player === 'competidor1' ? -50 : 'none',
    display: 'flex',
    flexDirection: 'row',
    columnGap: 20,
    translate: '0.3s',
    justifyContent: 'center',
  };

  const cardStyle = { width: 100, positon: 'absolute' };

  const [cardStyleId, setCardStyleId] = useState([{}, {}, {}]);

  const cards = props.cards;
  const [hand, setHand] = useState([]);

  console.log(props.player);

  useEffect(() => {
    if (cards.length) setHand([cards[0][0], cards[1][0], cards[2][0]]);
  }, [props.cards]);

  if (hand.length)
    hand.map((card) => {
      console.log(card[0]);
    });

  // if (cards[0]) console.log('hand', hand);

  return (
    <div style={handStyle}>
      {/* <span style={{ position: 'absolute' }}>{props.player}</span> */}
      <div style={cardsDisplayStyle}>
        {hand.length !== 0
          ? hand.map((card, i) => (
              <div style={{ width: 100 }}>
                <img
                  style={{ ...cardStyle, ...cardStyleId[i] }}
                  src={card.path}
                  alt="card"
                />
                {hand && hand.title}
              </div>
            ))
          : ''}
      </div>
    </div>
  );
};

export default Main;
