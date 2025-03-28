
import { Box, Card, CardContent, CardMedia, CircularProgress, Typography } from '@mui/material';
import {Grid} from '@mui/material';
import axios from 'axios';
import LiveLearning from "@/components/custom_components/LiveLearning"

import { useEffect, useState } from 'react';

const Catalogue = () => {
        const [items, setItems] = useState([]);
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            axios
                .get('/api/catalogue')
                .then((res) => {
                    setItems(res.data); // no flattening needed
                })
                .catch(console.error)
                .finally(() => setLoading(false));
        }, []);

        if (loading) {
            return (
                <Box display="flex" justifyContent="center" mt={8}>
                    <CircularProgress />
                </Box>
            );
        }


        console.log(items)

    return (

        <Box paddingX={{ xs: 6, md: 20, lg: 30 }} paddingY={10}>
             <Grid container spacing={2}>
                <Grid
                    size={{ xs: 12, md: 12 }}
                    className="rounded-2xl bg-teal-200 p-16"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    direction="column"
                >
                    <img src="/images/acorn_logo.png" alt="..." />
                    <Typography variant="h2">Employee Catalogue UI</Typography>
                </Grid>
                {items.data.map((item, index) => (
                        <LiveLearning item={item} key={`content-${index}`}/>
                    ))
                }
            </Grid>
        </Box>
    );
};

export default Catalogue;
