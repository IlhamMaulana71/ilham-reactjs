import React from "react";

const Input = ({Label , type, name , onChange}) => {
    return(
        <div>
            <label>{Label}:</label>
            <br />
            <input type={type} name={name} onChange={e =>onChange(e.target.value)}/>
            <br />
        </div>
    )
}
const ShowErrors = ({errors}) => {
    return (
        <ul style={{color:'red',marginLeft:'-20px'}}>
            {
                errors.map((error,i) =><li key={i}>{error}</li>)
            }
        </ul>
    )
}

export default class TugasFromRegister extends React.Component{
    state = {
        name:'',
        email:'',
        password:'',
        errors:[]
    }
    handleSubmit = event => {
        event.preventDefault();
        const {name,email,password} = this.state;

        let message = [];

        if(name.length === 0) {
            message = [...message,'Name tidak boleh kosong'];
        } 

        if(email.length === 0) {
            message = [...message,'Email tidak boleh kosong'];
        }

        if(password.length === 0) {
            message = [...message,'Password tidak boleh kosong'];
        }

        const re =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!re.test(String(email).toLowerCase())){
            message = [...message,'Email tidak valid'];
        }

        if(password.length < 8) {
            message = [...message,'Password terlalu pendek'];
        }

        if(message.length > 0) {
            this.setState({
                errors : message
            });
        }else {
            alert(`
            nama:${this.state.name}
            email:${this.state.email}
            password:${this.state.password}
            `);
            this.setState({
                errors:[]
            })
        }
    }
    render() {
        const style = {
            width : '450px',
            margin : '10px auto 0',
            border : '1px solid black',
            padding : '50px',
            borderRadius: "20px",
            overflow: "hidden"       
        }

        return(
            <div style={style}>
            {
                this.state.errors && <ShowErrors errors={this.state.errors} />
            } 
            <img src="https://raw.githubusercontent.com/dewdot/react-portfolio-template/c0b3a9263af4a5ca0b958c8f08945f68794bcf64/public/images/intro.svg" alt=" logo" style={{ width: '400px', }}/>

            <center><h2 class="text-uppercase text-center mb-5">Create an account</h2></center>
            
            <form onSubmit={this.handleSubmit}
            style={{color:'black',marginLeft:'100px'}}
            >
              <Input type="text" name="name" Label="Name" 
              onChange={value => this.setState({name:value})}/> 
              <Input type="text" name="email" Label="Email" 
              onChange={value => this.setState({email:value})}/> 
              <Input type="password" name="password" Label="Password"
              onChange={value => this.setState({password:value})}/>   
              <br />
              <button style={{color:'white',backgroundColor:'blue',width:'178px',padding:'8px'}} type="submit">Register</button>
             </form>
            
        </div>
        )
    }
    
    
}

