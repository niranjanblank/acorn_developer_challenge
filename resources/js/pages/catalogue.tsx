
import { Box, Card, CardContent, CardMedia, CircularProgress, Typography } from '@mui/material';
import {Grid} from '@mui/material';
import axios from 'axios';
import LiveLearning from "@/components/custom_components/LiveLearning"

import { useEffect, useState } from 'react';
import Course from '@/components/custom_components/Course';
import TileSkeleton from '@/components/custom_components/TileSkeleton';
import UnknownContent from '@/components/custom_components/UnknownContent';

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
                    <Typography variant="h2"
                     sx={{
                        fontSize: {
                          xs: '1.8rem',  // ~28px for extra-small screens
                          sm: '2.4rem',  // ~38px for small screens
                          md: '3rem',    // ~48px for medium and up
                        },
                        fontWeight: 'bold',
                        textAlign: 'center',
                      }}
                    >Employee Catalogue UI</Typography>
                </Grid>
                {loading ? (
                    <>
                    {Array.from({ length: 6 }).map((_, i) => (
                      <TileSkeleton key={`skeleton-${i}`} />
                    ))}
                  </>
                    ) : (
                        <>
                        {items.data.map((item, index) => {
                          if (item.contentType === "Course") {
                            return <Course item={item} key={`content-${index}`} />;
                          } else if (item.contentType === "Live Learning") {
                            return <LiveLearning item={item} key={`content-${index}`} />;
                          } else {
                            return <UnknownContent item={item} key={`content-${index}`} />;
                          }
                        })}
                      </>
                    )}

            </Grid>
        </Box>
    );
};

export default Catalogue;
