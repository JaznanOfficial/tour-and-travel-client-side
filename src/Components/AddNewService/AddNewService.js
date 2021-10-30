import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import './AddNewService.css';

const AddNewService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/addPlaces', data)
        .then(res=>{
            console.log(res);
        })
    }
    return (
        <div>
            <h1 className='text-danger text-center'>Add a place for booking</h1>
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
