import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import PropTypes from 'prop-types'
import css from './ImageGallery.module.css'




export const ImageGallery = ({images}) => {
    return (
        <div>
            <ul className={css.imageGallery}>
                {images.map(image => {
                    return (
                        <ImageGalleryItem key={image.id} image={image} />
                    )
                })}
            </ul>
        </div>
    )
}

ImageGallery.propTypes = {
    images: PropTypes.array.isRequired
}