import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import icon from './assets/logo.png'

export default function TitlePanel() {
  return (
    <>
      <Grid container direction='column'>
        <Box>
          <img
            src={icon}
            style={{width: '300px'}}
          ></img>
        </Box>
        <Typography variant='h4' fontFamily='美咲ゴシック'>
          まるこんふぃぐ
        </Typography>
        <Typography variant='h7' fontFamily='美咲ゴシック'>
          SEGA MULTI CONTROLLER CONFIG TOOL
        </Typography>
      </Grid>
    </>
  )
};
