import React from 'react';
import *  as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from './components/Navbar';
import PlayersList from './components/PlayersList';
import Player from './components/Player';
// import ReactDOM from 'react-dom';

import App from './App';


test('render without crashing', async() => {
  rtl.render(<App />);
});
test('Does app render h1 navbar title?', async () => {
  const wrapper = rtl.render(<App />)
  

  const element = wrapper.getByText(`Trending Women's World Cup Players`)

  expect(element).toBeVisible()
})

describe('Navbar', () => {
  it('renders a h1', () => {
    const wrapper = rtl.render(
        <Navbar>
          <h1></h1>
        </Navbar>
      );
    const element = wrapper.queryByText(/Trending Women's World Cup Players/i);
    
    expect(element).toBeInTheDocument();
    expect(element).toBeTruthy();
    expect(element).toBeVisible();
  })
})





describe('it renders without crash:PlayersList', () => {
  it('renders', () => {
    const wrapper = rtl.render(
        <PlayersList>
          
        </PlayersList>
      );
    const element = wrapper.queryByTestId('players');
    
    expect(element).toBeInTheDocument();
    expect(element).toBeTruthy();
    expect(element).toBeVisible();
  })
})

const person ={
  name:"shiva",
  country:"US",
  searches:3
}
describe('it renders without crash:Player', () => {
  it('renders', () => {
    const wrapper = rtl.render(
        <Player person={person}>
          
        </Player>
      );
    const element = wrapper.queryByTestId('player');
    
    expect(element).toBeInTheDocument();
    expect(element).toBeTruthy();
    expect(element).toBeVisible();
  })
})
