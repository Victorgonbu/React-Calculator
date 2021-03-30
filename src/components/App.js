import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

function App (props) {
        return (
            <React.Fragment>
                <Display />
                <ButtonPanel />
            </React.Fragment>
        );
}

export default App;