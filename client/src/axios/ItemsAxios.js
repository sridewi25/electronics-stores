import axios from 'axios'
import Swal from 'sweetalert2'

const URL = 'http://localhost:3000'

const getAllItem = async (result) => {
    try {
        let items = await axios({
            method: 'GET',
            url: URL 
        })
        result(items.data)
    } catch (error) {
        console.log(error)
    }
}

const createItem = async (resultItem) => {
    try {
        let items = await axios({
            method: 'POST',
            url: URL + "/items/create",
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

const editItem = async (id, item) => {
    try {
        let result = await axios({
            method: 'PUT',
            url: URL + '/items/edit/' + id,
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
                    method: "DELETE",
                    url: URL + '/items/delete/' + id
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
export {
    getAllItem,
    createItem,
    editItem,
    deleteItem
}