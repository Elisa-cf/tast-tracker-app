import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title, onAdd, showAdd }) => {
    // const onClick = () => {
    //     console.log('click')
    // }
    return (
      <header className="header">
          <h1>{title}</h1>
          <Button color="green" 
          text = {showAdd ? "Close" : "Add"} 
          onClick={onAdd}/>
      </header>
    )
}


/*you can write a defaultProps with an object instead of adding the props directly. It's a cleaner way. 
Look picture 12 and 13 in tast-traker-notes/folder-1 */

Header.defaultProps = {
   title: "Task Tracker",
}

/************************************/ 

/* propTypes tast-traker-notes/folder-1 pict 14, 15 */

Header.propTypes = {
    title: PropTypes.string.isRequired,
}


export default Header


