import './Header.module.css'
import search from '../svgs/search'
const Header = () =>{
    return (
    <header className="App-header">
    <form role="search" id="form">
      <input type="search" id="query" name="ip"
        placeholder="Search Here!"
        />
      <button>
        {search()}
      </button>
    </form>
  </header>
    )
}

export default Header