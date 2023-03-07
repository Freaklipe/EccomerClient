import { useState } from 'react';
import { Box, InputBase, Divider, Typography, IconButton } from '@mui/material';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';


export const Subscribe = () => {
  const [email, setEmail] = useState('');

  return (
    <Box className='subscribe-container'>
      <IconButton>
        <MarkEmailReadOutlinedIcon fontSize='large' />
      </IconButton>
      <Typography variant='h3'>Subscribe To Our Newsletter</Typography>
      <Typography>
        and receive $20 coupon for your first order when you checkout
      </Typography>
      <Box className='subscribe-box' >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder='Enter email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation='vertical' />
        <Typography sx={{ p: '10px', ':hover': { cursor: 'pointer' } }}>
          Subscribe
        </Typography>
      </Box>
    </Box>
  );
};