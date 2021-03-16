import cn from 'classnames'
import styles from './FilterComp.module.css'
import {Link} from 'react-router-dom'
import { useState } from 'react'
const FilterComp = () => {

    const [initText,changeText] = useState('listView');
    console.log(initText)
    let linking;
    initText==='listView'?linking="/listView":linking="/mapView";
    return (
        <div className={cn(styles.wrapper)}>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="filter" class="svg-inline--fa fa-filter fa-w-16" role="img" viewBox="0 0 512 512" >
                    <path fill="currentColor" d="M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z" />
                    </svg>
                <p>Filter</p>
            </div>
            <p>
            <Link to={linking} onClick={()=>{
                changeText(initText==='listView'?"mapView":"listView");
            }}><span>{initText}</span></Link>
            </p>
        </div>
    )
}

export default FilterComp