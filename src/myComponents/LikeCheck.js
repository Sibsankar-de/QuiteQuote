import React from 'react'
import { useState } from 'react';
import { LoopContent } from './LoopContent';

export const LikeCheck = (props) => {

    

    return (
        <>
            <LoopContent feedProperty={props.feedProperty} mainDom={props.mainDom}/>
        </>
    )
}
