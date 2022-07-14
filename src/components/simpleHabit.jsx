import React, { useCallback, useState, useRef, useEffect } from 'react'

const SimpleHabit = (props) => {
    const [ count, setCount ] = useState(0);
    // const spanRef = React.createRef();
    const spanRef = useRef();

    const handleIncrement = useCallback(() => {
        setCount( count + 1 );
    });

    useEffect(() => {
        console.log(`mounted & updated!: ${count}`);
    }, [count]);
    // 카운트가 별경될때 마다 호출된다. [] 비어있을 경우 한번만 호출한다. (componentDidMount & componentDidUpdate 를 같이 사용하는 것과 같다.)

    return (
        <li className="habit">
            <span ref={spanRef} className="habit-name">Reading</span>
            <span className="habit-count">{count}</span>
            <button 
                className="habit-button habit-increase"
                onClick={handleIncrement}
            >
                <i className="fas fa-plus-square"></i>
            </button>

        </li>
    )
}

export default SimpleHabit

// import React, { Component } from 'react'

// export class SimpleHabit extends Component {
//     state = { count: 0 };

//     handleIncrement = () => {
//         this.setState({ count: this.state.count + 1 });
//     };

//     render() {
//         return (
//             <li className="habit">
//                 <span className="habit-name">Reading</span>
//                 <span className="habit-count">{this.state.count}</span>
//                 <button 
//                     className="habit-button habit-increase"
//                     onClick={this.handleIncrement}
//                 >
//                     <i className="fas fa-plus-square"></i>
//                 </button>

//             </li>

//         )
//     }
// }

// export default SimpleHabit
