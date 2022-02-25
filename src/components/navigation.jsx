export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            <img style={{ height: 30, width: 'auto' }} src={'/img/phflag.jpeg'} />
            Pilipinas!
          </a>{' '}
        </div>
        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#portfolio' className='page-scroll'>
                10 Beautiful Places
              </a>
            </li>
            <li>
              <a href='#features' className='page-scroll'>
                Top 3 Places
              </a>
            </li>
            {/* <li>
              <a href='#about' className='page-scroll'>
                Destinations
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                Services
              </a>
            </li> */}
            {/* <li>
              <a href='#testimonials' className='page-scroll'>
                Testimonials
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'>
                Team
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Contact
              </a>
            </li> */}
          </ul>
        </div>
      </div>
      <div className="travel-advisory">
        Amid the global pandemic, please be advised that there might be special protocols and travel restrictions in place for everyone's safety. 
        <a style={{ marginLeft: 8 }} target="_blank" href="https://philippines.travel/safetrip">Click here</a> to learn more.
      </div>
    </nav>
  )
}
