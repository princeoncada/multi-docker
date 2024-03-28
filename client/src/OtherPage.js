import React from 'react';
import { Link } from 'react-router-dom';

function OtherPage() {
    return (
        <div>
            <div>Other Page!</div>
            <Link to="/">Home</Link>
        </div>
    );
}

export default OtherPage;