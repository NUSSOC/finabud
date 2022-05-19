class OtherClass extends Component {
  functionWithoutArg = () => {
    //function to be called from default class (without args)
    alert('Function Called Without Argument ');
  };
 
  functionWithArg = Value => {
    //function to called from default class (with args)
    alert(Value);
  };
}

export default OtherClass