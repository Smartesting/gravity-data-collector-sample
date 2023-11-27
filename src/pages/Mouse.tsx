import makeSamplePage from "./makeSamplePage";
enum DataTestIds {
    MouseEnter = 'Mouse.MouseEnter',
    MouseWheel = 'Mouse.MouseWheel'
}

    const Mouse = makeSamplePage(
    'Mouse events',
    ['mouseenter', 'mouseleave', 'wheel'],
    (eventTriggered) => (<>
        <div data-testid={DataTestIds.MouseEnter}
            onMouseEnter={() => eventTriggered('mouseenter')}
            onMouseLeave={() => eventTriggered('mouseleave')}
        >Come over and leave me</div>
        <div data-testid={DataTestIds.MouseWheel} onWheel={() => eventTriggered('wheel')}>Run the wheel here</div>
    </>)
)

export default Mouse
