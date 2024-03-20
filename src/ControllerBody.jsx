import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';

export default function ContollerBody() {
  const width = '400px';
  const height = '400px';
  const bodyColor = '#141820';
  const textColor = '#a4a8b0';

  const [blinkState, setBlinkState] = useState(true);
  useEffect(() => {
    const intervalId = setInterval(() => setBlinkState((before)=>!before), 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Box
        position='relative'
        width={width} height={height}
      >
        <Grid container
          height='100%' width='100%'
        >
          <Grid item xs={12} height='50%' />
          <Box
            width='35%' height='55%'
            backgroundColor={bodyColor}
            sx={{clipPath: 'polygon(0% 0%, 100% 0%, 80% 100%, 20% 100%)'}}
          ></Box>
          <Grid item xs></Grid>
          <Box
            width='35%' height='55%'
            backgroundColor={bodyColor}
            sx={{clipPath: 'polygon(0% 0%, 100% 0%, 80% 100%, 20% 100%)'}}
          ></Box>
        </Grid>

        <Box
          position='absolute' top='0px' left='0px'
          height='100%' width='100%'
          borderRadius='50%' backgroundColor={bodyColor}
          color={textColor} fontSize='30px'
          display='flex' justifyContent='center' alignItems='center'
          sx={{userSelect: 'none', cursor: 'pointer'}}
        >
          { blinkState ? 'Click to Connect' : '' }
        </Box>
      </Box>
    </>
  );
};
