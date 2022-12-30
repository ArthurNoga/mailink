import {
    AppBar, Box,
     CssBaseline, Divider, Drawer,
   Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch,

} from "@mui/material";


import NightsStayOutlinedIcon from '@mui/icons-material/NightsStayOutlined';
import {NavLink, Outlet} from "react-router-dom";


const Layout = (props: any) => {


    let drawerWidth = 230;
    // @ts-ignore
    return (

        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar
                position="absolute"
                sx={{width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`}}
            >

            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <img alt="" src={require('../pictures/inkLogo.jpeg')}/>
                <Divider/>
                <List component="nav">
                    {['Domain', 'Ip', 'Faq'].map((text, index) => (
                        <Link to={text} component={NavLink} color={"inherit"} underline={"none"} key={index}
                              style={{textDecoration: "none", color: "inherit"}}>
                            <ListItem key={text} disablePadding>
                                <ListItemButton>

                                    <ListItemIcon>
                                    </ListItemIcon>
                                    <ListItemText primary={text}/>
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    ))}
                </List>
                <Divider/>
             <Switch sx={{ml:2}} onChange={props.toggleTheme} icon={<NightsStayOutlinedIcon color={"warning"}/>}/>

            </Drawer>
            <CssBaseline/>
            <Box component="main" sx={{
                height: '100%',
                width: '100%',
                m: 6,
                pl: 4
            }}>
                <Outlet/>
            </Box>
        </Box>

    )
}

export default Layout