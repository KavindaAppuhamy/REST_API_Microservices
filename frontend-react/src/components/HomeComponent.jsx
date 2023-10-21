import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

import BannerBackground from "../Assets/home-banner-background-2.png";
import BannerImage from "../Assets/home-banner-image.png";

class HomeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee(id){
        EmployeeService.deleteMenu(id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }
    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`);
    }
    editEmployee(id){
        this.props.history.push(`/add-employee/${id}`);
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
    }

    addEmployee(){
        this.props.history.push('/add-employee/_add');
    }

    render() {
        return (
                
                 <div className="home-container">
          <div className="home-banner-container">
            <div className="home-bannerImage-container">
              <img src={BannerBackground} alt="" />
            </div>
            <div className="home-text-section">
              <h1 className="primary-heading">
                Welcome to Foodie Restaurant Management System
              </h1>
              <p className="primary-text">
                Manage essential restaurant related tasks with a click of a button
              </p>
              <a href="/menu"><button className="secondary-button">
                View Menu </button></a>
            </div>
            <div className="home-image-section">
              <img src={BannerImage} alt="" />
            </div>
          </div>
          
        </div>

         

        )
    }
}

export default HomeComponent
