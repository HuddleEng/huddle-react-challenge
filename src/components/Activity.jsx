import React, {useEffect, useState} from 'react';

import {ReactComponent as ArrowCircle} from '../assets/arrow-down-circle.svg';

import More from "../components/More";

import './Activity.scss';

const Activity = ({ uri }) => {
    const [activity, setActivity] = useState();

    useEffect(() => {
        (async () => {
            const res = await fetch(uri);
            const activityDetails = await res.json();
            setActivity(activityDetails);
        })();
    }, [uri]);

    if (!activity) {
        return null;
    }

    return (
        <ul className='activity'>
            {activity.map((activityItem) => {
                const isPositive = activityItem.amount > 0;

                return (
                    <li key={activityItem.id} className={isPositive ? 'income' : 'outgoing'}>
                        <ArrowCircle />
                        <span className='title'>{activityItem.title}</span>
                        <span className='amount'>£{Math.abs(activityItem.amount).toFixed(2)}</span>
                        <More />
                    </li>
                );
            })}
        </ul>
    );
};

export default Activity;