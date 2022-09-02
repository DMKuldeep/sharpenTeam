import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'
import "./App1.css"


class App1 extends Component {
    constructor(){
        super()    
        this.state = {
            firstName:'',
            lastname:'',
            email:''
        }
        this.changefirstName = this.changefirstName.bind(this)
        this.changeemail = this.changeemail.bind(this)
        this.changelastname = this.changelastname.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changefirstName(event){

        this.setState({
            firstName:event.target.value
        })
        console.log(this.state.firstName)
    }
    changelastname(event){
        this.setState({
            lastname:event.target.value
        })
    }
    changeemail(event){
        this.setState({
            email:event.target.value
        })
    }    
    onSubmit(event){
        event.preventDefault()
        window.alert("Database Send")

        const registered = {
            firstName: this.state.firstName,
            lastname: this.state.lastname,
            email: this.state.email
        }
        console.log(this.state.firstName)

        axios.post('http://localhost:4000/app/signup', registered)
            .then(response => console.log(response.data))
        this.setState({
            firstName:'',
            lastname:'',
            email:''
        })    
    }

    render(){
        return (
            <div id="kul">
                <div className="container">
                    <div className="form-div">
                        
                        <form onSubmit={this.onSubmit}>
                            <input type='text' placeholder='firstName' onChange={this.changefirstName} value={this.state.firstName} className='form-control form-group' />
                            <input type='text' placeholder='lastname' onChange={this.changelastname} value={this.state.lastname} className='form-control form-group' />
                            <input type='text' placeholder='email' onChange={this.changeemail} value={this.state.email} className='form-control form-group' />
                            <label className='form-control form-group'>Permission</label>
                            <select>
                            <option>Accept</option>
                            <option>Denied</option>
                            </select>
                            <input type='submit'className='btn btn-danger btn-block'/>
                            
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default App1;