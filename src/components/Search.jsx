import React, { useState } from 'react'
import Navbar from './Navbar'

const Search = () => {
    const[data,changedata]=useState(
        {
            "pid":""
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
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">pid</label>
                            <input type="text" className="form-control" name= "pid" value={data.pid} onChange={inputHandler} />
                        </div>
                    </div><br />
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                           <button className="btn btn-primary" onClick={readvalue}>search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search