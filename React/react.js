
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
        this.inputTest = this.inputTest.bind(this);
    }
     
        inputTest(event) {
            this.setState({
                text: event.target.value
            })
            
        }
    render() {
        return (
			console.log("here i am!")
            <div>
              
            </div>
		);
    }
    
}

ReactDOM.render(
document.getElementById('app');
)
console.log("hello world");
