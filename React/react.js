
export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            text: 'Wellcome',
        };
    }
    
    changeText(text) {
        this.setState({text});
    }
    render() {
        return <div>
            <p changeText={this.changeText.bind(this)} text={this.state.text}></p>
            
            </div>
    }
}
