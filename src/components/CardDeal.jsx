import { card} from '../assets'
import styles, {layout} from '../styles'
import Button from './Button'
const CardDeal = () =>  (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={` ${styles.heading2}`}>New Sleek Personal <br className="sm:block hidden" /> Dashboard Design</h2>
        <p className={` ${styles.paragraph} max-w-[470px] mt-5`}>
          Sed atque modi amet, architecto nobis sapiente, corrupti aperiam repudiandae odit recusandae mollitia eligendi, culpa necessitatibus voluptatibus consequuntur. Eum sequi incidunt totam?
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={layout.sectionImg} >
        <img src={card} alt={card} className='w-[100%] h-[100%]'/>
      </div>
      
    </section>
  )


export default CardDeal