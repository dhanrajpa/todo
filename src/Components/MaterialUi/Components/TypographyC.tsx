import React from 'react'
import { Typography, Button, Box } from '@mui/material';
import CustomButton from '../BLogic/CustomButton';
import { contexType, ListContext } from '../../ListContetx';

export const TypographyC = () => {
    // const [value, setvalue] = React.useState(false)

    // const btnClick = (value: boolean): void => {
    //     setvalue(!value);
    // }

    const useListContext: contexType = React.useContext(ListContext);

    const { value, btnClick } = useListContext

    return (
        <>
            <Box >
                <CustomButton btnClick={btnClick} value={value} label={"typography"} />
                <div style={{ display: value ? "block" : "none" }}>
                    <Typography variant="h3" align='justify'>justify If you wish to use the theme for a CSS property that is not supported natively by the system,
                        then you can use a function as the value, in which you can access the theme object.
                        The following demo shows how this works:</Typography>
                    <Typography variant="h1" align='left'>left TscConfig</Typography>
                    <Typography variant="h2" align='right'>right TscConfig</Typography>
                    <Typography variant="h4" align='inherit'>inherit TscConfig</Typography>
                    <Typography variant="h5" >TscConfig</Typography>
                    <Typography variant="h6" gutterBottom={true}>TscConfig</Typography>

                    {/* subtile */}
                    <Typography variant="subtitle1" >sub1</Typography>
                    <Typography variant="subtitle2" >sub2</Typography>
                </div>
            </Box>
        </>
    )
}

