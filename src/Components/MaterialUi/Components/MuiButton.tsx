import React from 'react'
import { Stack, Button, Box, Typography, ToggleButton, ToggleButtonGroup } from '@mui/material';
import CustomButton from '../BLogic/CustomButton';
import { contexType, ListContext } from '../../ListContetx';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatBold';
import FormatUnderlinedIcon from '@mui/icons-material/FormatBold';

export const MuiButton = () => {
    const useListContext: contexType = React.useContext(ListContext);
    const [formats, setformats] = React.useState<string[]>([])
    const { value, btnClick } = useListContext

    const handleFormatChange = (e: React.MouseEvent<HTMLElement>, updatedFormats: string[]) => {
        setformats(updatedFormats)
    }
    return (
        <>
            {/* <Button variat="outline">outline</Button> */}
            <Box >
                <CustomButton btnClick={btnClick} value={value} label={"Button"} />
                <div style={{ display: value ? "block" : "none" }}>
                    <Stack spacing={2} direction={"column"}>
                        <Button variant="text">text</Button>
                        <Button variant="contained">contain</Button>
                    </Stack>
                    <Stack>
                        <Typography variant="h3">Toggle button</Typography>
                        <ToggleButtonGroup aria-label='text formating' value={formats} onChange={handleFormatChange}>
                            <ToggleButton value="bold" aria-label="bold">
                                <FormatBoldIcon />
                            </ToggleButton>
                            <ToggleButton value="italic" aria-label="italic">
                                <FormatItalicIcon />
                            </ToggleButton>
                            <ToggleButton value="underlined" aria-label="underlined">
                                <FormatUnderlinedIcon />
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Stack>
                </div>
            </Box>
        </>
    )
}