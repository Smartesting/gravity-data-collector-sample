import {Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar} from "@mui/material";
import {samplePages} from "./routing";
import React from "react";
import {useNavigate} from "react-router-dom";

const Menu: React.FunctionComponent<{activeMenu?: string}> = ({activeMenu}) => {
    const navigate = useNavigate()
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: 250,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: 250, boxSizing: 'border-box' },
            }}
        >
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
                <List component="nav">
                    {samplePages.map(({path, title}) => (
                        <ListItem>
                            <ListItemButton onClick={() => navigate(path)}>
                                <ListItemText primary={title} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
            </Box>
        </Drawer>
    )
}

export default Menu
