import React, { Component } from 'react'
import DeliveryService from '../services/DeliveryService';

class CreateDeliveryComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // step 2

            id: this.props.match.params.id,
            description: '',
            customer: '',
            location: '',
            total: '',
            driver: ''
        }
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeCustomerHandler = this.changeCustomerHandler.bind(this);
        this.changeLocationHandler = this.changeLocationHandler.bind(this);
        this.changeTotalHandler = this.changeTotalHandler.bind(this);
        this.changeDriverHandler = this.changeDriverHandler.bind(this);
        this.saveDelivery = this.saveDelivery.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
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
    }
    saveDelivery = (e) => {
        e.preventDefault();
        let delivery = {description: this.state.description, customer: this.state.customer, location: this.state.location, total: this.state.total, driver: this.state.driver};
        console.log('delivery => ' + JSON.stringify(delivery));

        // step 5
        if(this.state.id === '_add'){
            DeliveryService.createDelivery(delivery).then(res =>{
                this.props.history.push('/delivery');
            });
        }
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
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    <h3 className="text-center">Add Deliveries</h3>
                                }
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
                                        <div className="text-center">
                                        <button className="btn btn-success" onClick={this.saveDelivery}>Add Delivery</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                   </div>
            </div>
        )
    }
}

export default CreateDeliveryComponent
