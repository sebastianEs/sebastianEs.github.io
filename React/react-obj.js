
// App är gemensam komponent för formulär och listan
 
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked: 0,
            numberList: [
     {id: 1, name: 'Sebastian', phone: '071 000111'},
     {id: 2,name: 'Helena', phone: '072 200222'},
     {id: 3,name: 'Mikael', phone: '073 300333'},
     {id: 4,name: 'Angelica', phone: '074 400444'},
]
        }
        this.handleContactAdd=this.handleContactAdd.bind(this); 
       
    }
    render() {
       return ( <div className="container" id="app">
       
          <AddForm {...this.state} onContactAdd={this.handleContactAdd}/>
          <MyList {...this.state} numberList={this.state.numberList} handleClick={this.handleClick} />
    </div>
    );
    }
    handleContactAdd(name,phone) {
      let newContact = {
          id: this.state.numberList.length + 1,
          name: name,
          phone: phone
      }
      this.setState({
          numberList: this.state.numberList.concat(newContact)
      })
       console.log(this.state.numberList.concat(newContact)) 
    }
    
 
}

//  Addform lägger till nya objekt i listan

class AddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameValue: '',
            phoneValue: '',
            numberList: props.newContactsList
        }
        console.log(props.newContactsList)
        this.handleInputName=this.handleInputName.bind(this);
        this.handleInputNumber=this.handleInputNumber.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);    
    }
    handleInputName(event) {
        this.setState({
            nameValue: event.target.value
        })
        
    }
     handleInputNumber(event) {
        this.setState({
            phoneValue: event.target.value.substr(0,10)
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        let id= Math.floor((Math.random() * 100) + 1);
        let name =  this.refs.nameValue.value;
        let phone = this.refs.phoneValue.value;
        
        if(!name) {
            alert('Skriv ett namn' );
            return;
        }
        this.props.onContactAdd(name,phone)
        this.refs.nameValue.value = '';
        this.refs.phoneValue.value = '';
    }
    
    render() {
        return (
        <div className="row">
           <form onSubmit={this.handleSubmit}>
              <h2>Lägg till nya kontakter</h2>
              <label><strong>Name:</strong></label>
              <input placeholder="Ditt namn" ref="nameValue" value={this.props.nameValue} onChange={this.handleInputName} />
              <label ><strong>Phone:</strong></label>
              <input placeholder="Ditt nummer" ref="phoneValue" value={this.props.phoneValue} onChange={this.handleInputNumber} />
              <br/>
              <button type="submit" value="submit">Submit</button>
            </form>
          </div>
        );
    }
}


class MyList extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
           name: '',
           phone: ''
       }
       this.handleClick=this.handleClick.bind(this);
   }
    
       handleClick(newContactsList) {
        console.log(event.currentTarget)
        this.setState({
            name: newContactsList.name,
            phone: newContactsList.phone,
            isClicked: newContactsList.id
            
        })
          
    }
  
   
    
    render() {
        const newContactsList = this.props.numberList.map( list => {
            return <li list={list} key={list.id}><span 
                   onClick={this.handleClick}> Namn: 
                   {list.name} <br/> Nummer: {list.phone}</span>
                   </li>
                   
        })   
        return (
         <div className="row">
          <h2>Kontakter</h2>
          <ul>
              {newContactsList}
          </ul>
      </div>
        );
       
    };
                                                         
                  
}
                                                                         
    
ReactDOM.render( 
   
     <App />,
    document.getElementById("app")
);
