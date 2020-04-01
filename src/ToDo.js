import React, {Component} from 'react';
import './ToDo.css';

class ToDo extends Component{
    constructor(props){
        super(props);
        this.state = {
            title:'',
            des:''
        }
    }
    addTitle = (e)=>{
        this.setState({title:e.target.value});
    }
    addDes = (e) =>{
        this.setState({des: e.target.value});
    }
    addItem = (e)=>{
        e.preventDefault();
        this.props.newItem(this.state.title,this.state.des);
        this.setState({title:''});
        this.setState({des:''});
    }
    render(){
        return (
            <form id = "to-do-form" onSubmit = {this.addItem}>
                <input type = 'text' placeholer="title" onChange = {(e)=>this.addTitle(e)} value= {this.state.title} />
                <textarea rows='5' onChange = {(e)=>this.addDes(e)} placeholer="description" value = {this.state.des}/>
                <button type = 'submit'>登録</button>
            </form>
            );
    }
}

export default ToDo;