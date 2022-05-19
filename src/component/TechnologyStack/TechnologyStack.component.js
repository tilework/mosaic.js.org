import Heading from '../Heading';
import ContentWrapper from '../ContentWrapper';

import './TechnologyStack.style.scss';

import nextImg from './nextjs.svg';
import reactImg from './react.svg';
import webpackImg from './webpack.svg';

export function TechnologyStack() {
    return (
        <section className="TechnologyStack">
            <ContentWrapper>
                <Heading type="h2" className="TechnologyStack-SubHeading">
                    Supported technology stack
                </Heading>
                <div className="TechnologyStack-Images">
                <img src={ reactImg } alt="React logo" />
                    <img src={ nextImg } alt="Next.JS logo" />
                    <img src={ webpackImg } alt="Webpack logo" />
                </div>
            </ContentWrapper>
        </section>
    );
};