import React, { useState, useContext, useEffect } from 'react'
import { Box, Button, TextField } from '@mui/material';
import { contexType, ListContext } from './ListContetx';

export const Input = () => {
    const useListContext: contexType = useContext(ListContext);
    const { note, addNote, listArray, setNote } = useListContext;
    const [flag, setflag] = React.useState(false)
    const handleChange = (event: any): void => {
        setflag(true)
        setNote(event.target.value)

    }
    useEffect(() => {
        console.log("input render");
    }, [])

    return (
        <>
            <Box sx={{ flexGrow: 1, maxWidth: 752, p: 1 }}>
                <TextField id="time" placeholder="Enter task" label="input_Note" size="small" sx={{ maxWidth: 600 }} fullWidth={true} value={note} type="string" variant="outlined" onChange={handleChange} />
                <Button variant="contained" sx={{ ml: 1 }}
                    disabled={!flag}
                    onClick={() => {
                        !!note && addNote(note, listArray);
                        setNote("");
                        setflag(false)
                    }}>Add</Button>
            </Box >
        </>
    )
}

