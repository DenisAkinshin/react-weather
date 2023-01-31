import React, { useEffect, useState } from "react";
import MyInput from "../input/MyInpurt";
import cl from './MyForm.module.css'
import { ReactComponent as Loop } from '../../../assets/loop.svg'

const MyForm = ({onChange}) => {

    const [value, setValue] = useState('')

    return (
        <form className={cl.form}>
            <MyInput
                value={value}
                onChange = {(e) => setValue(e.target.value)}
                type="text"
                placeholder="Введите город.."
            />
            <button className={cl.form__btn} type='button' onClick={() => onChange(value)}>
                <Loop
                    width='25px'
                    height='25px'
                />
            </button>
        </form>
    )
}

export default MyForm;