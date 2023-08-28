import { Component } from "react";
import { Modal } from "components/Modal/Modal";
import PropTypes from 'prop-types'
import css from './ImageGalleryItem.module.css'

export class ImageGalleryItem extends Component {
     state = {
    isOpenModal: false,
    };
    
   toggleModal = () => {
  this.setState(prevState => ({
    isOpenModal: !prevState.isOpenModal,
  }));
};


    render() {
        const { webformatURL, largeImageURL, tags } = this.props.image;
        return (
            <li className={css.imageGalleryItem}>
                <img onClick={this.toggleModal} src={webformatURL} alt={tags} className={css.imageItem}/>
                {this.state.isOpenModal && (
                    <Modal largeImageURL={largeImageURL} onClose={this.toggleModal} tags={tags}/>
                )}
            </li>
        )
    }
};

ImageGalleryItem.propTypes = {
    image: PropTypes.shape({
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
    }).isRequired,
}