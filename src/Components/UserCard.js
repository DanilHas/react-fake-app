import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { fetchUserList } from '../Store/userList-reducer';
import ViewProfileButton from './ViewProfileButton';

function CreateUserCard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserList());
  }, [dispatch]);

  const usersNameAndSurname = useSelector((state) =>
    state.userList.users.map((user) => {
      const userName = user.name;
      return userName;
    }));

  const Item = styled(Paper)(() =>
  ({
    border: '1px solid black',
    margin: '0 6.5px 13px',
    flex: '0 1 30%',
    display: 'flex',
    flexDirection: 'column',
  }));

  const TextOnUserCard = styled(Typography)(() =>
  ({
    textAlign: 'start',
    color: '#000000',
    font: '700 17px/23px "Open Sans"',
    padding: '14px 0 56px 17px',
  }));

  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        display: 'flex',
        flexWrap: 'wrap',
        paddingRight: '60px',
        paddingLeft: '60px',
      }}
    >
      {usersNameAndSurname.map((name) =>
      (
        <Item key={name}>
          <TextOnUserCard>{`${name}`}</TextOnUserCard>
          <ViewProfileButton />
        </Item>
      ))}
    </Box>
  );
}

export default CreateUserCard;
