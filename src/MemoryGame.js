import React, { Component } from 'react';
import Card from "./Card"
import './MemoryGame.css';

class MemoryGame extends Component {
  state = {
    cards: [
      { id: 0, showStatus: "hidden", guessed: false, backgroundcolor: "blue" },
      { id: 1, showStatus: "hidden", guessed: false, backgroundcolor: "blue" },
      { id: 2, showStatus: "hidden", guessed: false, backgroundcolor: "red" },
      { id: 3, showStatus: "hidden", guessed: false, backgroundcolor: "red" },
      { id: 4, showStatus: "hidden", guessed: false, backgroundcolor: "aliceblue" },
      { id: 5, showStatus: "hidden", guessed: false, backgroundcolor: "aliceblue" },
      { id: 6, showStatus: "hidden", guessed: false, backgroundcolor: "yellow" },
      { id: 7, showStatus: "hidden", guessed: false, backgroundcolor: "yellow" },
      { id: 8, showStatus: "hidden", guessed: false, backgroundcolor: "orange" },
      { id: 9, showStatus: "hidden", guessed: false, backgroundcolor: "orange" },
      { id: 10, showStatus: "hidden", guessed: false, backgroundcolor: "DarkOliveGreen" },
      { id: 11, showStatus: "hidden", guessed: false, backgroundcolor: "DarkOliveGreen" },
      { id: 12, showStatus: "hidden", guessed: false, backgroundcolor: "LemonChiffon" },
      { id: 13, showStatus: "hidden", guessed: false, backgroundcolor: "LemonChiffon" },
      { id: 14, showStatus: "hidden", guessed: false, backgroundcolor: "RosyBrown" },
      { id: 15, showStatus: "hidden", guessed: false, backgroundcolor: "RosyBrown" },
    ]
  }
  shuffle = array => {
    var copy = [], n = array.length, i;
    while (n) {
      i = Math.floor(Math.random() * n--);
      copy.push(array.splice(i, 1)[0]);
    }
    return copy;
  }

  checkIfGuessed = () => {
    const cards = this.state.cards.map(item => ({ ...item }))

    const filtered = this.state.cards.filter(card => card.showStatus === "shown" && card.guessed === false)
    const ids = filtered.map(card => card.id)

    if (filtered.length === 2 && filtered[0].backgroundcolor === filtered[1].backgroundcolor) {
      const updatedCards = cards.map(card => {
        return ids.includes(card.id) ? { ...card, guessed: true } : card
      })
      this.setState({
        cards: updatedCards
      })
    } else if (filtered.length === 2 && filtered[0].backgroundcolor !== filtered[1].backgroundcolor) {
      setTimeout(() => {
        const updatedCards = cards.map(card => {
          return ids.includes(card.id) ? { ...card, showStatus: "hidden" } : card
        })
        this.setState({
          cards: updatedCards
        })
      }, 700);
    }
  }

  handleClick = (id) => {
    //make a real copy of the array cards
    const cards = this.state.cards.map(item => ({ ...item }))
    //
    cards[id].showStatus === "shown" && cards[id].guessed === false
      ? cards[id].showStatus = "hidden"
      : cards[id].showStatus = "shown"

    this.setState({
      cards: cards
    }, () => this.checkIfGuessed())

  }
  componentDidMount() {
    const cards = this.state.cards.map(item => ({ ...item }))
    const shuffledCards = this.shuffle(cards)
    this.setState({
      cards: shuffledCards
    }, () => console.log(this.state.cards))
  }
  render() {

    let cards = this.state.cards.map(card => {
      let color = this.state.cards[card.id].showStatus === "hidden" ?
        "grey" : this.state.cards[card.id].backgroundcolor
      return (
        <Card
          key={card.id}
          color={color}
          onClick={() => this.handleClick(card.id)}
        />
      )
    })
    return (
      <div className="App">
        {cards}
      </div>
    );
  }
}

export default MemoryGame;
