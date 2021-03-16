
const FloaterItemListView = ({ imgSrc, locality, totalPrice, originalName }) => {
    return (
        <div className="floaterViewWrapper">
            <a href="#" className="floaterItemListView">
                <img className="floaterImage" src={imgSrc} />
            </a>
            <div className="itemDetails">
                <div style={{position:'relative'}}>
                <p className='floaterItemText'>{originalName}</p>
                <p className='itemLocality'>Near {locality}</p>
                </div>
                <p className="totalPrice">{totalPrice} <span>Rs</span></p>
            </div>
        </div>
    )
}

export default FloaterItemListView