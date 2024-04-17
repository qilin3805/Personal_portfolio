import { useRef, useState } from 'react';
import { styled } from '@stitches/react';
import { useTrail, animated } from '@react-spring/web';
import { useNavigate } from 'react-router-dom';

const AppContainer = styled('div', {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
});

const Container = styled('div', {
  display: 'flex',
  gap: 10,
  marginBottom: 80,
});

const ButtonContainer = styled('div', {
  position: 'absolute',
  bottom: 20,
  display: 'flex',
  gap: 20,
});

const Button = styled('button', {
  padding: '10px 20px',
  fontSize: '16px',
  backgroundColor: '#6cab64',
  color: '#fafafa',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: '#578d54',
  },
});

const Box = styled('div', {
  position: 'relative',
  height: 50,
  width: 50,
});

const SharedStyles = {
  width: '100%',
  height: '100%',
  position: 'absolute',
  inset: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'Helvetica',
  fontWeight: 800,
  backfaceVisibility: 'hidden',
};

const FrontBox = styled(animated.div, {
  ...SharedStyles,
  backgroundColor: '#fafafa',
  border: 'solid 2px #1a1a1a',
});

const BackBox = styled(animated.div, {
  ...SharedStyles,
  backgroundColor: '#6cab64',
  border: 'solid 2px #6cab64',
  color: '#fafafa',
});

const items = ['B', 'I', 'O', 'S', 'E', 'N', 'S', 'O', 'R'];

function Biosensor() {
  const [trail, api] = useTrail(items.length, () => ({
    rotateX: 0,
  }));

  const isFlipped = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false); // Track whether the user has interacted
  const navigate = useNavigate();

  const handleClick = () => {
    setHasInteracted(true); // Set hasInteracted to true when the user clicks on the web
    if (isPlaying) return;

    if (isFlipped.current) {
      api.start({
        rotateX: 0,
      });
      isFlipped.current = false;
    } else {
      api.start({
        rotateX: 180,
      });
      isFlipped.current = true;
    }
  };

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      navigate('/BiosensorContent');
    }
  };

  const handleBack = () => {
    console.log('Back button clicked');
    navigate('/Project');
  };

  return (
    <AppContainer>
      <Container onClick={handleClick}>
        {trail.map(({ rotateX }, i) => (
          <Box key={i}>
            <FrontBox
              key={items[i]}
              style={{
                transform: rotateX.to(val => `perspective(600px) rotateX(${val}deg)`),
                transformStyle: 'preserve-3d',
              }}
            >
              {'?'}
            </FrontBox>
            <BackBox
              style={{
                transform: rotateX.to(val => `perspective(600px) rotateX(${180 - val}deg)`),
                transformStyle: 'preserve-3d',
              }}
            >
              {items[i]}
            </BackBox>
          </Box>
        ))}
      </Container>
      {hasInteracted && ( // Render the button only if the user has interacted
        <ButtonContainer>
          <Button onClick={handleBack}>Back</Button>
          <Button onClick={handlePlay}>Play</Button>
        </ButtonContainer>
      )}
    </AppContainer>
  );
}

export default Biosensor;
