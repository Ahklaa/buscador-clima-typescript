import { ChangeEvent, useState } from "react"
import { countries } from "../../db/countries"
import style from './Form.module.css'
import { Search } from "../../types"

export default function Form() {

  const [search,setSearch] = useState<Search>({
    city : "",
    country : ""
  })
  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    setSearch({
      ...search,
      [e.target.name] : e.target.value
    })
  }
  return (
    <form className={style.form}>
        <div className={style.field}>
         <label htmlFor="city">Ciudad</label>
            <input 
            type="text" 
            name="city"
            id="city"  
            placeholder="Escriba la ciudad"
            onChange={handleChange}/>
            value = {search.city}
        </div>
        <div className={style.field}>
         <label htmlFor="country">País</label>
           <select name="country" id="country" value={search.country} onChange={handleChange}>
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
