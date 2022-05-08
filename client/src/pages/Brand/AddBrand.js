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
        <div class ="container">
        <div class="mb-3">
              <label class="form-label">Name</label>
              <input onChange={(item) => setForm({ ...form, name: item.target.value })}
              type="text" className="form-control"></input> 
            </div>
            <div class="submit-btn">
            <button onClick={() => submitHandler()} className="btn text-add">Submit</button>
            </div>
        </div>
          
        </>
    )
}

export default AddBrand;