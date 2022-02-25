import { Image } from "./image";

export const Gallery = (props) => {
  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Top 10 Beautiful Places</h2>
          <p>
            Explore the wonderful places in the Philippines
          </p>
        </div>
        <div className='row'>
          <div className='portfolio-items'>
            {props.data
              ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className={i !== props.data.length - 1 ? 'col-sm-4 col-md-4 col-lg-4' : 'col-sm-12 col-md-12 last-gallery-item'}>
                  <Image index={i} title={d.title} largeImage={d.largeImage} smallImage={d.smallImage} info={d.info} bestTimeToTravel={d.bestTimeToTravel} />
                </div>
              ))
              : 'Loading...'}
          </div>
        </div>
      </div>
    </div>
  )
}
