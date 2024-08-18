import React from 'react'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const Calander = ({ value, setValue }) => {
    const handleChange = (val) => {
        setValue(val)
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                value={value}
                onChange={(newValue) => { handleChange(newValue) }}
            />
        </LocalizationProvider>
    )
}

export default Calander
