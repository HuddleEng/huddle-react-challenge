import React from 'react';

import UserAvatar from "../components/UserAvatar";
import Activity from "../components/Activity";

import './Home.scss';

const Home = ({ account }) => {
    if (!account) {
        return null;
    }

    return (
        <div className='home-page'>
            <div className='summary'>
                <div className='welcome'>
                    <div className='left'>
                        <h1>Welcome, <span className='name'>{account.name}</span></h1>
                        <div className='balance'>
                            <h2>Current Account</h2>
                            <div className='value'>
                                £{parseFloat(account.balance).toFixed(2)}
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <UserAvatar avatarUri={account.avatarUri} />
                    </div>
                </div>
                <div className='overview'>
                    <h2>Overview</h2>
                    <div className='boxes'>
                    <div className='box'>
                        Earnt this week
                        <div className='value'>
                            £{parseFloat(account.earned).toFixed(2)}
                        </div>
                    </div>
                    <div className='box'>
                        Spent this week
                        <div className='value'>
                            £{parseFloat(account.spent).toFixed(2)}
                        </div>
                    </div>
                    <div className='box'>
                        Tasks this week
                        <div className='value'>
                            {account.tasks_completed | '0'} / {account.tasks_available | '0'}
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <Activity uri={account.links.activity} />
        </div>
    );
}

export default Home;