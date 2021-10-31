import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import './AddNewService.css';

const AddNewService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        
        axios.post('https://floating-brushlands-96149.herokuapp.com/addPlaces', data)
        .then(res=>{
            
        })
    }
    return (
        <div>
            <h1 className='text-danger text-center'>Add a new place to tour next time</h1>
        <div className="d-flex justify-content-center align-items-center add-service">
            <div className="w-50 me-5 my-3">
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("PlaceName")} placeholder='place name' />
            <input {...register("CityName")} placeholder='city name' />
            <textarea {...register("placeDetails")} placeholder='place details' />
            <input {...register("img")} placeholder='img url' />
            <input type="number" {...register("price")} placeholder='price' />
            <input type="submit" />
          </form>
            </div>
        </div>
        </div>
    );
};

export default AddNewService;
