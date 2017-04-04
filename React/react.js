window.addEventListener('load', function() {
  
  class UserText extends React.Component {
	  constructor(props) {
		  super(props);
          this.state = {
			  text: props.value
		  };	  
		 this.myInput =this.myInput.bind(this);
	  }
	  myInput(event) {
		  this.setState({text: target.state.value});
		  
	  };
	  //console.log("myinput körs" + myInput());
	  render() {
		  return (
		  <div>
		  <input type="text" id="myInput" {this.myInput}/>
		  <div>Svar: {this.state.value}</div>
		  </div>
		  console.log("inside render")
		 );
		 
	  }
	  ReactDOM.render(
	  document.getElementById('app');
	  console.log("ReactDOM.render")
	  )
  }
});