import makeSamplePage from "./makeSamplePage";

const Video = makeSamplePage(
    'Video',
    ['play', 'pause', 'seeked'],
    (eventTriggered)  => <>
        <video
            data-testid={"Video.Player"}
            onPlay={() => eventTriggered('play')}
            onPause={() => eventTriggered('pause')}
            onSeeked={() => eventTriggered('seeked')}
            width="618"
            height="347"
            src="https://www.gravity-testing.com/wp-content/uploads/2023/08/gravity-home-visuals.mp4"
            controls
        />
    </>
)

export default Video
