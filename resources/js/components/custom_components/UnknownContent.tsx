import { formatTime } from '@/lib/utils';
import { Box, Card, CardContent, CardMedia, CircularProgress, Typography } from '@mui/material';
import {Grid} from "@mui/material"
import { Book, Clock, FileQuestion, SchoolIcon, TvIcon } from 'lucide-react';

const UnknownContent = ({item}:{item: any}) => {

    return (
        <Grid size={{ xs: 12, sm:6, md: 4 }}>
        <Card
            variant="outlined"
            sx={{
                height: '100%',
                backgroundColor: '#fff',
                cursor: 'pointer',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                backgroundColor: '#ff00ff',
                transform: 'scale(1.02)',
                boxShadow: 4,
                },

            }}
        >
            {/* Image wrapper with badge */}
            <Box sx={{ position: 'relative' }}>
                {/* Badge */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 8,
                        left: 8,
                        backgroundColor: '#002200',
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

                     <FileQuestion/><p >UnknownContent- {item.contentType?.toUpperCase()}</p>
                </Box>

                {/* Image */}
                <CardMedia component="img" height="140" image={'/images/default_image.jpg'} alt={item.title}
                />
            </Box>

            <CardContent>
                    <Typography variant="h6" noWrap className='text-2xl font-bold'>
                        {item.fullname}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Unknown Content
                    </Typography>
                    <Typography variant="caption" color="primary">
                        {item.type?.toUpperCase()}
                    </Typography>
                </CardContent>
        </Card>
    </Grid>
     );
}

export default UnknownContent;
