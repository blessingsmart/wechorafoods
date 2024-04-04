import React from 'react'
import { Splide } from '@splidejs/splide';
import { Video } from '@splidejs/splide-extension-video';
import '@splidejs/splide-extension-video/dist/css/splide-extension-video.min.css';


const Video = () => {
    new Splide = new Splide( '.splide', {
        heightRatio: 0.5625,
        cover      : true,
        video      : {
          loop: true,
        },
      } );

      splide.mount( { Video } );

  return (
    <div class="splide">
        <div class="splide__track">
            <ul class="splide__list">
                <li class="splide__slide" data-splide-html-video="path or URL to the video">
                    <img src="preview01.jpg"/>
                </li>
                <li class="splide__slide" data-splide-youtube="https://www.youtube.com/watch?v=cdz__ojQOuU">
                    <img src="preview02.jpg"/>
                </li>
                <li class="splide__slide" data-splide-vimeo="https://vimeo.com/215334213">
                    <img src="preview03.jpg"/>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Video