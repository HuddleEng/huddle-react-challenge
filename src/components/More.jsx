import React from 'react';

import {ReactComponent as MoreIcon} from '../assets/more-vertical.svg';

import './More.scss';

const More = ({ onClick }) => <button type='button' className='more' onClick={onClick}><MoreIcon /></button>;

export default More;