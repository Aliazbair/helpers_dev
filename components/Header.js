import headerStyles from '../styles/Header.module.css'

const Header = ({title,description}) => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>{title}</span> 
      </h1>
      <p className={headerStyles.description}>
       {description}
      </p>
    </div>
  )
}

Header.defaultProps={
  title:"WebDev News",
  description:"   Keep up to date with the latest web dev news"
}

export default Header
