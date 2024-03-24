import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import TitlePanel from './TitlePanel';
import MainPanel from './MainPanel';
import DeviceManager from './DeviceManager';

function App() {
  return (
    <>
      <Box width='100vw' height='100vh' textAlign='center'>
        <Grid container direction='column' spacing={0}
          width='100%' height='100%'
          justifyContent="center" alignItems="center"
        >
          <Grid item><TitlePanel /></Grid>
          <Grid item height='50px'></Grid>
          <Grid item><MainPanel /></Grid>
        </Grid>
      </Box>
      <DeviceManager />
    </>
  )
}

export default App
