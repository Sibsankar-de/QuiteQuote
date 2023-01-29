import React, { useState } from 'react';
import { InnerContent } from './InnerContent';


export const LoopContent = (props) => {
    return (
        <>
            {props.feedProperty.map((property) => {
                return <InnerContent property={property} key={property.sno} commentList={props.commentList} mainDom={props.mainDom} />
            })}
        </>
    )

}
