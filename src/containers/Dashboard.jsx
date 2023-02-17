import { Avatar, Box, Card, CardContent, Divider, Typography } from "@mui/material";
import ColorText from "../components/ColorText";
import LatestVideoCard from "../components/LatestVideoCard";

function Dashboard() {
    return <Box>
        <Typography sx={styles.pageTitle} variant="h5">Channel Dashboard</Typography>
        <Box sx={styles.columnsContainer}>

            <LatestVideoCard sx={styles.item} />
            <Card sx={styles.item}>
                <CardContent>
                    <Typography variant="cardTitle">Latest post</Typography>
                    <Box sx={styles.postAuthorSection}>
                        <Avatar sx={styles.avatar} alt="Masoud" src="src/assets/avatars/masoud.jpeg" />
                        <Typography sx={styles.postMeta}>React with Masoud</Typography>
                        <Typography sx={styles.postMeta}>Jan 19, 2023</Typography>
                    </Box>
                    <Typography variant="body2">I asked chatGPT to tell me a joke about react js, he is not only smart but also funny :)) we are going to have a video about it tomorrow.</Typography>
                    <Divider sx={styles.divider} />
                    <Box sx={styles.postStats}>
                        <Typography variant="body2">Likes</Typography>
                        <Typography variant="body2">Comments</Typography>
                        <Typography variant="h6">12</Typography>
                        <Typography variant="h6">6</Typography>
                    </Box>

                    <Typography sx={styles.cardAction} variant="link">GO TO COMMUNITY TAB</Typography>
                </CardContent>
            </Card>

            <Card sx={styles.item}>
                <CardContent>
                    <Typography variant="cardTitle">Channel analytics</Typography>
                    <Typography variant="h7">Current Subscribers</Typography>
                    <Typography variant="h4">4,144</Typography>
                    <Typography variant="h7"><ColorText color='green.main'>+77</ColorText> <ColorText color='neutral.normal'>in last 28 days</ColorText></Typography>
                    <Divider sx={styles.divider} />
                    <Typography variant="h6">Summary</Typography>
                    <Typography variant="h8"><ColorText color='neutral.normal'>Last 28 days</ColorText></Typography>
                    <Box sx={styles.videoStatsRow}>
                        <Typography variant="h7">Views</Typography>
                        <Typography variant="h7">225</Typography>
                    </Box>
                    <Box sx={styles.videoStatsRow}>
                        <Typography variant="h7">Watch Time (hours)</Typography>
                        <Typography variant="h7">30</Typography>
                    </Box>
                    <Box sx={styles.videoStatsRow}>
                        <Typography variant="h7">Estimated Revenue</Typography>
                        <Typography variant="h7">$450.00</Typography>
                    </Box>
                    <Divider sx={styles.divider} />
                    <Typography variant="h6">Top videos</Typography>
                    <Typography variant="h8"><ColorText color='neutral.normal'>Last 48 hours . Views</ColorText></Typography>
                    <Box sx={styles.videoStatsRow}>
                        <Typography variant="h7">How to become a software developer in 2023</Typography>
                        <Typography variant="h7">450</Typography>
                    </Box>
                    <Box sx={styles.videoStatsRow}>
                        <Typography variant="h7">CSS GRID Tutorial: How to use Grids to make awesome user interface.</Typography>
                        <Typography variant="h7">287</Typography>
                    </Box>
                    <Box sx={styles.videoStatsRow}>
                        <Typography variant="h7">Call APIS in React Native: Practical Guide</Typography>
                        <Typography variant="h7">130</Typography>
                    </Box>

                    <Typography sx={styles.cardAction} variant="link">GO TO VIDEO ANALYTICS</Typography>
                </CardContent>
            </Card>
            <Card sx={styles.item}>
                <CardContent>
                    <Typography variant="cardTitle">Latest comments</Typography>
                    <ColorText color="neutral.normal"><Typography variant="h7">Channel comments I haven't responded to</Typography></ColorText>

                    <Box sx={styles.commentRow}>
                        <Avatar sx={styles.avatar} alt="Masoud" src="src/assets/avatars/masoud.jpeg" />
                        <Box>
                            <Box sx={styles.commentDetailsSection}>
                                <Typography sx={styles.postMeta}>React with Masoud</Typography>
                                <Typography sx={styles.postMeta}>2 weeks ago</Typography>
                            </Box>

                            <Typography sx={styles.commentText}>
                                Get tips from a successful creator on how to take a YouTube channel and turn it into a business that earns you money
                            </Typography>
                        </Box>
                        <Box
                            component="img"
                            sx={styles.videoThumbnail}
                            src="src/assets/thumbnail.png"
                        />

                    </Box>
                    <Divider sx={styles.divider} />
                    <Box sx={styles.commentRow}>
                        <Avatar sx={styles.avatar} alt="Masoud" src="src/assets/avatars/masoud.jpeg" />

                        <Box>
                            <Box sx={styles.commentDetailsSection}>
                                <Typography sx={styles.postMeta}>React with Masoud</Typography>
                                <Typography sx={styles.postMeta}>2 weeks ago</Typography>
                            </Box>

                            <Typography sx={styles.commentText}>
                                How can I deploy this?
                            </Typography>
                        </Box>
                        <Box
                            component="img"
                            sx={styles.videoThumbnail}
                            src="src/assets/thumbnail.png"
                        />

                    </Box>
                    <Divider sx={styles.divider} />
                    <Box sx={styles.commentRow}>
                        <Avatar sx={styles.avatar} alt="Masoud" src="src/assets/avatars/masoud.jpeg" />
                        <Box>
                            <Box sx={styles.commentDetailsSection}>
                                <Typography sx={styles.postMeta}>React with Masoud</Typography>
                                <Typography sx={styles.postMeta}>2 weeks ago</Typography>
                            </Box>

                            <Typography sx={styles.commentText}>
                                Thank you, was very helpful.
                            </Typography>
                        </Box>

                        <Box
                            component="img"
                            sx={styles.videoThumbnail}
                            src="src/assets/thumbnail.png"
                        />

                    </Box>


                    <Typography sx={styles.cardAction} variant="link">VIEW MORE</Typography>
                </CardContent>
            </Card>

            <Card sx={styles.item}>
                <CardContent sx={styles.ideaContent}>
                    <Box>
                        <Typography variant="cardTitle">Ideas for you</Typography>
                        <Typography sx={styles.ideaQuestion}>Ready to get business savvy?</Typography>
                        <Typography variant="h7">
                            Get tips from a successful creator on how to take a YouTube channel and turn it into a business that earns you money
                        </Typography>
                        <Typography sx={styles.cardAction} variant="link">GET STARTED NOW</Typography>
                    </Box>
                    <Box
                        component="img"
                        sx={styles.ideaImage}
                        src="src/assets/study-icon.png"
                    />
                </CardContent>
            </Card>

            <Card sx={styles.item}>
                <CardContent sx={styles.ideaContent}>
                    <Box>
                        <Typography variant="cardTitle">Creator Insider</Typography>
                        <Box
                            component="img"
                            sx={styles.insiderImage}
                            src="src/assets/thumbnail2.png"
                        />
                        <Typography sx={styles.ideaQuestion}>Ready to boost your skills using AI tools?</Typography>
                        <Typography variant="h7">
                            Get tips from a successful creator on how to take a YouTube channel and turn it into a business that earns you money
                        </Typography>
                        <Typography sx={styles.cardAction} variant="link">WATCH ON YOUTUBE</Typography>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    </Box>;
}

