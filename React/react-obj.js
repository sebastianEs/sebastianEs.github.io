
// App är gemensam komponent för formulär och listan
const numberList = [
     {id: 1, name: 'Sebastian', phone: '071 000111'},
    {id: 2,name: 'Helena', phone: '072 200222'},
    {id: 3,name: 'Mikael', phone: '073 300333'},
     {id: 4,name: 'Angelica', phone: '074 400444'},
]
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberList: []
        }
    }
    render() {
       return ( <div className="container" id="app">
       
          <AddForm addContacts={this.props.handleSubmit}/>
          <MyList contacts={this.props.newContactsList}/>
    </div>
    );
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
        console.log('name and number was added!' + this.state.nameValue + ' '+ this.state.phoneValue)
        event.preventDefault();
        let id=Math.floor((Math.random() * 100) + 1);
        this.setState({
            //contacts: this.state.contacts.push({id, name, phone})
            numberList: this.state.nameValue + this.state.phoneValue
        })
        this.state.nameValue = '';
        this.state.phoneValue = '';
    }
    render() {
        return (
        <div className="row">
          <form onSubmit={this.handleSubmit}>
              <h2>Lägg till nya kontakter</h2>
              <label><strong>Name:</strong></label>
              <input placeholder="Ditt namn" ref="nameValue" onChange={this.handleInputName} />
              <label ><strong>Phone:</strong></label>
              <input placeholder="Ditt nummer" ref="phoneValue" onChange={this.handleInputNumber} />
              <br/>
              <button type="submit" value="submit">Submit</button>
          </form>
          </div>
        );
    }
}


class MyList extends React.Component {
  
    render() {
        const newContactsList =numberList.map(
        item => <li key={item.id}>Namn: {item.name} <br/> Nummer: {item.phone}</li>
        );
        return (
         <div className="row">
          <h2>Kontakter</h2>
          <ul>
              {newContactsList}
          </ul>
      </div>
        );
    }
}
ReactDOM.render( 
   
     <App />,
    document.getElementById("app")
);
