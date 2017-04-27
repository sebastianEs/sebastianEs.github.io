

/*let searchObj1 ={
    title: "JavaScript Tutorial - W3Schools",
    url: "https://www.w3schools.com./js/",
    description: "JavaScript is the programming language of HTML and the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced."
    
};
let searchObj2 ={
     title: "YouTube",
     url: "https://www.youtube.com/?hl=sv&gl=SE",
     description: "Se alla dina favoriter bland videor och musik, ladda upp originalinnehåll och dela allt med vänner, familj och hela världen på YouTube."
};

let myList = [searchObj1,searchObj2,searchObj2];

class SearchResultList extends React.Component {
	render() {
		//const newList = this.props.list.map( element => <SearchResult item={element} /> );
		return <ol>{newList}</ol>;
	}
}
 

               /*<ul><SearchResult item={this.props.r1} /></ul>
               <ul><SearchResult item={this.props.r1} /></ul>
               <ul><SearchResult item={this.props.r1} /></ul>
class SearchResult extends React.Component {
    render() {
        return   <li className="results">
        
        <a href={this.props.item.url}>{this.props.item.title}</a>
        <br/>
       <span className="green">{this.props.item.url}
    </span>
       <br/>
       <span>{this.props.item.description}</span>
    </li>;
    }
}

//    en komponent med namnet login som ändrar (renderar) knappen mellan sign in och sign out.

class Login extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
           isToggleOn: false
       };
       this.handleClick = this.handleClick.bind(this);
   }
    handleClick(event) {
        this.setState( prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }
    render() {
        return <div className="myButton">  
            <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'Sign In' : 'Sign Out'}
        </button></div>;
    }
}*/
//     Skapa en komponent med två knappar, med texten "öka" och "minska". Den ska också skriva ut värdet 1. När man //     klickar på någon knapp ska värdet ändras.
/*
class MyButtons extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            value: 1
        }
        this.increaseValue = this.increaseValue.bind(this);
        this.decreaseValue = this.decreaseValue.bind(this);
    }
    increaseValue(event) {
        this.setState({
            value: this.state.value + 1
        })
    }
    decreaseValue(event) {
        this.setState({
            value: this.state.value -10
        })
    }*/
    /*firstButtonStyle() {
        this.setState({
            color: 'blue',
            style: ''
        })
    }*/
    /*
    render() {
        return (
            <div className="myButton">
                <button onClick={this.increaseValue}>Öka</button>
                <button onClick={this.decreaseValue}>Minska</button>
                <Value txt={this.state.value} />
            </div>
        );
    }
}

function Value(props) {
     return (
          <span>Värdet är: {props.txt}</span>
        );
}


// skapa en komponent med ett texfält, när användaren skriver i fältet ska texten krypteras

class Cryptic extends React.Component {
    render() {
    return (   <div>
            skriv något!
            <input type="text" onKeyPress={this.handleKeyPress} />
            </div>
           );
    }
    handleKeyPress(event) {
        const words ='abcdefghijklmnopqrstuvwxzy';
        let position = words.indexOf(event.key);
        if( position >= 0 ) {
            let newChar = words.substring(position+1,position+2);
            event.target.value += newChar;
            event.preventDefault();
        } else {
            console.log('wrong word or key')
        }
    }
}
*/
//  två komponenter en som innehåller två textfält och en annan som visar ett avatar namn. alla fält ska gå
//  att ändra men om det finns en avatar ska den skriva över ett "förvalt namn".

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            avatarName: ''
        };
        this.setAvatarName = this.setAvatarName.bind(this);
    }
    render() {
    return (
       <div id="app">
         <NameComponent setAvatarName={this.setAvatarName}/>
         <AvatarComponent />
        
       </div>
        );
    }
    setAvatarName(name) {
        this.setState({
            avatarName: name
        });
    }
    
}

class NameComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    }
    render() {
        return (
           <div className="input-content">
             <input type="text" placeholder="Förnamn" onChange=
             {this.handleChangeFirstName}/>
             <br/>
           <input type="text" placeholder="Efternamn"  />
          </div>
        );
    }
   
}

class AvatarComponent extends React.Component {
    render() {
        return (
           <div className="show-content">
            <input type="text" placeholder="Avatar" 
            value={this.props.avatarName} onChange={this.handleChange} />
           </div>
        );
    }
   
}

ReactDOM.render( 
    //<SearchResultList  myList={myList} />,
    //<Login />,
    //<MyButtons msg/>,
    //<Cryptic />,
     <App />,
    document.getElementById("app")
);
