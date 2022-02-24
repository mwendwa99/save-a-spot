import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function Links({ handleAction, component }) {

    switch (component) {
        case 'login':
            return (
                <Typography variant="body1">
                    Dont have an account? &nbsp;
                    <Link underline="hover" variant='body1' component="button" onClick={handleAction}>{component}</Link>
                </Typography>
            );
        case 'register':
            return (
                <Typography variant="body1">
                    Already have an account? &nbsp;
                    <Link underline="hover" variant='body1' component="button" onClick={handleAction}>{component}</Link>
                </Typography>
            );
        default:
            break;
    }
}