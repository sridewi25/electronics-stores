import React, { useState } from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { createBrand } from '../../axios/BrandAxios';
import { useNavigate } from 'react-router-dom'

const AddBrand = () =>{
    const [form, setForm] = useState({
        name: "",
    })
    const navigation = useNavigate()

    const submitHandler = () => {
        createBrand(form)
        navigation('/brands')
      }
    return (
        <>
        
        <div className="mb-3">
              <label className="form-label">Brand Name</label>
              <input onChange={(item) => setForm({ ...form, name: item.target.value })}
              type="text" className="form-control"></input> 
            </div>
            <div className="submit-btn">
            <button onClick={() => submitHandler()} classNameName="btn text-add">Submit</button>
            </div>
        </>
    )
}

export default AddBrand;