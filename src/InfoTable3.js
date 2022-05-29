import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudCircleTwoToneIcon from '@mui/icons-material/CloudCircleTwoTone';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Divider from '@mui/material/Divider';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '@mui/material/Button';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import ButtonBase from '@mui/material/ButtonBase';

// function generate(element) {
//   return [0, 1, 2].map((value) =>
//     React.cloneElement(element, {
//       key: value,
//     }),
//   );
// }

const Demo = styled('div')(({ theme }) => ({
    backgroundColor: "rgba(158,159,173,0.13)",
}));

export default function InfoTable1() {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
        <ListItem>
            <InsertPhotoIcon color="primary" sx={{ fontSize: 40, mr: 1 }} />
            <Typography
              component="h1"
              variant="subtitle1"
              color="inherit"
              noWrap
              sx={{ fontWeight: 'bold' }}
            >
              Recommandations
          </Typography>
            <FormControlLabel
                value="end"
                control={<Checkbox icon={<CheckCircleIcon />} checkedIcon={<CheckCircleIcon color="primary" />} />}
                label="Updated"
                labelPlacement="Updated"
                />
            </ListItem>
        <Typography
              component="subtitle2"
              noWrap
              sx={{ ml: 7, fontWeight: 'light', fontSize: 10, textAlign: 'left' }}
            >
              NAME
          </Typography>
          <Typography
              component="subtitle2"
              noWrap
              sx={{ ml: 20, fontWeight: 'light', fontSize: 10, textAlign: 'right' }}
            >
              SETTINGS
          </Typography>
        <Divider sx={{ my: 1 }} />
        <Demo sx= {{ mt: 1, ml: 1, mr: 1, height: 230, borderRadius: 5 }}>
        <List dense={dense}>
            {/* {generate( */}
                <ListItem sx={{ mt: -1, mb: -1 }}
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <MoreHorizIcon />
                    </IconButton>
                  }
                >
                  {/* <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar> */}
                  <ListItemText
                    primary="Add carbon sequestration filters to AC system"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>
               {/* )} */}
               <ListItem sx={{ mt: -1, mb: -1 }}
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <MoreHorizIcon />
                    </IconButton>
                  }
                >
                  {/* <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar> */}
                  <ListItemText
                    primary="Modify operating schedule"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>
            </List>
          </Demo>
            <Button variant="contained" color="primary" sx={{ mt: 2, ml: 16, borderRadius: 5 }} position="absolute">
            <ButtonBase href='/Output' fullWidth>
              See more
            </ButtonBase>
            </Button>
    </Box>
  );
}