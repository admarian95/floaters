import styles from './FloaterItem.css'
const FloaterItem = ({ imgSrc, originalName }) => {
    return (
        <a href="#" className="floaterItem">
            <img className="floaterImage" src={imgSrc} />
            <span className='floaterItemText'>{originalName}</span>
        </a>
    )
}

export default FloaterItem