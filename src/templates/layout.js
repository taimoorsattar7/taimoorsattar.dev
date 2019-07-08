import React from 'react';

const Layout = (props) => (
    <div className="row row--gutters">

        <div className="row__large-4">
            {props.children}
        </div>
        
    </div>
);

export default Layout;