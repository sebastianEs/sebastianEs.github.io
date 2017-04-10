

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

class ThreeSearchResults extends React.Component {
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
        return   <div className="searchResult">
        
        <a href={this.props.item.url}>{this.props.item.title}</a>
        <br/>
       <span className="green">{this.props.item.url}
    </span>
       <br/>
       <span>{this.props.item.description}</span>
    </div>;
    }
}

class Login extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
           isToggleOn: true
       };
       this.handleClick = this.handleClick.bind(this);
   }
    handleClick(event) {
        this.setState( prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }
    render() {
        return <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'Sign In' : 'Sign Out'}
        </button>
    }
}

ReactDOM.render( 
    
    <ThreeSearchResults r1={searchObj1} r2={searchObj2} r3={searchObj2} />,
     <Login />,
    document.getElementById('app')
);
console.log("hello world");
