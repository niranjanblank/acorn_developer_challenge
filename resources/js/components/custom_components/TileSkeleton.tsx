import { Box, Card, CardContent, CardMedia, Grid, Skeleton, Typography } from '@mui/material';

const TileSkeleton = () => {
    return (
        <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
            <Card
                variant="outlined"
                sx={{
                    height: '100%',
                    backgroundColor: '#fff',
                }}
                className="rounded-md"
            >
                {/* Image wrapper with badge skeleton */}
                <Box sx={{ position: 'relative' }}>
                    {/* Badge skeleton */}
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 8,
                            left: 8,
                            width: 80,
                            height: 24,
                            borderRadius: '4px',
                        }}
                    >
                        <Skeleton variant="rounded" width={80} height={24} />
                    </Box>

                    {/* Image skeleton */}
                    <Skeleton variant="rectangular" height={140} width="100%" />
                </Box>

                <CardContent>
                    <Typography variant="h6" noWrap className="text-2xl font-bold">
                        <Skeleton width="80%" />
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        <Skeleton width="100%" />
                        <Skeleton width="90%" />
                        <Skeleton width="60%" />
                    </Typography>

                    <Box mt={1}>
                        <Skeleton variant="text" width="50%" height={20} />
                    </Box>

                    <Box display="flex" alignItems="center" gap={1} mt={1}>
                        <Skeleton variant="circular" width={16} height={16} />
                        <Skeleton width="60%" height={16} />
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default TileSkeleton;
