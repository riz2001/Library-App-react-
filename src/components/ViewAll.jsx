import React from 'react'
import NavBar from './NavBar'

const ViewAll = () => {
  return (
    <div>
        <NavBar/>
        <div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        
            <table class="table">
                <thead>
                  <tr>
                    <th scope="col">BOOK TILE</th>
                    <th scope="col">AUTHOR NAME</th>
                    <th scope="col">PUBLISHER NAME</th>
                    <th scope="col">PRICE</th>
                  </tr>
                </thead>
           
                  <tr>
              
                    <td>THE KING</td>
                    <td>RIZWAN</td>
                    <td>SUHAIL</td>
                    <td>240</td>
                  </tr>
               
                
                  
                
              </table>
        </div>
    </div>
</div>



    </div>
  )
}

export default ViewAll