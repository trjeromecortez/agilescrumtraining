import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import ImageGallery from 'react-image-gallery';

export const Features = (props) => {
  const [infoDialogOpen, setInfoDialogOpen] = useState(false);
  const [info, setInfo] = useState(null);
  const [title, setTitle] = useState('');
  const toggleInfoDialog = () => setInfoDialogOpen(!infoDialogOpen);
  const onCardClick = (data) => {
    toggleInfoDialog();
    setTitle(data.title)
    setInfo(data)
  }
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2 style={{color: '#FFF'}}>Top 3 Destinations To Visit</h2>
        </div>
        <Grid container>
        {/* <img src="/img/bg-top3.png" className="top-3-bg" /> */}
          {props.data
            ? props.data.map((d, i) => (
              <Grid item xs={4}>
                <Card key={`${d.title}-${i}`} sx={{ maxWidth: 345 }} className="feature-card" onClick={() => onCardClick(d)}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={d.img}
                    alt="green iguana"
                  />
                  <CardContent className="feature-card-content">
                    <Typography gutterBottom variant="h4" component="div">
                      {d.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: 14 }}>
                      {d.text}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
              ))
            : 'Loading...'}
        </Grid>
      </div>
      <Dialog
        open={infoDialogOpen}
        fullWidth
        maxWidth="md"
        onClose={toggleInfoDialog}
      >
        <DialogTitle id="alert-dialog-title" sx={{ fontSize: 24, textTransform: 'none', fontWeight: 'bold' }}>
          {title}
        </DialogTitle>
        <DialogContent>
          <ImageGallery 
            showPlayButton={false}
            showFullscreenButton={false}
            items={info && info.galleryImages.map((img) => ({ original: img, thumbnail: img, originalHeight: 400}))}
            useBrowserFullscreen={false}
          />
          <Typography variant="h4" gutterBottom>Description</Typography>
          <Typography variant="body" sx={{ lineHeight: 1.75, marginBottom: 4}}>{info && info.text}</Typography>
          <Typography variant="h4" gutterBottom sx={{ marginTop: 2 }}>Itineraries/Activities</Typography>
          <ul>
            {info && info.activities.map((itinerary) => <li>- {itinerary}</li>)}
          </ul>
          <Typography variant="h4" sx={{ marginTop: 2 }} gutterBottom>Budget</Typography>
          <Typography variant="body">{info && info.budget}</Typography>
          <Typography variant="h4" sx={{ marginTop: 2 }} gutterBottom>Best Time To Travel</Typography>
          <Typography variant="body">{info && info.bestTimeToTravel}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleInfoDialog}>Exit</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
