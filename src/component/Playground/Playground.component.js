import ContentWrapper from '../ContentWrapper';

import Heading from '../Heading';

import './Playground.style.scss';

const Playground = () => (
    <section className="Playground">
        <ContentWrapper className="Playground-Wrapper">
            <Heading type="h2" className="Playground-Heading">Give it a try</Heading>
            <iframe src="https://codesandbox.io/embed/plugjs-playground-y7z9y?fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.js&theme=dark"
                title="Mosaic playground"
                allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            />
        </ContentWrapper>
    </section>
);

export default Playground;
