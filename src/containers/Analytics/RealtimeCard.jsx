import { Box, Card, CardContent, Typography, Divider } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';
import { Bar } from "react-chartjs-2";
import { realtimeChartData, realtimeChartOptions } from "./ChartConfigs";

function RealTimeCard() {
    return (<Card sx={styles.realtimeStatsCard}>
        <CardContent>
            <Box>
                <Typography variant="cardTitle">Realtime</Typography>
                <Box sx={styles.updateLiveRow}>
                    <CircleIcon sx={styles.dotIcon} />


                    <Typography sx={styles.hintText}>Updating Live</Typography>
                </Box>
                <Divider sx={styles.divider} />
                <Typography sx={styles.valueText}>4,144</Typography>
                <Typography sx={styles.hintText}>Subscribers</Typography>
                <Divider sx={styles.divider} />
                <Typography sx={styles.valueText}>1,786</Typography>
                <Typography sx={styles.hintText}>Views Last 48 hours</Typography>
                <Box sx={styles.realtimeChart}>
                <Bar options={realtimeChartOptions} data={realtimeChartData} />
                </Box>
                <Typography variant="link">See more</Typography>
            </Box>
        </CardContent>


    </Card>);
}

export default RealTimeCard;


/**
 * @type {import("@mui/material").SxProps}
 */

 const styles = {
    realtimeStatsCard: {
        mb: 2
    },
    updateLiveRow: {
        display: 'flex',
        alignItems: 'center'
    },
    dotIcon: {
        width: 10,
        color: 'primary.normal',
        mr: 1
    },
    divider: {
        my: 2
    },
    hintText: {
        fontSize: '0.8rem',
        color: 'neutral.normal'
    },
    valueText: {
        fontSize: '1.3rem',
        fontWeight: '400'
    }, 
    realtimeChart: {
        height: 70,
        mt: 4
    }
}