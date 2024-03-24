import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function ContollerBodyEnabled() {
  return (
    <>
      <Box
        position='relative'
        height='100%' width='100%'
      >
        <Grid container
          height='100%' width='100%'
        >
          <Grid item xs={12} height='50%' />
          <Box
            width='35%' height='55%'
            backgroundColor='#aaa'
            sx={{clipPath: 'polygon(0% 0%, 100% 0%, 80% 100%, 20% 100%)'}}
          ></Box>
          <Grid item xs></Grid>
          <Box
            width='35%' height='55%'
            backgroundColor='#aaa'
            sx={{clipPath: 'polygon(0% 0%, 100% 0%, 80% 100%, 20% 100%)'}}
          ></Box>
        </Grid>
        <Box
          position='absolute' top='0px' left='0px'
          height='100%' width='100%'
          borderRadius='50%' backgroundColor='#aaa'
        >
        </Box>
      </Box>
    </>
  );
};
