// App är gemensam komponent för formulär och listan
 

class App extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
         list: [],
         userName: '',
         phone: ''
       };
       this.changeInput = this.changeInput.bind(this);
       this.handleClick = this.handleClick.bind(this);
       this.changeInput2 = this.changeInput2.bind(this);
       this.handleClickOnList = this.handleClickOnList.bind(this);
   }
    handleClick() {
        let newObj = {name: this.state.userName, phone: this.state.phone, function: this.handleClickOnList};
        let currentArray = this.state.list;
        currentArray.push(newObj);
        this.setState({
            list: currentArray,
            userName: '',
            phone: ''
        })
    }
    handleClickOnList(index) {
        console.log(index);
        let current = this.state.list[index];
        this.setState({
            userName: current.name,
            phone: current.phone
        });
        
        
    }
    
    changeInput(e) {
        this.setState({
        userName: e.target.value,   
        });
    }
    
    changeInput2(e) {
        this.setState({
        phone: e.target.value,   
        });
    }
    
   render() {
        return ( 
        <div id="app" className="container" >
            <AddForm  
                list ={this.state.list} 
                userName={this.state.userName}
                phone={this.state.phone}
                toggleList ={this.changeValueInputs}
                changeInput ={this.changeInput}
                changeInput2 ={this.changeInput2}
                handleClick ={this.handleClick}
            />
            <MyList  
                list={this.state.list}
                handleClickOnList ={this.handleClickOnList}
            /></div>    
        );
    }    
} 


//  Addform lägger till nya objekt i listan
class AddForm extends React.Component {
    render() {
        return (
        <div className="row">
              <input placeholder="Ditt namn" value={this.props.userName} onChange={this.props.changeInput} />
              <input placeholder="Ditt nummer" value={this.props.phone} onChange={this.props.changeInput2} />
              <br/>
              <button onClick={this.props.handleClick}>Lägg till</button>
          </div>
        );
    }
}


class MyList extends React.Component {
    render() {
        return (    
            
          <ul>
            <h2>Kontakter</h2>
            {this.props.list.map((li, index)=>{
            return <ItemList listIndex={index} onClick = {li.function} userName={li.name} phoneNumber={li.phone} key={"li"+index}/>;
            })}   
          </ul>
        
      );
    }             
}

class ItemList extends React.Component {
    render() {
        return (
        <li onClick={()=>this.props.onClick(this.props.listIndex)}> Name:  {this.props.userName} Phone: {this.props.phoneNumber}</li>
        );
    }
}

    
ReactDOM.render( 
   
     <App />,
    document.getElementById("app")
);