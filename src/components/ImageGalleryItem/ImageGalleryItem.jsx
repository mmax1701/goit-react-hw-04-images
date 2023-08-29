import React, { useState } from "react";
import { Modal } from "components/Modal/Modal";
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ image }) => {
    const { webformatURL, largeImageURL, tags } = image;
    const [isOpenModal, setIsOpenModal] = useState(false);

    const toggleModal = () => {
        setIsOpenModal(prevState => !prevState);
    };

    return (
        <li className={css.imageGalleryItem}>
            <img onClick={toggleModal} src={webformatURL} alt={tags} className={css.imageItem} />
            {isOpenModal && (
                <Modal largeImageURL={largeImageURL} onClose={toggleModal} tags={tags} />
            )}
        </li>
    );
};

ImageGalleryItem.propTypes = {
    image: PropTypes.shape({
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
    }).isRequired,
};
