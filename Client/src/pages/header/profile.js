import {React} from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

export default function Profile() {
  const auth = JSON.parse(sessionStorage.getItem('auth'));
  const ColorButton = styled(Button)(({ theme }) => ({
    backgroundColor:'none',
    fontSize: '14px',
    paddingLeft: '10px',
    paddingRight: '10px',
    color:grey[400],
    '&:hover': {
        color: grey[50],
        backgroundColor:'none'
    },
    marginRight:'10px',
    textTransform:'none'

    }));
  return (
    <div>
        <ColorButton id="basic-button" startIcon={'Hi'} >
            {auth? auth.name: '' }
        </ColorButton>
    </div>
  );
}
