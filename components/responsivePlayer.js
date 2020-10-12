import ReactPlayer from 'react-player'

const ResponsivePlayer = ({ data }) => {
  console.log('video:', data)
  return (
    <div className="full-wrapper">
      <ReactPlayer
        className="react-player"
        url={data}
        width="100%"
        height="100%"
        controls={true}
      />

      <style jsx>{`
        .full-wrapper {
          width: calc(100vw - 60px);
          max-width: 1250px;
          margin: 0 auto;
          padding: 0;
          height: 700px;
          max-height: calc(100vh - 160px);
          max-height {
          }
          @media (max-width: 991px) {
            width: calc(100vw - 80px);
          }
          @media (max-width: 767px) {
            width: calc(100vw - 48px);
          }
        }
        .player-wrapper {
          position: relative;
          padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */
        }
        .react-player {
          position: absolute;
          top: 0;
          left: 0;
        }
      `}</style>
    </div>
  )
}

export default ResponsivePlayer
