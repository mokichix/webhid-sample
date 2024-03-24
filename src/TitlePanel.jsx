import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import icon from './assets/geekyfab-icon.png'

export default function TitlePanel() {
  return (
    <>
      <Grid container direction='column'>
        <Box>
          <img
            src={icon}
            style={{width: '400px'}}
          ></img>
        </Box>
        <Typography variant='h2' fontFamily='美咲ゴシック'>
          まるこんふぃぐ
        </Typography>
        <Typography variant='h5' fontFamily='美咲ゴシック'>
          by HIGEEKY Lab.
        </Typography>
      </Grid>
    </>
  )
};
