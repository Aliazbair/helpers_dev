import { Header, Meta } from '../components';
import {IconsFonts} from '../data/iconFonts';
import styles from '../styles/grid.module.css'
const iconFot = () => {
    return (
        <div>
          <Meta title="Icons-Fonts"/>
          <Header title="Icon Fonts" description="Resources for Icon Fonts"/>
       
        <div className={styles.grid}>
          {IconsFonts.map((iconFont) => (
            <div className={styles.card}>
              <h3 >WebSite Name: <span style={{color:"green"}}>{iconFont.title}</span></h3>
              <p styles={{color:'#ccc'}}>Description:<br/>
              {iconFont.description}
              </p>
              <a href={iconFont.url} target="_blank" style={{background:'red',padding:'10px', fontSize:'10hr',borderRadius:'5px',display:'inline-block',width:'100%', textAlign:'center',marginTop:'1rem'}}>vist website</a>
              <a href="http://" target="_blank" rel="noopener noreferrer"></a>
  
            </div>
          ))}
        </div>
      </div>
    );
}

export default iconFot;
