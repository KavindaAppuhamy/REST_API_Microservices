import React, { Component } from 'react'
import MenuService from '../services/MenuService'

class ViewMenuComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            menu: {}
        }
    }

    componentDidMount(){
        MenuService.getMenuById(this.state.id).then( res => {
            this.setState({menu: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-10 offset-md-1">
                    <h3 className = "text-center"> View Menu Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                             <div className = "col"><label> Title of the Menu: </label></div>
                             <div className = "col"><div> { this.state.menu.title }</div></div> 
                        </div>
                        <div className = "row">
                        <div className = "col"><label> Brief Description of the Menu: </label></div>
                             <div className = "col"><div> { this.state.menu.description }</div></div>     
                        </div>
                        <div className = "row">
                        <div className = "col"><label> Price of the Item in LKR: </label></div>
                             <div className = "col"><div> { this.state.menu.price }</div></div> 
                            
                            
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewMenuComponent
