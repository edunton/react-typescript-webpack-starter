import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

interface AppProps {
  name: string;
}

type ContainerProps = {
  padding?: string | 0;
  margin?: string | 0;
};

export const Container = styled.div<ContainerProps>`
  padding: ${props => ('padding' in props ? props.padding : '0')};
  margin: ${props => ('margin' in props ? props.margin : 0)};
`;

export default function App({ name }: AppProps) {
  const alertClick = () => {
    alert(`Hello ${name}!`);
  };

  return (
    <Container padding="1em">
      <Button onClick={alertClick} color="primary" variant="contained">
        Hello {name}!
      </Button>
    </Container>
  );
}
