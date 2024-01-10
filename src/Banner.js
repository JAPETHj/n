import React from 'react'
import "./Banner.css"
import AddIcon from '@material-ui/icons/Add';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

function Banner() {
  return (
    <div className='banner'>
        <img className="banner__image" src="https://i0.wp.com/www.secondhalftravels.com/wp-content/uploads/2018/08/Dark-German-series-Netflix.jpg?resize=780%2C400&ssl=1" alt=""/>
        <h3>NETFLIX <small>ORIGINAL</small></h3>
        <h1>DARK</h1>
        <div className="button__div">
            <button className="button1">
                <PlayArrowIcon style={{fontSize: 10}}> 
                </PlayArrowIcon>
                Play
            </button>
            <button className="button2">
                <AddIcon style={{fontSize: 10}}></AddIcon>
                My List
            </button>
        </div>
        <div className="intro__container">
            <p className="intro">
            The first German production from the world's leading Internet TV Network is set in a present-day German town where the disappearance of two young children exposes the double lives and fractured relationships among four families. 
            </p>
        </div>
    </div>
  )
}

export default Banner