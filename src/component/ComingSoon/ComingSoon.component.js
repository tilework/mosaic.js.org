import ContentWrapper from '../ContentWrapper';

import Heading from '../Heading';

import nextImg from './nextjs.svg';
import reactImg from './react.svg';
import gatsbyImg from './gatsby.svg';
import webpackImg from './webpack.svg';

import './ComingSoon.style.scss';
import List from '../List';
import SubscribeForm from '../SubscribeForm';

const ComingSoon = () => (
    <section className="ComingSoon">
        <ContentWrapper className="ComingSoon-Wrapper">
            <Heading type="h1" className="ComingSoon-Heading">Coming Soon</Heading>
            <div className="ComingSoon-Section">
                <Heading type="h2" className="ComingSoon-SubHeading">Marketplace</Heading>
                <div className="ComingSoon-Columns">
                    <div>
                        <p>A place to find a plug-and-play extensions matching your needs.</p>
                        <p>Monetize your work by sharing code with the community.</p>
                    </div>
                    <div>
                        <List>
                            <li>Themes</li>
                            <li>Service integrations</li>
                            <li>UI kits</li>
                            <li>And more!</li>
                        </List>
                    </div>
                </div>
            </div>
            <div className="ComingSoon-Section">
                <Heading type="h2" className="ComingSoon-SubHeading">Technology Stack</Heading>
                <div className="ComingSoon-Images">
                    <img src={ reactImg } alt="React logo" />
                    <img src={ nextImg } alt="Next.JS logo" />
                    <img src={ gatsbyImg } alt="Next.JS logo" />
                    <img src={ webpackImg } alt="Webpack logo" />
                </div>
            </div>
            <div className="ComingSoon-Section">
                <Heading type="h2" className="ComingSoon-SubHeading">Stay tuned</Heading>
                <SubscribeForm />
            </div>
        </ContentWrapper>
    </section>
);

export default ComingSoon;
