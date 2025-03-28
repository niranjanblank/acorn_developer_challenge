import { Box, Card, CardContent, CardMedia, CircularProgress, Typography } from '@mui/material';
import {Grid} from "@mui/material"
import { Book, SchoolIcon, TvIcon } from 'lucide-react';

const ContentType = ({item}:{item: any}) => {
    return (
        <Grid size={{ xs: 6, md: 4 }}>
        <Card
            variant="outlined"
            sx={{
                height: '100%',
                backgroundColor: item.type === 'live learning' ? '#f0f7ff' : '#fff',
                cursor: 'pointer',

            }}
            className='rounded-md'
            onClick={() => alert(`Clicked on ${item.title}`)}
        >
            {/* Image wrapper with badge */}
            <Box sx={{ position: 'relative' }}>
                {/* Badge */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 8,
                        left: 8,
                        backgroundColor: item.type === 'course' ? 'primary.main' : 'error.main', // 🎨 Different color
                        color: 'white',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        zIndex: 1,
                        width: 'fit-content', // ✅ Makes width wrap to content
                        textAlign: 'center',
                        whiteSpace: 'nowrap',
                        gap: "2px"
                    }}
                    className="flex items-center justify-center"
                >

                     <TvIcon/>{item.contentType?.toUpperCase()}
                </Box>

                {/* Image */}
                <CardMedia component="img" height="140" image={item.imageUrl || '/images/default_image.jpg'} alt={item.title}
                />
            </Box>

            <CardContent>
                <Typography variant="h6" noWrap>
                    {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {item.description?.slice(0, 100)}...
                </Typography>
                <Typography variant="caption" color="primary">
                    {item.type?.toUpperCase()}
                </Typography>
            </CardContent>
        </Card>
    </Grid>
     );
}

export default ContentType;
