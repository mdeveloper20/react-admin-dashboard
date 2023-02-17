import { Box, Card, CardContent, Typography } from "@mui/material";

function LatestVideoCard(props) {
    return (<Card {...props}>
        <CardContent>
            <Typography variant="cardTitle">Latest Video Performance</Typography>
            <Box sx={styles.latestVideoContainer} >
                <Box sx={styles.latestVideoThumbnail} component={'img'} src={'src/assets/thumbnail.png'} />
                <Typography sx={styles.latestVideoTitle}>ReactJs SearchBar in 5 Minutes!</Typography>
            </Box>
            <Typography variant="h7" sx={styles.latestVideoTimeLabel}>First 6 hours:</Typography>
            <Box sx={styles.latestVideoStatsRow}>
                <Typography variant="h7">Views</Typography>
                <Typography variant="h7">225</Typography>
            </Box>
            <Box sx={styles.latestVideoStatsRow}>
                <Typography variant="h7">Watch Time</Typography>
                <Typography variant="h7">30</Typography>
            </Box>
            <Box sx={styles.latestVideoStatsRow}>
                <Typography variant="h7">Likes</Typography>
                <Typography variant="h7">23</Typography>
            </Box>

            
            <Typography sx={styles.cardAction} variant="link">GO TO VIDEO ANALYTICS</Typography>
            <Typography sx={styles.cardAction} variant="link">SEE COMMENTS(12)</Typography>

        </CardContent>
    </Card>);
}

export default LatestVideoCard;


/**
 * @type {import("@mui/material").SxProps}
 */

const styles = {
    latestVideoContainer: {
        width: '100%',
        position: 'relative'
    },
    latestVideoThumbnail: {
        width: '100%',
        mt: 1,
        filter: "brightness(20%)",
        display: 'block'
    },
    latestVideoTitle: {
        position: 'absolute',
        bottom: 0,
        color: 'neutral.light',
        left: 0,
        right: 0,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '1rem',
        mb: 2
    },
    latestVideoTimeLabel: {
        color: 'neutral.normal',
        mt: 2
    },
    latestVideoStatsRow: {
        display: 'flex',
        justifyContent: 'space-between',
        mt: 2,
    },
    cardAction: {
        mt: 2
    }
}

