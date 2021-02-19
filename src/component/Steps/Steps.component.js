import ContentWrapper from '../ContentWrapper';
import Heading from '../Heading';

import stepsImg from './3-steps.svg';

import './Steps.style.scss';

const Steps = () => (
    <section className="Steps">
        <ContentWrapper className="Steps-Wrapper">
            <div className="Steps-Content">
                <p className="Steps-Sub">
                    Migrate to
                </p>
                <Heading type="h2" className="Steps-Heading">
                    Micro-frontend Architecture
                </Heading>
                <p className="Steps-Sub">
                    in 3 steps!
                </p>
            </div>
            <img className="Steps-Graphics" src={ stepsImg } alt="" />
        </ContentWrapper>
    </section>
);

export default Steps;
