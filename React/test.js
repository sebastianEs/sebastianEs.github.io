

let searchObj1 ={
    title: "JavaScript Tutorial - W3Schools",
    url: "https://www.w3schools.com./js/",
    description: "JavaScript is the programming language of HTML and the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced."
    
};
let searchObj2 ={
     title: "YouTube",
     url: "https://www.youtube.com/?hl=sv&gl=SE",
     description: "Se alla dina favoriter bland videor och musik, ladda upp originalinnehåll och dela allt med vänner, familj och hela världen på YouTube."
};

class SearchResultList  extends React.Component {
    render() {
        return <div>
            <SearchResult item={this.props.r1} />
            <SearchResult item={this.props.r2} />
            <SearchResult item={this.props.r3} />
            </div>;
    }
}
class SearchResult extends React.Component {
    render() {
        return   <div className="results">
        
        <a href={this.props.item.url}>{this.props.item.title}</a>
        <br/>
       <span className="green">{this.props.item.url}
    </span>
       <br/>
       <span>{this.props.item.description}</span>
    </div>;
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
}
//     Skapa en komponent med två knappar, med texten "öka" och "minska". Den ska också skriva ut värdet 1. När man //     klickar på någon knapp ska värdet ändras.

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
    }
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

class Value extends React.Component {
    render() {
        
        return (
          <span>Värdet är: {this.props.txt}</span>
        );
    }
}



ReactDOM.render( 
    
    <SearchResultList  r1={searchObj1} r2={searchObj2} r3={searchObj2} />,
    //<Login />,
    //<MyButtons msg/>,
    document.getElementById("container")
);
console.log("hello world");
