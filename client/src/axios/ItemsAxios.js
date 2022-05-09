import axios from 'axios'
import Swal from 'sweetalert2'

const URL = 'http://localhost:3000/api/items'

const getAllItem = async (cb) => {
    try {
        let items = await axios({
            method: 'GET',
            url: URL 
        })
        cb(items.data)
    } catch (error) {
        console.log(error)
    }
}

const createItem = async (resultItem) => {
    try {
        let items = await axios({
            method: 'POST',
            url: URL + "/create",
            data: resultItem
        })


        Swal.fire(
            'Add Item',
            'Item Has been created',
            'success'
        )
    } catch (error) {
        console.log(error)
    }
}

const updateItem = async (id, item) => {
    try {
        let result = await axios({
            method: 'UPDATE',
            url: URL + '/update/' + id,
            data: item
        })
        Swal.fire(
            'Edit Item' + id,
            'Item ' + id + ' has been updated',
            'success'
        )
        console.log(result.data)
    } catch (error) {
        console.log(error)
    }
}

const deleteItem = async (id) => {
    try {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                let result = await axios({
                    method: 'DELETE',
                    url: URL + '/delete/' + id
                })

                Swal.fire(
                    'Deleted!',
                    'Item has been deleted.',
                    'success'
                )
            }
        })

    } catch (error) {
        console.log(error)
    }
}
export {getAllItem,createItem,updateItem,deleteItem}