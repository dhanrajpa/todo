import { TextField } from '@mui/material'
import React from 'react'

type Props = {}

export const MuitextFields = (props: Props) => {
    return (
        <div>
            <TextField InputProps={{ readOnly: true }} />

        </div>
    )
}