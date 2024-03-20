import Grid from '@mui/material/Grid';

import ContollerBody from './ControllerBody';

export default function MainPanel() {
  return (
    <>
      <Grid container
        justifyContent="center" alignItems="center"
      >
        <Grid item></Grid>
        <ContollerBody />
        <Grid item></Grid>
      </Grid>
    </>
  )
};
