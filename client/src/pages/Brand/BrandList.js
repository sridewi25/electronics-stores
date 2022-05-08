import React, {useState,useEffect}from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {getAllBrand} from '../../axios/BrandAxios';
import {useNavigate} from 'react-router-dom'

const BrandList = () =>{
    const [brands, setBrands] = useState([])
    const navigate = useNavigate();
    useEffect(()=>{getAllBrand(result =>setBrands(result))
    },[])
    return (
        <>
         <div className="item-list">
         <h2>BRAND LIST</h2>
         <table class="table">
                    <thead class="table-head">
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                     {/* {
                            brands.map(brand =>{
                                const {id,name} = brand
                                return(
                                    // <td>{id}</td>
                                    // <td>{name}</td>
                                )
                            })
                        } */}
                    </tr>
                     </tbody>
                </table>
            </div>
        </>
    )
}

export default BrandList