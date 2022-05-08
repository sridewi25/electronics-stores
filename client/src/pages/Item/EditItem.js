import React, { useState } from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {  editItem } from '../../axios/ItemsAxios'
import { useNavigate, useParams } from 'react-router-dom'

const EditItem = () => {
    const [form, setForm] = useState({
        name: "",
        price: "",
        category: "",
        image: "",
        userId: 0,
        brandId:0
    })
    const navigation = useNavigate()
    const params = useParams() 

    const submitHandler = () => {
        editItem(+params.id, form)
        navigation('/')
    }
    return (
        <>
         <div class="mb-3">
              <label class="form-label">Name</label>
              <input onChange={(item) => setForm({ ...form, name: item.target.value })}
              type="text" className="form-control"></input> 
            </div>
            <div class="mb-3">
              <label class="form-label">Price</label>
              <input onChange={(item) => setForm({ ...form, price: item.target.value })}
              type="text" className="form-control"></input>
            </div>
            <div class="mb-3">
                <label class="form-label">Category</label>
                <input onChange={(item) => setForm({ ...form, category: item.target.value })}
                type="text"className="form-control"></input>
            </div>
            <div class="mb-3">
                <label class="form-label">Image</label>
                <input onChange={(item) => setForm({ ...form, image: item.target.value })} type="text" 
                className="form-control" placeholder="Input Image Link"></input>
            </div>
            <div class="mb-3">
                <label class="form-label">User</label>
                <input onChange={(item) => setForm({ ...form, userId: item.target.value })}
                type="number" className="form-control"></input>
            </div>
            <div class="mb-3">
                <label class="form-label">Brand</label>
                <input onChange={(item) => setForm({ ...form, brandId: item.target.value })}
              type="number" className="form-control"></input>
            </div>
            <div class="submit-btn">
            <button onClick={() => submitHandler()} className="btn text-add">Submit</button>
            </div>
        </>
    )
}

export default EditItem;