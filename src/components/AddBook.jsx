import React from 'react'
import NavBar from './NavBar'

export const AddBook = () => {
  return (
    <div>

        <NavBar/>
        <h1 align="center">ADD DETAILS</h1>
        <br></br>
        <div className="container">
            <div className="row">
                <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">BOOK TITLE</label>
                            <input type="text" className="form-control" />
                            <br></br>

                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">CATEGORY</label>
                        <select name="" id="" className="form-control">
                            <option value="">select option</option>
                            <option value="">NOVEL</option>
                            <option value="">SHORT STORY</option>
                            <option value="">AUTOBIOGRAPHY</option>
                        </select>

                        <br></br>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">PUBLISHED YEAR</label>
                        <input type="date" name="pyear" id="pyear" className="form-control" />
                        <br></br>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">AUTHOR NAME</label>
                        <input type="text" className="form-control" />
                        <br></br>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">DESCRIPTION</label>
                        <textarea name="description" id="description" className="form-control"></textarea>
                        <br></br>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">DISTRIBUTOR NAME</label>
                        <input type="text" className="form-control" />
                        <br></br>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">PUBLISHER NAME</label>
                        <input type="text" className="form-control" />
                        <br></br>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">PRICE</label>
                        <input type="text" className="form-control" />
                        <br></br>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">EDITION</label>
                        <input type="text" className="form-control" />
                        <br></br>
                        </div>
                        <center>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                          
                            <button className="btn btn-success">ADD BOOK</button>
                          
                        </div>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
