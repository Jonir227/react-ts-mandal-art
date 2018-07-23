import React, { Component, ChangeEvent, Fragment } from 'react';
import styled from 'styled-components';
import { mandalComponent } from '../interface';

interface MandalInputStyleProps {
  area: string;
}
const MandalInput = styled<MandalInputStyleProps, 'textarea'>('textarea')`
  grid-area: ${props => props.area};
  resize: none;
  border: solid 2px yellow;
  text-align: center;
`;

interface heartProps {
  mandalArt: mandalComponent;
  area: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  triggerNewMandal?: Function;
}

interface heartState {
  mandalTriggerd: boolean;
}

class MandalHeart extends Component<heartProps> {
  state = {
    mandalTriggerd: false,
  };
  enterEvent = (event: KeyboardEvent): void => {
    if (event.key !== 'Enter') return;
    event.preventDefault();
    this.props.triggerNewMandal();
  };

  changeEvent = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    event.target.addEventListener('keypress', this.enterEvent);
    this.props.onChange(event);
  };

  componentDidMount() {}

  componentWillUnmount() {}
  render() {
    const { mandalArt, area } = this.props;
    return (
      <MandalInput
        area={area}
        placeholder="작성~"
        value={mandalArt.name}
        onChange={this.changeEvent}
      />
    );
  }
}

export default MandalHeart;
