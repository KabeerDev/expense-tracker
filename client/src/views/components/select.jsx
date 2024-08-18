import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectInp = ({ filter, setFilter }) => {

    const handleChange = (event) => {
        setFilter(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Filter</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={filter}
                    label="filter"
                    onChange={handleChange}
                >
                    <MenuItem value={"date"}>Date</MenuItem>
                    <MenuItem value={"month"}>Month</MenuItem>
                    <MenuItem value={"year"}>Year</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}

export default SelectInp;