import React from 'react'
import './ImageCard.css'

export default function PostOverlay(props) {
  return (
    <div className="post-overlay">
      <p>
        <span className="overlay-btn btn-1">
          <i className="far fa-heart"></i>
          <span>
            {
              props.img.user.total_likes
            }
          </span>
        </span>
        <span className="overlay-btn btn-2">
          <i className="far fa-images"></i>
          <span>
            {
              props.img.user.total_photos
            }
          </span>
        </span>
      </p>
    </div>
  )
}