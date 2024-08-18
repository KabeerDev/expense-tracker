import React from 'react';
import { Helmet } from 'react-helmet';
import { char_length } from '../utils/helper';

const Meta = ({ title, pageURL, desc }) => {
    return (
        <>
            <Helmet>
                <link rel="canonical" href={pageURL} />
                <meta property="og:url" content={pageURL} />
                <meta property="og:title" content={char_length(title, 55)} />
                <meta property="og:description" content={char_length(desc, 145)} />
                <meta name="twitter:title" content={char_length(title, 65)} />
                <meta name="twitter:description" content={char_length(desc, 170)} />
                <meta name="description" content={desc || ''} />
                <title>{title}</title>
            </Helmet>
        </>
    )
};

export default Meta;