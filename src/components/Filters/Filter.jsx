import React from 'react'

const Filter = () => {
    return (
        <>
            <div className="container mt-5 d-flex justify-content-between mb-5">
                <h1 className="ml-4 font-weight-bold">Search Properties to rent</h1>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder='Search with Search bar' aria-label="Search" />
                </form>
            </div>

            <div className="row container mt-5 m-auto shadow p-3 mb-5 bg-white rounded d-flex justify-content-around">
                <select class="custom-select custom-select-lg mb-3 col-2">
                    <option selected>Location</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <select class="custom-select custom-select-lg mb-3 col-2">
                    <option selected>Price</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <select class="custom-select custom-select-lg mb-3 col-2">
                    <option selected>Property</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <div className="col-2 p-0">

                    <button className="btn btn-success my-2 mr-4 my-sm-0" type="submit">Search</button>
                </div>


            </div>
        </>
    )
}

export default Filter