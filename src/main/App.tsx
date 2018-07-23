import React from 'react';
import styled, { FalseyValue } from 'styled-components';
import { MandalHeart } from '../component';
import { mandalComponent } from '../interface';

const MainContianer = styled.div`
  background: #000000;
  height: 90vh;
  width: 90vh;
  display: grid;
  grid-template-columns: repeat(9, 10vh);
  grid-template-rows: repeat(9, 10vh);
  grid-template-areas:
    'a1 a2 a3 b1 b2 b3 c1 c2 c3'
    'a4 a0 a5 b4 b0 b5 c4 c0 c5'
    'a6 a7 a8 b6 b7 b8 c6 c7 c8'
    'd1 d2 d3 z1 z2 z3 e1 e2 e3'
    'd4 d0 d5 z4 z0 z5 e4 e0 e5'
    'd6 d7 d8 z6 z7 z8 e6 e7 e8'
    'f1 f2 f3 g1 g2 g3 h1 h2 h3'
    'f4 f0 f5 g4 g0 g5 h4 h0 h5'
    'f6 f7 f8 g6 g7 g8 h6 h7 h8';
`;

interface appProps {
  // 현재 사용 안함
}

interface appState {
  readonly mandalArt: mandalComponent;
  readonly subMandalTrigger: boolean;
  readonly tinyMandalTrigger: boolean;
}

class App extends React.Component<appProps, appState> {
  state: appState = {
    mandalArt: { name: '' },
    subMandalTrigger: false,
    tinyMandalTrigger: false,
  };

  onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    this.setState(prevState => ({
      ...prevState,
      mandalArt: {
        ...prevState.mandalArt,
        name: value,
      },
    }));
  };

  onSubChange = (index: number) => (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const tmp: mandalComponent[] = [...this.state.mandalArt.subMandal];
    tmp[index].name = event.target.value as string;
    this.setState(prevState => ({
      ...prevState,
      mandalArt: {
        ...prevState.mandalArt,
        subMandal: tmp,
      },
    }));
  };

  triggerNewMandal = (): void => {
    this.setState(prevState => ({
      ...prevState,
      subMandalTrigger: true,
      mandalArt: {
        ...prevState.mandalArt,
        subMandal: Array.apply(null, new Array(8)).map(() => ({ name: '' })),
      },
    }));
  };

  subMandalRenderer = (): React.ReactElement<MandalHeart>[] => {
    return this.state.mandalArt.subMandal.map((mandal, index) => {
      return (
        <MandalHeart
          area={`z${index + 1}`}
          mandalArt={mandal}
          onChange={this.onSubChange(index)}
        />
      );
    });
  };

  render() {
    const { onChange, triggerNewMandal, subMandalRenderer } = this;
    const { mandalArt, subMandalTrigger, tinyMandalTrigger } = this.state;
    return (
      <MainContianer>
        <MandalHeart
          area="z0"
          mandalArt={mandalArt}
          onChange={onChange}
          triggerNewMandal={triggerNewMandal}
        />
        {subMandalTrigger && subMandalRenderer()}
      </MainContianer>
    );
  }
}

export default App;