export default Dashboard;

/**
 * @type {import("@mui/material").SxProps}
 */

const styles = {
    pageTitle: {
        mb: 2
    },
    columnsContainer: {
        columns: '280px 3',
        maxWidth: 1400
    },
    item: {
        mb: 2,
    },
    divider: {
        my: 2
    },
    videoStatsRow: {
        display: 'flex',
        justifyContent: 'space-between',
        mt: 2,
        '&:hover': {
            color: 'primary.main',
            cursor: 'pointer'
        }
    },
    cardAction: {
        mt: 2
    },
    ideaContent: {
        display: 'flex',
    },
    ideaImage: {
        width: 80,
        alignSelf: 'center',
        ml: 5
    },
    ideaQuestion: {
        fontSize: '0.9rem',
        fontWeight: 500,
        my: 2
    },
    avatar: {
        width: '30px',
        height: 'auto',
        marginRight: 1
    },
    postStats: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridAutoRows: '25px'
    },
    postAuthorSection: {
        display: 'flex',
        alignItems: 'center',
        my: 3
    },
    postMeta: {
        mr: 1,
        fontSize: '0.8rem',
        color: 'neutral.normal'
    },
    videoThumbnail: {
        width: 80,
        ml: 'auto'
    },
    commentRow: {
        display: 'flex',
        alignItems: 'flex-start',
        mt: 2
    },
    commentDetailsSection: {
        display: 'flex',
        alignItems: 'center',
    },
    commentText: {
        fontSize: '0.8rem',
        mt: 0.5,
        mr: 2
    },
    insiderImage: {
        width: '100%',
        mt: 1
    }
}

