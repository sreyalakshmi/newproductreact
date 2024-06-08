import React, { useState } from 'react'
import Navbar from './Navbar'

const AddProduct = () => {
    const[data,changedata]=useState(
        {
            "pid":"",
            "pname":"",
            "price":"",
            "category":"",
            "description":""
        }
    )
    const inputHandler=(event)=>{
        changedata({...data,[event.target.name]:event.target.value})
    }
    const readvalue=()=>{
        console.log(data)
    }
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">pid</label>
                            <input type="text" className="form-control" name="pid" value={data.pid} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">pname</label>
                            <input type="text" className="form-control" name= "pname" value={data.pname} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">price</label>
                            <input type="text" className="form-control" name= "price"value={data.price} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">category</label>
                            <select id="" className="form-control" name="category" value={data.category} onChange={inputHandler}>
                                <option value="fashion">fashion</option>
                                <option value="jewellery">jewellery</option>
                                <option value="appliances">makeups</option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">description</label>
                            <input type="text" className="form-control" name= "description" value={data.description} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readvalue}>Add</button>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default AddProduct