import React, { Component } from 'react'
import DeliveryService from '../services/DeliveryService';

class UpdateDeliveryComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

            id: this.props.match.params.id,
            description: '',
            customer: '',
            location: '',
            total: '',
            driver: '',
        }
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeCustomerHandler = this.changeCustomerHandler.bind(this);
        this.changeLocationHandler = this.changeLocationHandler.bind(this);
        this.changeTotalHandler = this.changeTotalHandler.bind(this);
        this.changeDriverHandler = this.changeDriverHandler.bind(this);
        this.updateDelivery = this.updateDelivery.bind(this);
    }

    componentDidMount(){
        DeliveryService.getDeliveryById(this.state.id).then( (res) =>{
            let delivery = res.data;
            this.setState({description: delivery.description,
                customer: delivery.customer,
                location : delivery.location,
                total: delivery.total,
                driver: delivery.driver
            });
        });  
    }

    updateDelivery = (e) => {
        e.preventDefault();
        let delivery = {description: this.state.description, customer: this.state.customer, location: this.state.location, total: this.state.total, driver: this.state.driver};
        console.log('delivery => ' + JSON.stringify(delivery));
        console.log('id => ' + JSON.stringify(this.state.id));
        DeliveryService.updateDelivery(delivery, this.state.id).then( res => {
            this.props.history.push('/delivery');
        });
    }
    
    changeDescriptionHandler= (event) => {
        this.setState({description: event.target.value});
    }

    changeCustomerHandler= (event) => {
        this.setState({customer: event.target.value});
    }

    changeLocationHandler= (event) => {
        this.setState({location: event.target.value});
    }

    changeTotalHandler= (event) => {
        this.setState({total: event.target.value});
    }

    changeDriverHandler= (event) => {
        this.setState({driver: event.target.value});
    }

    cancel(){
        this.props.history.push('/delivery');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Delivery</h3>
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label> Description: </label>
                                            <input placeholder="Description" name="description" className="form-control" 
                                                value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Customer Name: </label>
                                            <input placeholder="Customer" name="customer" className="form-control" 
                                                value={this.state.customer} onChange={this.changeCustomerHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Location: </label>
                                            <input placeholder="Location" name="location" className="form-control" 
                                                value={this.state.location} onChange={this.changeLocationHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Total: </label>
                                            <input placeholder="Total" name="total" className="form-control" 
                                                value={this.state.total} onChange={this.changeTotalHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Driver Name: </label>
                                            <input placeholder="Driver" name="driver" className="form-control" 
                                                value={this.state.driver} onChange={this.changeDriverHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.updateDelivery}>Update</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateDeliveryComponent
