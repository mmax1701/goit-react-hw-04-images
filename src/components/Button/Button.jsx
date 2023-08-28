import PropTypes from 'prop-types'
import css from './Button.module.css'

export const Button = ({ onClick }) => {
  return (
    <div className={css.button_wrap}>
      <button onClick={onClick} type="button" className={css.button}>
      Load More
    </button>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};