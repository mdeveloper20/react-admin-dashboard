
import { AppBar, Badge, Box, IconButton, Toolbar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useProSidebar } from "react-pro-sidebar";

function AppHeader() {

    const { collapseSidebar, toggleSidebar, collapsed, broken } = useProSidebar();

    return <AppBar position="sticky" sx={styles.appBar}>
        <Toolbar >
            <IconButton onClick={() => broken ? toggleSidebar() : collapseSidebar()} color="secondary">
                <MenuIcon />
            </IconButton>
            <Box
                component={'img'}
                sx={styles.appLogo}
                src="/src/assets/sample-logo.png" />
            <Box
                sx={{ flexGrow: 1 }} />
            <IconButton title="Notifications" color="secondary">
                <Badge badgeContent={21} color="error">
                    <NotificationsIcon />
                </Badge>
            </IconButton>
            <IconButton title="Settings" color="secondary">
                <SettingsIcon />
            </IconButton>
            <IconButton title="Sign Out" color="secondary">
                <LogoutIcon />
            </IconButton>
        </Toolbar>
    </AppBar>;
}

/** @type {import("@mui/material").SxProps} */
const styles = {
    appBar: {
        bgcolor: 'neutral.main'
    },
    appLogo: {
        borderRadius: 2,
        width: 80,
        marginLeft: 2,
        cursor: 'pointer'
    }
}

export default AppHeader;