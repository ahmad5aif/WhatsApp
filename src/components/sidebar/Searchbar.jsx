import React from 'react'
import { Box, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
    return (
        <>
            <Box sx={{ height: "50px", borderBottom: "1px solid #f2f2f2", backgroundColor: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Box sx={{ position: "relative", borderRadius: "8px", backgroundColor: "#f0f2f5", width: "100%", margin: "0 12px", }}>
                    <Box sx={{ color: "#919191", position: "absolute", height: "100%", padding: "8px" }}>
                        <SearchIcon fontSize="small" />
                    </Box>
                    <InputBase placeholder="Search or start a new chat" sx={{ width: "100%", padding: "16px 16px 16px 50px", height: "18px", fontSize: "14px" }} />
                </Box>
            </Box>
        </>
    )
}

export default SearchBar