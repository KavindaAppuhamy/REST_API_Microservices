import React, { Component } from 'react'
import MenuService from '../services/MenuService';

class UpdateMenuComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            title: '',
            description: '',
            price: ''
        }
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        this.updateMenu = this.updateMenu.bind(this);
    }

    componentDidMount(){
        MenuService.getMenuById(this.state.id).then( (res) =>{
            let menu = res.data;
            this.setState({title: menu.title,
                description: menu.description,
                price : menu.price
            });
        });
    }

    updateMenu = (e) => {
        e.preventDefault();
        let menu = {title: this.state.title, description: this.state.description, price: this.state.price};
        console.log('menu => ' + JSON.stringify(menu));
        console.log('id => ' + JSON.stringify(this.state.id));
        MenuService.updateMenu(menu, this.state.id).then( res => {
            this.props.history.push('/menu');
        });
    }
    
    changeTitleHandler= (event) => {
        this.setState({title: event.target.value});
    }

    changeDescriptionHandler= (event) => {
        this.setState({description: event.target.value});
    }

    changePriceHandler= (event) => {
        this.setState({price: event.target.value});
    }

    cancel(){
        this.props.history.push('/menu');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Menu</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Title: </label>
                                            <input placeholder="Title" name="title" className="form-control" 
                                                value={this.state.title} onChange={this.changeTitleHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Description: </label>
                                            <input placeholder="Description" name="description" className="form-control" 
                                                value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Price: </label>
                                            <input placeholder="Price" name="price" className="form-control" 
                                                value={this.state.price} onChange={this.changePriceHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateMenu}>Update Menu Item</button>
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

export default UpdateMenuComponent
