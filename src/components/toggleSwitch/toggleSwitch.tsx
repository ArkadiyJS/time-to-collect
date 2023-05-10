import s from './toggleSwitch.module.css'

function ToggleSwitch({label,setShowButtonCreateList,showButtonCreateList}) {
  return (
    <div className={s.container}>
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
    </div>
  );
}

export default ToggleSwitch;