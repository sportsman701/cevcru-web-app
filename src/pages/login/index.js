import React from 'react'
import { Grid } from '@material-ui/core';

import Typography from 'components/typography';
import useWidth from 'hooks/useWidth'
import colors from 'helpers/colors';

import logo from 'resources/logo/logo.svg';
import logoHorizontalMobile from 'resources/logo/logo.svg';
import logoVerticalMobile from 'resources/logo/logo.svg';
import image1 from 'resources/registration/1.svg';
import image2 from 'resources/registration/2.svg';
import image3 from 'resources/registration/3.svg';
import image4 from 'resources/registration/4.svg';

const images = [image1, image2, image3, image4];

function Login(props) {
  const width = useWidth();
  
  return (
    <Grid container>
      <Grid>
        
      </Grid>
      <Grid>
        <img alt="" src={image1} />
        <Typography className='loginPictureTitle'>
          sdf
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Login;