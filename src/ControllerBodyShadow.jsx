import { useSetAtom } from 'jotai';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';

import { QueueOpenAtom } from './DeviceManager';

export default function ContollerBodyShadow() {
  const bodyColor = '#141820';
  const textColor = '#a4a8b0';

  const setQueueOpen = useSetAtom(QueueOpenAtom);

  const [blinkState, setBlinkState] = useState(true);
  useEffect(() => {
    const intervalId = setInterval(() => setBlinkState((before)=>!before), 1000);
    return () => clearInterval(intervalId);
  }, []);

  const handleClick = () => {
    setQueueOpen(true);
  };

  return (
    <>
      <Grid container
        height='100%' width='100%'
      >
        <Grid item xs={12} height='50%' />
        <Box
          width='35%' height='55%'
          backgroundColor={bodyColor}
          borderRadius='40%'
          sx={{clipPath: 'polygon(0% 0%, 100% 0%, 80% 100%, 20% 100%)'}}
        ></Box>
        <Grid item xs></Grid>
        <Box
          width='35%' height='55%'
          backgroundColor={bodyColor}
          borderRadius='40%'
          sx={{clipPath: 'polygon(0% 0%, 100% 0%, 80% 100%, 20% 100%)'}}
        ></Box>
      </Grid>

      <Box
        position='absolute' top='0px' left='0px'
        height='100%' width='100%'
        borderRadius='50%' backgroundColor={bodyColor}
        color={textColor} fontSize='25px'
        display='flex' justifyContent='center' alignItems='center'
        sx={{userSelect: 'none', cursor: 'pointer'}}
        onClick={handleClick}
      >
        { blinkState ? 'Connect Me!' : '' }
      </Box>
    </>
  );
};
