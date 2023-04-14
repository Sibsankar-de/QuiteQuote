import React, { useEffect, useState } from 'react'
// import { LikeCheck } from './LikeCheck';
import { LoopContent } from './LoopContent';


export const Content = (props) => {
    let localLiikeList = JSON.parse(localStorage.getItem('likeList'))
    let x = 0;
    let contentLink;
    const contentMaker = (contents) => {
        const List = [];
        for (let i in contents) {
            for (let j of contents[i].feedElem) {
                contentLink = j.replace('/quitequote/static/media/', '');
                contentLink = contentLink.replace('.jpg', '');
                contentLink = contentLink.replace('.png', '');
                List.push(
                    {
                        sno: x,
                        userName: contents[i].userName,
                        dpImg: contents[i].dpElem,
                        link: contents[i].link,
                        contentLink: 'https://sibsankar-de.github.io/quitequote/#/home/#feedContent='+contentLink+'qqc',
                        feedImg: j,
                        isLiked: localLiikeList[x].isLiked
                    }
                );
                x = x + 1;
            }
        }
        return List;
    }

    const List = contentMaker(props.content);
    const numList = [];
    let max = (List.length - 1);

    for (let i = 0; i < max + 1; i++) {
        let no = Math.floor(Math.random() * (max - 0 + 1)) + 0;
        if (!numList.includes(no)) {
            numList.push(no);
        }
        else {
            i = i - 1;
        }
    }
    const [newList, setNewlist] = useState([]);
    useEffect(() => {
        const MyList = []
        for (let i of numList) {
            MyList.push(List[i]);
        }
        setNewlist(MyList);

    }, [props.content]);

    // useEffect(() => {
    //     localStorage.setItem('likeList', JSON.stringify(localLiikeList))
    // },[List])

    return (
        <LoopContent feedProperty={newList} mainDom={props.mainDom} />
    )
}
