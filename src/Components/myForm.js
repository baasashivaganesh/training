import React, { Component } from 'react';
import './formStyle.css'


export class MyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            gender: '',
            address: '',
            file: null
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleFileChange = (event) => {
        this.setState({
            file: event.target.files[0]
        });
    };

    submitValues = (event) => {
        event.preventDefault();
        alert(
            `Form Submitted\nUsername: ${this.state.username}\nEmail: ${this.state.email}\nPassword: ${this.state.password}\nGender: ${this.state.gender}\nAddress: ${this.state.address}\nFile: ${this.state.file ? this.state.file.name : 'No file selected'}`
        );
    };

    render() {
        return (
            <div>
                <form onSubmit={this.submitValues}>
                    <label>Username</label>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />

                    <label>Email</label>
                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />

                    <label>Password</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />

                    <label>Gender</label>
                    <div className="gender-container">
                        <input type="radio" name="gender" value="male" onChange={this.handleChange} /> Male
                        <input type="radio" name="gender" value="female" onChange={this.handleChange} /> Female
                        <input type="radio" name="gender" value="other" onChange={this.handleChange} /> Other
                    </div>

                    <label>Address</label>
                    <textarea name="address" value={this.state.address} onChange={this.handleChange}></textarea>

                    <div className="file-container">
                        <label>File</label>
                        <input type="file" onChange={this.handleFileChange} />
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default MyForm;
