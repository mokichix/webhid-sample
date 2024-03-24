import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


const BODY = '#bbb';
const KAGE = '#aaa';
const HAI = '#888';
const KURO = '#666';
const BENI = '#c53d43';
const AO = '#1e50a2';
const KI = '#e6b422';
const MIDORI = '#028760';

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
            backgroundColor={KAGE}
            borderRadius='40%'
            sx={{clipPath: 'polygon(0% 0%, 100% 0%, 80% 100%, 20% 100%)'}}
          ></Box>
          <Grid item xs></Grid>
          <Box
            width='35%' height='55%'
            backgroundColor={KAGE}
            borderRadius='40%'
            sx={{clipPath: 'polygon(0% 0%, 100% 0%, 80% 100%, 20% 100%)'}}
          ></Box>
        </Grid>
        <Box
          position='absolute' top='0px' left='0px'
          height='100%' width='100%'
          borderRadius='50%' backgroundColor={BODY}
        >
        </Box>

        
        <Box
          className='maruconLogo'
          position='absolute' top='10%' left='40%'
          height='8%' width='20%'
        >
        </Box>
        <Box
          className='maruconSticArea'
          position='absolute' top='16%' left='5%'
          height='26%' width='26%'
          borderRadius='50%' backgroundColor={BODY}
        >
          <Box
            className='maruconStick'
            position='absolute' top='6%' left='6%'
            height='88%' width='88%'
            borderRadius='50%' backgroundColor={HAI}
          >
            <Box
              className='maruconStick'
              position='absolute' top='20%' left='20%'
              height='60%' width='60%'
              borderRadius='50%' backgroundColor={BODY}
            >
            </Box>
          </Box>
        </Box>
        <Box
          className='maruconCursor'
          position='absolute' top='45%' left='13%'
          height='24%' width='24%'
          borderRadius='50%' backgroundColor={KURO}
        >
          <Box
            className='maruconCursorVertical'
            position='absolute' top='5%' left='35%'
            height='90%' width='30%'
            backgroundColor={HAI}
          >
          </Box>
          <Box
            className='maruconCursorHorizontal'
            position='absolute' top='35%' left='5%'
            height='30%' width='90%'
            backgroundColor={HAI}
          >
          </Box>
        </Box>
        <Box
          className='maruconStart'
          position='absolute' top='65%' left='45%'
          height='10%' width='10%'
          borderRadius='50%' backgroundColor={BENI}
        >
        </Box>
        <Box
          className='maruconToggle'
          position='absolute' top='80%' left='43%'
          height='6%' width='14%'
          borderRadius='45%' backgroundColor={HAI}
        >
          <Box
            position='absolute' top='10%' left='5%'
            height='80%' width='60%'
            borderRadius='50%' backgroundColor={BODY}
          >
          </Box>
        </Box>
        <Box
          className='maruconButtonGroup'
          position='absolute' top='30%' left='58%'
          height='30%' width='40%'
        >
          <Box
            position='absolute' top='20%' left='0%'
            height='32%' width='24%'
            borderRadius='50%' backgroundColor={HAI}
          >
          </Box>
          <Box
            position='absolute' top='10%' left='30%'
            height='32%' width='24%'
            borderRadius='50%' backgroundColor={HAI}
          >
          </Box>
          <Box
            position='absolute' top='0%' left='60%'
            height='32%' width='24%'
            borderRadius='50%' backgroundColor={HAI}
          >
          </Box>
          <Box
            position='absolute' top='60%' left='8%'
            height='32%' width='24%'
            borderRadius='50%' backgroundColor={MIDORI}
          >
          </Box>
          <Box
            position='absolute' top='50%' left='38%'
            height='32%' width='24%'
            borderRadius='50%' backgroundColor={KI}
          >
          </Box>
          <Box
            position='absolute' top='40%' left='68%'
            height='32%' width='24%'
            borderRadius='50%' backgroundColor={AO}
          >
          </Box>
        </Box>
        <Box
          className='maruconLeftTrigger'
          position='absolute' top='0%' left='0%'
          height='16%' width='8%'
          borderRadius='30%' backgroundColor={BENI}
        >
        </Box>
        <Box
          className='maruconRightTrigger'
          position='absolute' top='0%' right='0%'
          height='16%' width='8%'
          borderRadius='30%' backgroundColor={BENI}
        >
        </Box>
      </Box>
    </>
  );
};
