import s from './toggleSwitch.module.css'

type  PropsType = {
  
    label:string ,
    setShowButtonCreateList:Function,
    showButtonCreateList:boolean

  }

function ToggleSwitch({label,setShowButtonCreateList,showButtonCreateList}:PropsType) {
  return (
    <span >
    {" "} 
    <div className={s.toggleSwitch}>
        <input onClick={()=>{setShowButtonCreateList(!showButtonCreateList)}}
        type="checkbox" className={s.checkbox} 
               name={label} id={label} />
        <label className={s.label} htmlFor={label}>
          <span className={s.inner} />
          <span className={s.switch} />
        </label>
      </div>
    </span>
  );
}

export default ToggleSwitch;