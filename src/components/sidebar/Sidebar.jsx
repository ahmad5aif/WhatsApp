import React from 'react'
import SideHeader from './SideHeader';
import SearchBar from './Searchbar';
import { Box } from '@mui/material';
import Contacts from './Contacts';

function Sidebar() {
    return (
        <Box sx={{ height: '100vh', overflowY: "auto" }} >
            <SideHeader />
            <SearchBar />
            <Contacts />
        </Box >
    )
}

export default Sidebar

