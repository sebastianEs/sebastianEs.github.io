
// App är gemensam komponent för formulär och listan
 

class App extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
         list: [{id: this.keygen(8), name: 'Sebastian', phone: '071 101202'}],
         userName: '',
         phone: '',
       };
       this.toggleList = this.changeValueInputs.bind(this);
       this.changeInput = this.changeInput.bind(this);
       this.handleClick = this.handleClick.bind(this);
       this.changeInput2 = this.changeInput2.bind(this);
       this.showItemsList =this.showItemsList.bind(this);
       this.handleClickOnList = this.handleClickOnList.bind(this);
       this.keygen = this.keygen.bind(this);
   }
    render() {
        console.log(this.state)
       return ( 
           <div id="app" className="container" >
       
          <AddForm  
           list ={this.state.list} 
           state={this.state}
           toggleList ={this.changeValueInputs}
           changeInput ={this.changeInput}
           changeInput2 ={this.changeInput2}
           handleClick ={this.handleClick}
           />
          <MyList  
           list={this.state.list} 
           handleClickOnList ={this.handleClickOnList}
           
           />
           
          
    </div>
    );
    }
    keygen(length){
          var ret = "";
          while (ret.length < length) {
            ret += Math.random().toString(16).substring(2);
          }
          return ret.substring(0,length);
        }

    
    handleClick() {
        console.log('Inside handleclick');
        console.log(this.state.list)
        let newObj = {id: this.keygen(8), name: this.state.userName, phone: this.state.phone};
        let currentArray = this.state.list;
        currentArray.push(newObj);
        this.setState({
            list: currentArray,
            userName: '',
            phone: ''
        })
    }
    
    handleClickOnList() {
       console.log('inside handleClickOnList');
        
    }
    
    changeInput(e) {
        console.log('skriver i usr fältet')
        this.setState({
        userName: e.target.value,   
        });
    }
    
    changeInput2(e) {
        this.setState({
        phone: e.target.value,   
        });
        console.log('skriver i tlf fältet')
    }
    changeValueInputs(x,y) {
        this.setState({
           userName: x,
           phone: y
        });
        console.log('ändrar value', this.state.userName);
    }
    
    showItemsList(props) {
        return (
        <li onClick={this.props.handleClickOnList} >Name: {this.props.userName} Phone: {this.props.phoneNumber} ID: {this.props.id}</li>
        );
    }
    
    
} 


//  Addform lägger till nya objekt i listan

class AddForm extends React.Component {
    
    render() {
        return (
        <div className="row">
              <input placeholder="Ditt namn" value={this.props.state.userName} onChange={this.props.changeInput} />
              <input placeholder="Ditt nummer" value={this.props.state.phoneNumber} onChange={this.props.changeInput2} />
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
            {
            this.props.list.map(function(li, index){
            
            return <showItemsList userName={li.name} phoneNumber={li.phone} id={li.id} key={"li"+index}/>;
            })
           }   
          </ul>
        
      );
    }             
}

class ItemList extends React.Component {

    render() {
        return (
        <li onClick={this.props.handleClickOnList} >Name: {this.props.userName} Phone: {this.props.phoneNumber} ID: {this.props.id}</li>
        );
    }
}

    
ReactDOM.render( 
   
     <App />,
    document.getElementById("app")
);
