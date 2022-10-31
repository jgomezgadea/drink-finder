import './AppFrame.css';

import {AppBar, Toolbar, Typography} from '@material-ui/core';
import {LocalBar} from '@material-ui/icons';
import React, {FC} from 'react';

type Props = {
  children: React.ReactNode;
};

const AppFrame: FC<Props> = ({children}) => {
  return (
    <>
      <AppBar className="appBar" position="static">
        <Toolbar variant="regular">
          <LocalBar color="secondary" fontSize="large" />
          <Typography color="inherit" variant="h4">
            &nbsp;Drink Finder
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="children">{children}</div>
    </>
  );
};

export default AppFrame;
