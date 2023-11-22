import makeSamplePage from "./makeSamplePage";

const Mouse = makeSamplePage(
    'Mouse events',
    ['mouseenter', 'mouseleave', 'wheel'],
    (eventTriggered) => (<>
        <div
            onMouseEnter={() => eventTriggered('mouseenter')}
            onMouseLeave={() => eventTriggered('mouseleave')}
        >Come over and leave me</div>
        <div onWheel={() => eventTriggered('wheel')}>Run the wheel here</div>
    </>)
)

export default Mouse
