import { formatTime } from '@/lib/utils';
import { Box, Card, CardContent, CardMedia, Chip, Grid, Typography } from '@mui/material';
import { BookAIcon, BookIcon, TvIcon } from 'lucide-react';

const Course = ({ item }: { item: any }) => {
    return (
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card
                variant="outlined"
                sx={{
                    height: '100%',
                    backgroundColor: '#fff',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                        backgroundColor: '#91c1e3',
                        transform: 'scale(1.02)',
                        boxShadow: 4,
                    },
                }}
                className="rounded-md"
            >
                {/* Image wrapper with badge */}
                <Box sx={{ position: 'relative' }}>
                    {/* Badge */}
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 8,
                            left: 8,
                            backgroundColor: 'primary.main',
                            color: 'white',
                            padding: '4px 8px',
                            borderRadius: '4px',
                            fontSize: '0.75rem',
                            zIndex: 1,
                            width: 'fit-content',
                            textAlign: 'center',
                            whiteSpace: 'nowrap',
                            gap: 1,
                            display: 'flex',
                            alignItems: 'end',
                            justifyContent: 'center',
                        }}
                    >
                        <BookIcon/>
                        <p>{item.contentType?.toUpperCase()}</p>
                    </Box>

                    {/* Image */}
                    <CardMedia component="img" height="140" image={item.imageUrl || '/images/default_image.jpg'} alt={item.title} />
                </Box>
                <CardContent>
                    <Typography variant="h6" noWrap className="text-2xl font-bold">
                        {item.fullname}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {item.summaryText?.length > 100 ? `${item.summaryText.slice(0, 100)}...` : item.summaryText}
                    </Typography>
                    <Typography variant="caption" color="text.primary">
                        Duration: {item.duration || "Not Specified"}
                    </Typography>
                    <Typography variant="caption" color="primary" className="flex items-center gap-2 font-semibold">
                        <p className="font-bold">Course Scheduled:</p>
                        <p>{item.courseStart && formatTime(item.courseStart)}</p>
                    </Typography>
                    <>
                    <Typography variant="caption" color="text.primary">
                    Tags: {item.tags.length>0?"":"Not Available"}
                    </Typography>
                    <div className='flex gap-2 flex-wrap'>
                        {item.tags?.map((tag)=> (
                            <Chip label= {tag.name} />
                        ))}
                    </div>
                    </>

                </CardContent>
            </Card>
        </Grid>
    );
};

export default Course;
