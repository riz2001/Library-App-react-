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
              
                    <td>RIZWAN</td>
                    <td>9142211987</td>
                    <td>SUHAIL</td>
                    <td>mohammedrizwan@gmail.com</td>
                  </tr>
                  <tr>
                
                    <td>JERRIN</td>
                    <td>7025768231</td>
                    <td>SREERAG</td>
                    <td>jerrin@gmail.com</td>

                  </tr>
                  <tr>
                    <td>AKASH</td>
                    <td>7025768231</td>
                    <td>NEVIN</td>
                    <td>akash@gmail.com</td>
                 </tr>
                 <tr>
                    <td>ALVIN</td>
                    <td>7025787678</td>
                    <td>JOE</td>
                    <td>alvin@gmail.com</td>
                 </tr>
               
                
              </table>
        </div>
    </div>
</div>



    </div>
  )
}

export default ViewAll