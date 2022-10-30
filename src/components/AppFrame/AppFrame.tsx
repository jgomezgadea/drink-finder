import './AppFrame.css';

import {AppBar, Grid, Toolbar, Typography} from '@material-ui/core';
import {LocalBar} from '@material-ui/icons';
import React, {FC} from 'react';

type Props = {
  children: React.ReactNode;
};

const AppFrame: FC<Props> = ({children}) => {
  return (
    <Grid container justifyContent="center">
      <AppBar className="appBar" position="static">
        <Toolbar variant="regular">
          <LocalBar fontSize="large" />
          <Typography color="inherit" variant="h4">
            &nbsp;Drink Finder
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid item lg={8} md={10} xs={11}>
        {children}
      </Grid>
    </Grid>
  );
};

export default AppFrame;
