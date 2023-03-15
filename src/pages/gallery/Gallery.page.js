import React from 'react';
import photos from './dataForGallery';
import styles from './Gallery.module.css'
const GalleryPage = () => {
    return (
        <div className={styles["main"]}>
            {photos.map((link, i) => {
                return (<div className={styles["img-wrapper"]} key={i}> <img src={link} alt="gallery" /> </div>)
            })}

        </div>
    );
};

export default GalleryPage;