import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons({ type, title, handleAction }) {
    return (
        <Stack spacing={2} direction="row" style={{ padding: '1rem' }}>
            <Button type={type} onClick={handleAction} variant="contained">{title}</Button>
        </Stack>
    );
}
