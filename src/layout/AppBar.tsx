import * as React from 'react';
import {AppBar, TitlePortal} from 'react-admin';
import {Box, useMediaQuery, Theme} from '@mui/material';

import Logo from './Logo';
import {AppBarToolbar} from './AppBarToolbar';
import Groups from "../groups/component/groupSelector";

const CustomAppBar = () => {
    const isLargeEnough = useMediaQuery<Theme>(theme =>
        theme.breakpoints.up('sm')
    );

    return (
        <AppBar color="secondary" toolbar={<AppBarToolbar/>}>
            <TitlePortal/>
            {isLargeEnough && <Logo/>}
            {isLargeEnough && <Box component="span" sx={{flex: 1}}/>}
            <Groups />
        </AppBar>
    );
};

export default CustomAppBar;
