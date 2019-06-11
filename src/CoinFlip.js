import React, { Component } from 'react';
import Coin from './Coin';
import { choice } from './helpers';
import './CoinFlip.css';

class CoinFlip extends Component {
    static defaultProps = {
        coins: [
            {side: 'heads', imgSrc: "https://www.fleur-de-coin.com/images/Thumbnails/KM200-km188_2002b-SIZE250x249.jpg"},
            {side: 'tails', imgSrc: "https://www.fleur-de-coin.com/images/Thumbnails/euroimages-ireland2euros-SIZE250x250.jpg"}
        ]
    };
    constructor(props) {
        super(props);
        this.state = {
            currFlip: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }
    flipCoin() {
        const newFlip = choice(this.props.coins);
        this.setState(st => {
            return {
                currFlip: newFlip,
                nFlips: st.nFlips + 1,
                nHeads: st.nHeads + (newFlip.side === 'heads' ? 1 : 0),
                nTails: st.nTails + (newFlip.side === 'tails' ? 1 : 0) 
            };
        });
    }
    handleClick(){
        this.flipCoin();
    }
    render(){
        return(
            <section className='CoinFlip'>
                <h1>Flip A Coin!</h1>
                {this.state.currFlip && <Coin info={this.state.currFlip} />}
                <button onClick={this.handleClick}>Flip</button>
                <p>Out of {this.state.nFlips} flips, there have been {this.state.nHeads} heads and {this.state.nTails} tails.</p>
            </section>
        )
    }
}

export default CoinFlip;