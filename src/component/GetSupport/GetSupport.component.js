import { useEffect } from 'react';
import ContentWrapper from '../ContentWrapper';
import Heading from '../Heading';
import List from '../List';
import SubscribeForm from '../SubscribeForm';

import './GetSupport.style.scss';

const GetSupport = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//embed.typeform.com/next/embed.js';
        document.head.appendChild(script);
    }, []);

    return (
        <section className="GetSupport" id="get-support">
            <ContentWrapper className="GetSupport-Wrapper">
                <Heading type="h2" className="GetSupport-Heading">
                    Looking for commercial support?
                </Heading>
                <div className="GetSupport-Section">
                    <div className="GetSupport-Columns">
                        <div>
                            <p>
                                On behalf of
                                <a href="https://scandiweb.com" target="_blank" rel="noreferrer">Scandiweb</a>
                                (an agency behind Mosaic), we are happy to offer a commercial support for your teams.
                            </p>
                            <p>
                                Contact us for a personal quote!
                            </p>
                        </div>
                        <div>
                            <List>
                                <li>Architecture consultations</li>
                                <li>Technology stack updates</li>
                                <li>On demand support</li>
                                <li>Education</li>
                            </List>
                        </div>
                    </div>
                </div>
                <div className="GetSupport-Section">
                    <div
                      data-tf-widget="f9NdCYPB"
                      data-tf-iframe-props="title=Mosaic support quote"
                      data-tf-medium="snippet"
                      style={ { width: '100%', height: '400px' }}
                    />
                </div>
            </ContentWrapper>
        </section>
    );
};

export default GetSupport;
