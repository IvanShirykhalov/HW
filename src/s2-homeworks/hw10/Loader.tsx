import s from './Loader.module.css'
import loading from './Dual Ring-1.7s-200px.svg'

export const Loader = () => <div className={s.loader}><img src={loading} alt={'wait'}/></div>
