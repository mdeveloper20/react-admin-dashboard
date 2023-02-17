import { Box, Card, CardContent, Divider, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import TabPanel from "../components/TabPanel";
import ColorText from "../components/ColorText";
import SlowMotionVideoRoundedIcon from '@mui/icons-material/SlowMotionVideoRounded';
import MovieFilterRoundedIcon from '@mui/icons-material/MovieFilterRounded';

function Customization() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return <Box>
        <Typography sx={styles.pageTitle} variant="h5">Customization</Typography>
        <Box sx={styles.tabHeader}>
            <Tabs value={value} onChange={handleChange}>
                <Tab label="Layout" id='tab-0' />
                <Tab label="Branding" id='tab-1' />
                <Tab label="Basic Info" id='tab-2' />
            </Tabs>
        </Box>
        <TabPanel value={value} index={0} sx={{}}>
            <Typography variant="h6">Video spotlight</Typography>
            <ColorText color="neutral.normal">
                <Typography variant="h7">Add a video to the top of your channel homepage</Typography>
            </ColorText>
            <Box sx={styles.rowContainer}>
                <SlowMotionVideoRoundedIcon sx={styles.rowIcon} />
                <Box sx={styles.secondColumn}>
                    <Typography variant="h6">Channel trailer for people who haven't subscribed</Typography>
                    <ColorText color='neutral.normal'><Typography variant="h7">Share a preview of your channel shown with people who haven’t subscribed yet.</Typography></ColorText>
                    
                </Box>
                <Typography sx={styles.rowLink} variant="link">ADD</Typography>
            </Box>
            <Box sx={styles.rowContainer}>
                <MovieFilterRoundedIcon sx={styles.rowIcon} />
                <Box sx={styles.secondColumn}>
                    <Typography variant="h6">Featured video for returning subscribers</Typography>
                    <ColorText color='neutral.normal'><Typography variant="h7">Highlight a video for your subscribers to watch. This video won’t be shown again at the top of your page for subscribers who have watched it.</Typography></ColorText>
                </Box>
                <Typography sx={styles.rowLink} variant="link">ADD</Typography>
            </Box>


        </TabPanel>
        <TabPanel value={value} index={1}>
            <Typography>Nothing yet!</Typography>

        </TabPanel>
        <TabPanel value={value} index={2}>
            <Typography>Nothing yet!</Typography>
        </TabPanel>
        <TabPanel value={value} index={3}>
            <Typography>Nothing yet!</Typography>
        </TabPanel>
    </Box>;
}

export default Customization;

/**
 * @type {import("@mui/material").SxProps}
 */

const styles = {
    pageTitle: {
        mb: 2
    },
    tabHeader: {
        borderBottom: 1,
        borderColor: 'divider'
    },
    rowContainer: {
        width: '100%',
        maxWidth: 900,
        border: 1,
        borderColor: 'neutral.medium',
        borderRadius: 1,
        mt: 2,
        p: 2,
        display: 'flex',
        alignItems: 'flex-start'
    },
    rowIcon: {
        fontSize: 40,
        color: 'neutral.normal'
    },
    secondColumn: {
        ml: 1
    },
    rowLink: {
        ml: 'auto'
    }
}

