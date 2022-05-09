import React, {useState}from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { createItem } from '../../axios/ItemsAxios';
import { useNavigate } from 'react-router-dom'

const CreateItems = () => {
    const [form, setForm] = useState({
        name: "",
        price: "",
        category: "",
        image: "",
        userId: 0,
        brandId:0
    })
    const navigation = useNavigate()

    const submitHandler = () => {
        createItem(form)
        navigation('/')
      }
    return (
        <>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input onChange={(item) => setForm({ ...form, name: item.target.value })}
              type="text" className="form-control"></input> 
            </div>
            <div className="mb-3">
              <label className="form-label">Price</label>
              <input onChange={(item) => setForm({ ...form, price: item.target.value })}
              type="text" className="form-control"></input>
            </div>
            <div className="mb-3">
                <label className="form-label">Category</label>
                <input onChange={(item) => setForm({ ...form, category: item.target.value })}
                type="text"className="form-control"></input>
            </div>
            <div className="mb-3">
                <label className="form-label">Image</label>
                <input onChange={(item) => setForm({ ...form, image: item.target.value })} type="text" 
                className="form-control" placeholder="Input Image Link"></input>
            </div>
            <div className="mb-3">
                <label className="form-label">User</label>
                <input onChange={(item) => setForm({ ...form, userId: item.target.value })}
                type="number" className="form-control"></input>
            </div>
            <div className="mb-3">
                <label className="form-label">Brand</label>
                <input onChange={(item) => setForm({ ...form, brandId: item.target.value })}
              type="number" className="form-control"></input>
            </div>
            <div className="submit-btn">
            <button onClick={() => submitHandler()} classNameName="btn text-add">Submit</button>
            </div>
        </>
    )
}

export default CreateItems;