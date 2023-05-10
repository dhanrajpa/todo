import React from 'react'
import { Button, Box } from '@mui/material';

type Props = {
    value: boolean
    btnClick: (value: boolean) => void
    label: string
}
const CustomButton = ({ btnClick, value, label }: Props) => {
    return (
        <>
            <Box>
                <Button onClick={() => {
                    btnClick(value)
                }} >{label}</Button>
            </Box>
        </>
    )
}

export default CustomButton