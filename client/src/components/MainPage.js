import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ItemList from '../pages/Item/ItemList';
import CreateItems from '../pages/Item/AddItem';
import BrandList from '../pages/Brand/BrandList';
import UpdateItem from '../pages/Item/EditItem';
import AddBrand from '../pages/Brand/AddBrand';
import {Routes,Route} from 'react-router-dom'

const MainPage =() =>{
    return (
        <>
        <div className="container container-mainpage">
                <Routes>
                    <Route path="/" element={<ItemList></ItemList>}></Route>
                    <Route path ="/items/create" element={<CreateItems></CreateItems>}></Route>
                    <Route path ="/brands/create" element={<AddBrand></AddBrand>}></Route>
                    <Route path="/brands" element={<BrandList></BrandList>}></Route>
                    {/* <Route path ="/items/edit">
                        <Route path="/:id" element={<UpdateItem></UpdateItem>}></Route>
                    </Route> */}
                </Routes>
            </div>
        </>
    )
}

export default MainPage;