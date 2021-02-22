import ContentWrapper from '../ContentWrapper';

import Heading from '../Heading';

import './Playground.style.scss';

const Playground = () => (
    <section className="Playground">
        <ContentWrapper className="Playground-Wrapper">
            <Heading type="h2" className="Playground-Heading">Give it a try</Heading>
        </ContentWrapper>
    </section>
);

export default Playground;
