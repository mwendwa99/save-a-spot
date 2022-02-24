import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons({ title, handleAction, variant }) {
    return (
        <Stack spacing={2} direction="row" style={{ padding: '1rem' }}>
            <Button onClick={() => handleAction()} variant={variant}>{title}</Button>
        </Stack>
    );
}
