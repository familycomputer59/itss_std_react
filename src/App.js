import React, { Component } from 'react';

class App extends Component {
    constructor(props){
        super(props);

        this.state={
            newItem:"",
            list:[]
        }
    }

    updateInput(key, value){
        this.setState({
            [key]:value
        });
    }

    addItem(){
        // item with unique id
        const newItem={
            id: 2 + Math.random(),
            value: this.state.newItem.slice()
        };

        // cache list item
        const list = [...this.state.list];

        // add new item to list
        list.push(newItem);

        //update new list, reset newItem
        this.setState({
            list,
            newItem:""
        });
    }

    deleteItem(id){
        //cache list item
        const list = [...this.state.list];

        //remove item being deleted (filter it out)
        const updateList = list.filter(item => item.id !== id)

        this.setState({list: updateList});
    }

    render() {
        return ( 
            <div className = "App">
                Daily ToDo List
                <br/>
                <input
                    type="text"
                    placeholder="Type your new task here"
                    value={this.state.newItem}
                    onChange={e => this.updateInput("newItem",e.target.value)}
                />
                <button
                    onClick={() => this.addItem()}
                >
                    +
                </button>
                <br/>
                <ul>
                    {this.state.list.map(item=>{
                        return(
                            <li key={item.id}>
                                {item.value}
                                <span>&nbsp;&nbsp;</span>
                                <button
                                    onClick={() => this.deleteItem(item.id)}
                                
                                >
                                x 
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </div> 
        );
    }
}

export default App;