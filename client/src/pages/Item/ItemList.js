import React, {useState,useEffect} from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {getAllItem,deleteItem} from '../../axios/ItemsAxios';
import {Link,useNavigate} from 'react-router-dom';

const ItemList = () =>{
    const [items, setItems] = useState([])

    const navigate = useNavigate();

    useEffect(()=>{getAllItem(result =>setItems(result))
    },[])


    const deleteHandler = (id) => {
        deleteItem(id)
        navigate('/')
      }

    return (
        <>
        <div className="item-list">
         <h2>ITEM LIST</h2>
         <table className="table">
                    <thead className="table-head">
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Category</th>
                        <th scope="col">Image</th>
                        <th scope="col">User</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map(item =>{
                                const {id,name,price,category,image,userId,brandId} = item
                                return(
                                     <tr>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>{price}</td>
                                    <td>{category}</td>
                                    <td>{image}</td>
                                    <td>{userId}</td>
                                    <td>{brandId}</td>
                                    <td>
                                         <Link to={`/items/edit/${id}`} className="btn btn-sm btn-info">Edit</Link>
                                         <button onClick={() => deleteHandler(+id)} className="btn btn-sm btn-danger">Delete</button>
                                    </td>
                                    </tr>
                                )
                            })
                        }
                     </tbody>
                </table>
            </div>
        </>
    )
}

export default ItemList;