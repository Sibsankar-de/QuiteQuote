import React, { useState } from 'react';
import { InnerContent } from './InnerContent';
import { HashLink } from 'react-router-hash-link';


export const LoopContent = (props) => {
    return (
        <>
            {props.feedProperty.map((property) => {
                return <InnerContent property={property} key={property.sno}/>
            })}
        </>
    )

}
