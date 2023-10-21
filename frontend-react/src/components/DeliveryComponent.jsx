import React, { Component } from 'react'
import DeliveryService from '../services/DeliveryService.js'

import BannerBackground from "../Assets/home-banner-background-2.png";

class DeliveryComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                deliverys: []
        }
        this.addDelivery = this.addDelivery.bind(this);
        this.editDelivery = this.editDelivery.bind(this);
        this.deleteDelivery = this.deleteDelivery.bind(this);
    }

    deleteDelivery(id){
        DeliveryService.deleteDelivery(id).then( res => {
            this.setState({deliverys: this.state.deliverys.filter(delivery => delivery.id !== id)});
        });
    }
    viewDelivery(id){
        this.props.history.push(`/view-delivery/${id}`);
    }
    editDelivery(id){
        this.props.history.push(`/update-delivery/${id}`);
    }

    componentDidMount(){
        DeliveryService.getDeliveries().then((res) => {
            this.setState({ deliverys: res.data});
        });
    }

    addDelivery(){
        this.props.history.push('/add-delivery/_add');
    }

    render() {
        return (

            <div className="home-container">
          <div className="home-banner-container">
            <div className="home-bannerImage-container">
              <img src={BannerBackground} alt="" />
            </div>
    <div className="work-section-wrapper">
      <div className="work-section">
        <p className="primary-subheading">Deliveries </p>
        <h1 className="primary-heading">Manage Deliveries</h1>
      </div>
      <div className = "row">
                    <button className="btn btn-primary" onClick={this.addDelivery}> Add Delivery</button>
      </div>
      <div className="work-section-bottom">

      <div className = "row">
                        <table className = "table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th> Description</th>
                                    <th> Customer Name</th>
                                    <th> Customer Location</th>
                                    <th> Total Price</th>
                                    <th> Driver Name</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.deliverys.map(
                                        delivery => 
                                        <tr key = {delivery.id}>
                                             <td> { delivery.description} </td>   
                                             <td> {delivery.customer}</td>
                                             <td> {delivery.location}</td>
                                             <td> {delivery.total}</td>
                                             <td> {delivery.driver}</td>
                                             <td>
                                                 <button onClick={ () => this.editDelivery(delivery.id)} className="btn btn-info">Update</button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteDelivery(delivery.id)} className="btn btn-danger">Delete </button>
                                             </td>
                                        </tr>
                                        
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

      </div>
    </div>
    </div>
    </div>


            /*
            <div>
                 <h2 className="text-center">Our Menu Items</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addMenu}> Add Menu Item</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th> Item Title</th>
                                    <th> Item Description</th>
                                    <th> Item Price</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.menus.map(
                                        menu => 
                                        <tr key = {menu.id}>
                                             <td> { menu.title} </td>   
                                             <td> {menu.description}</td>
                                             <td> {menu.price}</td>
                                             <td>
                                                 <button onClick={ () => this.editMenu(menu.id)} className="btn btn-info">Update</button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteMenu(menu.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewMenu(menu.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>*/
           
        )
    }
}

export default DeliveryComponent
