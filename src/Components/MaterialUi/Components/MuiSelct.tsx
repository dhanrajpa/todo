import React from 'react'
import { Box, TextField, MenuItem } from '@mui/material'

type Props = {}

export const MuiSelct = (props: Props) => {
    const [country, setcountry] = React.useState<string[]>([])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setcountry(typeof value === 'string' ? value.split(',') : value)
    }
    console.log(country);

    return (
        <div>
            <Box width={'250px'}>
                Multiselect
                <TextField label='select country' select value={country} fullWidth onChange={handleChange} SelectProps={{ multiple: true }}>
                    <MenuItem value='In'>IN</MenuItem>
                    <MenuItem value='Russia'>USA</MenuItem>
                    <MenuItem value='usa'>RSA</MenuItem>
                </TextField>
            </Box>
        </div >
    )
}