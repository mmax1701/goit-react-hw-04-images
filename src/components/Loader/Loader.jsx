import { ThreeDots } from 'react-loader-spinner';
import css from './Loader.module.css'

export const Loader = () => {
    return (
        <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#ff9100"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass={css.loader}
            visible={true}
        />
    )
}