import React from 'react'
import { Box, FormControl, RadioGroup, FormLabel, FormControlLabel, Radio } from '@mui/material'

type Props = {}

const MuiRadioButton = (props: Props) => {
    const [value, setvalue] = React.useState("")
    console.log(value);

    const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setvalue(e.target.value);
    }
    return (
        <div>
            <Box>
                <FormControl>
                    <FormLabel>
                        Years of experience
                    </FormLabel>
                    <RadioGroup name='job-experience-group' aria-labelledby='job-experienvce -group-label' value={value} onChange={handlechange}>
                        <FormControlLabel control={<Radio />} label='0-2' value='0-2' />
                        <FormControlLabel control={<Radio />} label='3-22' value='3-22' />
                    </RadioGroup>
                </FormControl>
            </Box>
        </div>
    )
}

export default MuiRadioButton