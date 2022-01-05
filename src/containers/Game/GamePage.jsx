import React from "react";
import { connect } from "react-redux";

import { Board, Card } from "../../components";

import { selectCard } from "../../store/actions";

const GamePage = ({ cards, onCardClick }) => (
  <Board>
    {cards.map((card) => (
      <Card
        key={card.key}
        name={card.name}
        isActive={card.isActive}
        onClick={() => {
          onCardClick(card.key);
        }}
      />
    ))}
  </Board>
);

const mapStateToProps = (state) => ({
  cards: state.cards,
});

// const mapDispatchToProps = (dispatch) => ({
//   onCardClick: (card) => {
// o GamePage não deve saber como o redux funciona, por isso utiliza-se actions creators (selectCard)
//     // dispatch({ type: "SELECT_CARD", key: card.key });
//     dispatch(selectCard(card.key));
//   },
// });

const mapDispatchToProps = {
  onCardClick: selectCard,
};

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
