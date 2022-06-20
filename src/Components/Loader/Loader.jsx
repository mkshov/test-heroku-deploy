import { CircularProgress, Stack } from '@mui/material';
import React from 'react';

const Loader = () => {
    return (
        <Stack display={'flex'} justifyContent={'center'} alignItems={'center'} height={'80vh'} sx={{ color: 'grey.500' }} spacing={2} direction="row">
            <CircularProgress color="success" />
        </Stack>
    );
};

export default Loader;