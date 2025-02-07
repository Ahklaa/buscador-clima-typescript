import { countries } from "../../db/countries"
import style from './Form.module.css'
export default function Form() {
  return (
    <form className={style.form}>
        <div className={style.field}>
         <label htmlFor="city">Ciudad</label>
            <input 
            type="text" 
            name="city"
            id="city"  
            placeholder="Escriba la ciudad"/>
        </div>
        <div className={style.field}>
         <label htmlFor="country">País</label>
           <select name="country" id="country">
            <option value="">--Seleccione el pais</option>
            {countries.map(country => (
                <option value={country.code} key={country.code}>{country.name}</option>
            ))}
           </select>
        </div>
        <input type="submit" className={style.submit} />
    </form>
  )
}
