import React from 'react'
import '../../App.css'

const MovieListHeading = (props) => {
    return (
        <div className="col">
            <h1>{props.heading}</h1>
        </div>
    )
}

export default MovieListHeading;
