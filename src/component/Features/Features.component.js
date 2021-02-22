/* eslint-disable react/jsx-no-comment-textnodes */
import ContentWrapper from '../ContentWrapper';
import Image from '../Image';
import Heading from '../Heading';

import intImg from './integration.png';
import funImg from './func.png';
import realFunImg from './real-func.png';
import classImg from './class.png';
import plugsImg from './plugs.png';
import funPluImg from './func-plug.png';

import './Features.style.scss';
import List from '../List';

const Features = () => (
    <section className="Features">
        <ContentWrapper className="Features-Wrapper">
            <div className="Features-Images">
                <Image
                  src={ intImg }
                  className="Features-Image"
                />
            </div>
            <div className="Features-Content">
                <Heading
                  type="h2"
                  className="Features-Heading"
                >
                    Works with your current framework
                </Heading>
                <p>
                    Forget about lengthy migrations
                </p>
            </div>
        </ContentWrapper>
        <ContentWrapper className="Features-Wrapper">
            <div className="Features-Content">
                <Heading
                  type="h2"
                  className="Features-Heading"
                >
                    Requires a single comment
                </Heading>
                <p>
                    Add a <strong>/** @namespace **/</strong> to make plugin functionality work
                </p>
            </div>
            <div className="Features-Images">
                <Image
                  src={ funImg }
                  className="Features-Image"
                />
                <Image
                  src={ funPluImg }
                  className="Features-Image"
                />
            </div>
        </ContentWrapper>
        <ContentWrapper className="Features-Wrapper">
            <div className="Features-Images">
                <Image
                  src={ realFunImg }
                  className="Features-Image"
                />
                <Image
                  src={ classImg }
                  className="Features-Image"
                />
                <Image
                  src={ plugsImg }
                  className="Features-Image"
                />
            </div>
            <div className="Features-Content">
                <Heading
                  type="h2"
                  className="Features-Heading"
                >
                    Supports your programming style
                </Heading>
                <p>
                    Plugin system supporting:
                </p>
                <List>
                    <li>class instances</li>
                    <li>class constructors</li>
                    <li>class properties</li>
                    <li>class functions</li>
                    <li>static class methods</li>
                    <li>function declarations</li>
                    <li>arrow functions</li>
                </List>
            </div>
        </ContentWrapper>
    </section>
);

export default Features;
