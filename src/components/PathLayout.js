import React from 'react';
import { Link } from 'gatsby';
import homeImage from '../img/path/home.png';

import PreviewCompatibleImage from './PreviewCompatibleImage';

const PathLayout = ({ layoutInfo }) => {
  const { path, text, dayKey, dayText } = layoutInfo;
  return(
    <div className={path}>
      <div className="home-size">
        <PreviewCompatibleImage
          imageInfo={{
            image: homeImage,
            alt: "home image"
          }}
        />
      </div>
      <div className="soft-font">
        <Link to="/" className="home-text">
          ホーム
        </Link>
        {dayKey ? (
          <>
            &nbsp;>&nbsp;
            <Link to={`/blog/${dayKey}`} className="home-text">
              {dayText}
            </Link>
          </>
        ) : null}
        &nbsp;>&nbsp;{text}
      </div>
    </div>
  )
}

export default PathLayout;
