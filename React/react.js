


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
        console.log("setState ändrar innehåll " + event.target.value);
    }
    render() {
    
        return <div className="result">
            <span>{this.state.text}</span>
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
            <GetResult handleKeyUp={this.handleKeyUp1} count={this.state.result1 * this.state.result2} />
            <GetResult handleKeyUp={this.handleKeyUp2} count={this.state.result2 * this.state.result1} />
        </div>
        );
    }
    
    
}
function GetResult(props) {
    return <div>
        
        <input type="text" onKeyUp={props.handleKeyUp} placeholder="Type any number"></input>
        <span>{props.count}</span>
    </div>;
    
}
/////////////////////////////////////////////////////





class ClickBtn extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            
            text: ''
        }
        this.firstbtn = this.firstbtn.bind(this);
        this.secbtn = this.secbtn.bind(this);
       
    }
    firstbtn(event) {
        this.setState({
            text: "First button pressed"
        })
    }
    secbtn(event) {
        this.setState({
            text: "Second button pressed"
        })
    }
    
    render() {
        return (
            <div className="thirdPart">
            <button onClick={this.firstbtn} style={styles.blue}>First button</button>
            <button onClick={this.secbtn} >Second button</button>
            <br/>
            <span>{this.state.text}</span>
            </div>
            );
    
    }
}

class ColorPicker extends React.Component {
    render() {
        const styles = reactCSS({
            'deafault': {
                blue: {
                    color: 'blue',
                },
                color: 'red',
            }
        })
    }
}

/*const Styles = StyleSheet.create({
        blue: {
            backgroundColor: 'blue',
            
        }
    });
*/
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
