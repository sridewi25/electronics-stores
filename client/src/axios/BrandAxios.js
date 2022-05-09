import axios from 'axios'
import Swal from 'sweetalert2'

const URL = 'http://localhost:3000/api/brands'

const getAllBrand = async (result) => {
    try {
        let brands = await axios({
            method: 'GET',
            url: URL
        })
        result(brands.data)
    } catch (error) {
        console.log(error)
    }
}

const createBrand = async (resultBrand) => {
    try {
        let brands = await axios({
            method: 'POST',
            url: URL + "/create",
            data: resultBrand
        })


        Swal.fire(
            'Add Item',
            'Brand Has been created',
            'success'
        )
    } catch (error) {
        console.log(error)
    }
}

export {getAllBrand,createBrand}