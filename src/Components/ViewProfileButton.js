import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const DarkButton = styled(Button)(({ theme }) =>
  ({
    color: theme.palette.getContrastText('#101010'),
    backgroundColor: '#101010',
    border: '1px solid #0D1E4B',
    margin: 'auto auto 15px 17px',
    '&:hover': {
      backgroundColor: '#101010',
    },
  }));

export default function ViewProfileButton() {
  return (
    <Link style={{ textDecoration: 'none' }} to="/UserProfile">
      <DarkButton variant="contained">
        {'View Profile'}
      </DarkButton>
    </Link>
  );
}
