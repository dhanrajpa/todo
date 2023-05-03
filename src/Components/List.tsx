import * as React from 'react';
import { useContext } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import { contexType, ListContext, objType, } from './ListContetx';

const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));

const ListA = () => {
    const useListContext: contexType = useContext(ListContext);
    const { listArray, setlistArray, delNote, setfirst } = useListContext
    const [dense, setDense] = React.useState(false);


    React.useEffect(() => {
        console.log("list render");

    }, [])
    return (
        <>
            <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
                <Grid item xs={12} md={6}>
                    <Demo>
                        <List dense={dense}>
                            {!!listArray && listArray.map((key, value) => {
                                return (
                                    <ListItem
                                        secondaryAction={
                                            <IconButton edge="end" aria-label="delete"
                                                onClick={() => {
                                                    // handleDel(key.id, delNote, listArray)
                                                    delNote(key.id, listArray)
                                                    // setfirst(true)
                                                    // setfirst(false)

                                                }}>
                                                <DeleteIcon />
                                            </IconButton>
                                        }
                                        key={key.id}
                                    >
                                        <ListItemAvatar>
                                            <Avatar>
                                                <FolderIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={key.note}
                                        />
                                    </ListItem>
                                )
                            }

                            )}
                        </List>
                    </Demo>
                </Grid >
            </Box >
        </>
    )
}

export default ListA
