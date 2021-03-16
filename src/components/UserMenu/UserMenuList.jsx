import search from '../svgs/search'
import maps from '../svgs/maps'
import userIcon from '../svgs/userIcon'
import alert from '../svgs/alert'

const UserMenuList = () => {
    return (
        <>
        {search()}
        {maps()}
        {userIcon()}
        {alert()}
        </>
)
}

export default UserMenuList