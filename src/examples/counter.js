class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            number: 0
        }

    }
    addOne() {
        this.setState((prevState) => {
            return {
                number: prevState.number +1
            }
        })
    }
    minusOne() {
        this.setState((prevState) => {
            return {
                number: prevState.number -1
            }
        })
    }
    reset() {
        this.setState({
            number: 0
        })
        
    }

    render() {
        return (
            <div>
                <h1>Number: {this.state.number}</h1>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }
}
ReactDOM.render(<Counter />, document.getElementById('root'));

// ES5:
// var root = document.getElementById('root');

// var number = 0;
// var btnOneClassName = "btnRed";
// var btnMinusClassName = "btnBlue";

// function addOne() {
//     number++;
//     renderApp();
//     console.log('Add one');
// }
// var minusOne = () => {
//     number--;
//     renderApp();
//     console.log('Minus one');
// }

// function renderApp() {
//     var template2 = (
//         <div>
//             <h1>Number: {number}</h1>
//             <button id="btnPlusOne" className={btnOneClassName} onClick={addOne}>+1</button>
//             <button id="btnMinusOne" className={btnMinusClassName} onClick={minusOne}>-1</button>
//         </div>
//     );

//     ReactDOM.render(template2, root);
// }

// function tick() {
//     var element = (
//         <div>
//             <h2>Time is: {new Date().toLocaleTimeString()}</h2>
//         </div>
//     );

//     ReactDOM.render(element, root);
// }

// setInterval(tick, 1000);
// // renderApp();