import React, { useState, useContext, useEffect } from 'react'
import { Box, Button, TextField } from '@mui/material';
import { contexType, ListContext } from './ListContetx';

export const Input = () => {
    const useListContext: contexType = useContext(ListContext);
    const { note, addNote, listArray, setNote } = useListContext;
    const handleChange = (event: any): void => {
        setNote(event.target.value)

    }
    useEffect(() => {
        console.log("input render");

    }, [])

    return (
        <>
            <Box sx={{ flexGrow: 1, maxWidth: 752, p: 1 }}>
                <TextField id="time" placeholder="Enter task" size="small" sx={{ maxWidth: 600 }} fullWidth={true} value={note} type="string" variant="outlined" onChange={handleChange} />
                <Button variant="contained" sx={{ ml: 1 }}
                    onClick={() => {
                        !!note && addNote(note, listArray);
                        setNote("");

                    }}>Add</Button>
            </Box >
        </>

    )
}

