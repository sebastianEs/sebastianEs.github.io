


//    första delen i applicatonen
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Wellcome',
        };
        this.changeText = this.changeText.bind(this)
    }
    
    changeText(event) {
        this.setState({text: event.target.value});
    }
    render() {
    
        return <div className="result">
            <h1>React Application</h1>
            <p>please enter your name</p>
            <span className="text">{this.state.text}</span>
            <input onChange={this.changeText} placeholder="Your name" />
            
            </div>
    }
}
//      Andra delen i applicationen

class Numbers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result1: 0,
            result2: 0,
            
            
        };
        this.handleKeyUp1 = this.handleKeyUp1.bind(this);
         this.handleKeyUp2 = this.handleKeyUp2.bind(this);
    }
    handleKeyUp1(event) {
        this.setState({
            result1: event.target.value 
        })
    }
    handleKeyUp2(event) {
        this.setState({
            result2: event.target.value 
        })
    }
    
    render() {
        return (
        <div className="numbers">
            <h1>Calculate numbers</h1>
            <p>Type any number in the input fields</p>
            <div className="inptWrapper">
            <GetResult handleKeyUp={this.handleKeyUp1} placeholder="firstnumber" count={this.state.result1 * this.state.result2} />
            <GetResult handleKeyUp={this.handleKeyUp2} placeholder="secondnumber" count={this.state.result2 * this.state.result1} />
            </div>
        </div>
        );
    }
    
    
}
function GetResult(props) {
    return <div>
        
        <input type="text" onKeyUp={props.handleKeyUp}></input>
        <span>{props.count}</span>
    </div>;
    
}
/////////////////////////////////////////////////////





class ClickBtn extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            text: '',
            color: 'blue'
            
        }
        this.handleFirstBtn = this.handleFirstBtn.bind(this);
        this.handleSecondBtn = this.handleSecondBtn.bind(this);
       
    }
    handleFirstBtn(event) {
        if( this.state.className === 'blue' ) {
        this.setState({ text: "First button pressed" })
        this.setState({className:"red"})
            } else  {
        this.state.className2='';
        this.setState({ text: "First button pressed" })
        this.setState({className:"blue"})
            }
    }
    handleSecondBtn(event) {
        
        if( this.state.className2 === 'blue' ) {
        this.setState({ text: "Second button pressed" })
        this.setState({className2:"red"})
            } else {
        this.state.className='';
        this.setState({ text: "Second button pressed" })
        this.setState({className2:"blue"})
            }
    }
   
    
    render() {
        return (
            <div className="buttonDiv">
            <p>click button to change color</p>
            <button onClick={this.handleFirstBtn} className={this.state.className}>First button</button>
            <button onClick={this.handleSecondBtn} className={this.state.className2} >Second button</button>
            <br/>
            <span>{this.state.text}</span>
            </div>
            );
    
    }
}



function Setup(){
    return(
        <div>
            <App/>
            <Numbers/>
            <ClickBtn/>
        </div>
    )
}
        



ReactDOM.render(
    <Setup/>,
    document.getElementById('app')
);
