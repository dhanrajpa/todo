import React from 'react'
import { TypographyC } from '../Components/TypographyC'
import { MuiButton } from '../Components/MuiButton'
import { MuitextFields } from '../Components/MuitextFields'
import { MuiSelct } from '../Components/MuiSelct'
import MuiRadioButton from '../Components/MuiRadioButton'

type Props = {}

export const Test = ({ }: Props) => {
    return (
        <div>
            <TypographyC />
            <MuiButton />
            {/* <MuitextFields /> */}
            <MuiSelct />
            <MuiRadioButton />
        </div>
    )
}

