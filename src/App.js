import React, {Component} from 'react';
import ToDoListItem from "./ToDoListItem.js"
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            title: '',
            description: '',
            submitted: 0
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        let t_items = this.state.items;
        t_items.push(
            {
                title: this.state.title,
                description: this.state.description,
            }
        );
        this.setState(
            {
                items: t_items,
                title: '',
                description: '',
            }
        )
    }

    handleTitleChange(event){
        this.setState({title : event.target.value});
    }

    handleDescriptionChange(event){
        this.setState({description : event.target.value});
    }

    handleDeleteItem = index =>{
        let t_items = this.state.items;
        t_items.splice(index,1);
        this.setState({items : t_items});
    }

    render() {
        return (
            <div className="App">

                <form className="App-form" onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            placeholder="title"
                            onChange={this.handleTitleChange}
                            value={this.state.title}
                        />
                        <textarea
                            placeholder="description"
                            onChange={this.handleDescriptionChange}
                            value={this.state.description}
                        />
                        <button value="submit">登録</button>
                    </div>
                </form>
                <div>

                    <ToDoListItem
                        list = {this.state.items}
                        deleteHandler = {this.handleDeleteItem}
                    />
                </div>
            </div>
        );
    }
}

export default App;