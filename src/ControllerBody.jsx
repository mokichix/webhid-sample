import { useAtomValue } from 'jotai';

import Box from '@mui/material/Box';

import ContollerBodyEnabled from './ControllerBodyEnabled';
import ContollerBodyShadow from './ControllerBodyShadow';

import { OpenStateAtom } from './DeviceManager';

export default function ContollerBody() {
  const width = '400px';
  const height = '400px';

  const openState = useAtomValue(OpenStateAtom);

  return (
    <>
      <Box
        position='relative'
        width={width} height={height}
      >

        <ContollerBodyShadow />

        <Box
          position='absolute' top='0px' left='0px'
          height='100%' width='100%'
          display={openState ? '' : 'none'}
        >
          <ContollerBodyEnabled />
        </Box>
      </Box>
    </>
  );
};
