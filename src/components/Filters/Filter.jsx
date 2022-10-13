import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import { API, propType, propLocation } from "../../API/Api";
import Slider from '@mui/material/Slider';
import "./Filter.css"

const Filter = () => {

    const [list, setlist] = useState(API)

    const [query, setquery] = useState({
        location: null, type: null, price: [0, 5000]
    });

    const handelInp = (e) => {
        const { name, value } = e.target;

        setquery((pre) => {
            return {
                ...pre,
                [name]: value
            }
        })
    }

    const Reset = () => {
        setlist(API)
        setquery({
            location: null, type: null, price: [0, 5000]
        })
    }


    const applyFilter = () => {
        let apiData = API;

        function capitalize(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        if (query.location) {
            apiData = apiData.filter((data) => { return capitalize(data.location).includes(query.location) })
        }

        if (query.type) {

            apiData = apiData.filter((data) => { return capitalize(data.type).includes(query.type) })
        }

        const minPrice = query.price[0];
        const maxPrice = query.price[1];

        apiData = apiData.filter((data) => { return data.price >= minPrice && data.price <= maxPrice })

        setlist(apiData);
    }

    useEffect(() => {
        applyFilter();
        // eslint-disable-next-line 
    }, [query.location, query.type, query.price])


    return (
        <>
            <div className="container mt-5 d-flex justify-content-between mb-5">
                <h1 className="ml-4 font-weight-bold">Search Properties to rent</h1>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder='Search with Search bar' aria-label="Search" />
                </form>
            </div>

            <div className="row container mt-5 m-auto shadow p-3 mb-5 bg-white rounded d-flex justify-content-around">
                <select className="custom-select custom-select-lg mb-3 mt-3 col-md-2" name="location" value={query.location} onChange={handelInp}>
                    <option defaultValue>Location</option>
                    {propLocation.map((val, i) => {
                        return <option key={i} value={val}>{val}</option>
                    })}
                </select>

                <div className="custom-select custom-select-lg mb-3 col-md-4">
                    <h5 className='mr-3'>Price</h5>
                    <Slider
                        getAriaLabel={() => 'Temperature range'}
                        value={query.price}
                        onChange={handelInp}
                        name="price"
                        valueLabelDisplay="auto"
                        min={0}
                        max={5000}
                        step={1000}

                        style={{ padding: "10px" }}
                    />
                </div>

                <select className="custom-select custom-select-lg mb-3 mt-md-3 col-md-2" name="type" value={query.type} onChange={handelInp}>
                    <option defaultValue value={null}>Type</option>
                    {propType.map((val, i) => {
                        return <option key={i} value={val}>{val}</option>
                    })}
                </select>
                <div className="col-md-2 p-0 mt-3">
                    <button className="btn btn-success my-2 mr-4 my-sm-0" onClick={Reset}>Reset</button>

                </div>
            </div>

            <div className="container d-flex flex-wrap mt-4 justify-content-center">
                {list.map((val, i) => {
                    return <Card key={i} val={val} />
                })}

            </div>
        </>
    )
}

export default Filter