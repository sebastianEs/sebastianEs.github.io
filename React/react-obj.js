
// App är gemensam komponent för formulär och listan
 

class App extends React.Component {
   constructor() {
       super();
       this.state = {
         contactName: '',
         contactPhone: ''
       };
   }
    render() {
    let contactsList = [
	{
		name: 'Sebastian',
		phone: '071 111222'
	},
	{
		name: 'Angelica',
		phone: '072 222333'
	},
	{
		name: 'Marcus',
		phone: '073 333444'
	},
    {
		name: 'Helena',
		phone: '074 444555'
	}    
];
       return ( <div className="container" id="app">
       
          <AddForm  contactName={this.state.contactName} contactPhone={this.state.contactPhone} />
          <MyList  contactsList={contactsList}   />
    </div>
    );
    }
    
    
} 


//  Addform lägger till nya objekt i listan

class AddForm extends React.Component {
    
    render() {
        return (
        <div className="row">
           <form>
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
    console.log('kollar this.handleClick ', this.handleClick)
    }
}


class MyList extends React.Component {
  constructor(props) {
      super();
      this.state = {
          name: props.initialName,
          phone: props.initialPhone
      }
  }
    handleClick(e) {
        
    }
    render() {  
        let key=0;
        
        return (
         <div className="row">
          <h2>Kontakter</h2>
          <ul>
              {this.props.contactsList.map((item, i) => <li key={i} onClick={this.handleClick}>{item.name} <br/> {item.phone}</li>
            )}
              
          </ul>
        </div>
      )
    };                 
}

    
ReactDOM.render( 
   
     <App />,
    document.getElementById("app")
);
