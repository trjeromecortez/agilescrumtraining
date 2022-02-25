import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
export const Image = ({ title, largeImage, smallImage, info, bestTimeToTravel }) => {
  const [isGalleryVisible, setIsGalleryVisible] = useState(false);
  const toggleGallery = () => setIsGalleryVisible(!isGalleryVisible);
  return (
    <div className='portfolio-item'>
      <div className='hover-bg'>
        {' '}
        <div
          href={largeImage}
          title={title}
          data-lightbox-gallery='gallery1'
          onClick={toggleGallery}
        >
          <div className='hover-text'>
            <h4>{title}</h4>
          </div>
          <img
            src={smallImage}
            className='img-responsive'
            alt={title}
          />{' '}
        </div>{' '}
      </div>
      {isGalleryVisible &&
      <Dialog
        open={isGalleryVisible}
        fullWidth
        maxWidth="md"
        onClose={toggleGallery}
      >
        <DialogTitle id="alert-dialog-title" sx={{ fontSize: 24, textTransform: 'none', fontWeight: 'bold' }}>
          {title}
        </DialogTitle>
        <DialogContent>
          <ImageGallery 
            showPlayButton={false}
            showFullscreenButton={false}
            items={[{ original: largeImage, thumbnail: largeImage, originalHeight: 500}]}
            useBrowserFullscreen={false}
            showThumbnails={false}
          />
          {info && <DialogContentText sx={{fontSize: 16, marginTop: 2 }}>
            {info}

          <Typography variant="h4" sx={{ marginTop: 2 }} gutterBottom>Best Time To Travel</Typography>
          <Typography variant="body">{bestTimeToTravel}</Typography>
          </DialogContentText>}
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleGallery}>Exit</Button>
        </DialogActions>
      </Dialog>
      }
    </div>
  )
}