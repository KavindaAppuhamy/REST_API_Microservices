import React, { Component } from 'react'
import MenuService from '../services/MenuService.js'

import BannerBackground from "../Assets/home-banner-background-2.png";

class MenuComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                menus: []
        }
        this.addMenu = this.addMenu.bind(this);
        this.editMenu = this.editMenu.bind(this);
        this.deleteMenu = this.deleteMenu.bind(this);
    }

    deleteMenu(id){
        MenuService.deleteMenu(id).then( res => {
            this.setState({menus: this.state.menus.filter(menu => menu.id !== id)});
        });
    }
    viewMenu(id){
        this.props.history.push(`/view-menu/${id}`);
    }
    editMenu(id){
        this.props.history.push(`/update-menu/${id}`);
    }

    componentDidMount(){
        MenuService.getMenuItems().then((res) => {
            this.setState({ menus: res.data});
        });
    }

    addMenu(){
        this.props.history.push('/add-menu/_add');
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
        <p className="primary-subheading">Menu</p>
        <h1 className="primary-heading">Our Signature Dishes</h1>
      </div>
      <div className = "row">
                    <button className="btn btn-primary" onClick={this.addMenu}> Add Menu</button>
      </div>
      <div className="work-section-bottom">
      
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

export default MenuComponent
