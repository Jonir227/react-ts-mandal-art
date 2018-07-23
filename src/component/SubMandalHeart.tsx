import React, { Component } from 'react';
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

interface SubMandalHeartProps {
  mandalData: mandalComponent;
  section: string;
}

class SubMandalHeart extends Component<SubMandalHeartProps, mandalComponent> {
  state: mandalComponent = {
    name: '',
  };

  static getDerivedStateFromProps(nextProps: SubMandalHeartProps) {
    return {
      name: nextProps.mandalData.subMandal,
      subMandal: Array.apply(
        null,
        new Array(8).map(() => ({
          name: '',
        })),
      ),
    };
  }

  onSubMandalChange = (index: number) => (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const tmp: mandalComponent[] = [...this.state.subMandal];
    tmp[index].name = event.target.value as string;
    this.setState(prevState => ({
      ...prevState,
      subMandal: tmp,
    }));
  };

  render() {
    const { section } = this.props;
    return <MandalInput area={`${section}0`} />;
  }
}

export default SubMandalHeart;
