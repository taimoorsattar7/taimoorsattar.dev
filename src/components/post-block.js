
import React from 'react';

import './_wrapper.scss'

const PostBlock = (props) => {
    return (<div class="wrapper wrapper--narrow">
        {props.title}
    </div>);
};

export default PostBlock;