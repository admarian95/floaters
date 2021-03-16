import styles from './BreadCrumbs.css'

const BreadCrumbs = ({text,color,backgroundColor})=>{
    return (
        <div className='breadCrumb' style={{border:`1px solid ${color}` , backgroundColor , color}}>
            {text}
        </div>
    )
}

export default BreadCrumbs