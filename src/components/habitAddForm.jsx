import React, { memo } from 'react' // PureComponent와 같다.

const HabitAddForm = memo(props => {
    const formRef = React.createRef();
    const inputRef = React.createRef();

    const onSubmit = (e) => {
        e.preventDefault();
        const name = inputRef.current.value;
        name && props.onAdd(name);

        // inputRef.current.value = "";
        formRef.current.reset();
    }
    console.log('HabitAddForm');

    return (
        <form ref={formRef} className='form' onSubmit={onSubmit}>
            <input ref={inputRef} className='add-input' type="text" placeholder='Habit' />
            <button className="add-button">Add</button>
        </form>
    )
});

// function HabitAddForm (props) {
//     const formRef = React.createRef();
//     const inputRef = React.createRef();

//     const onSubmit = (e) => {
//         e.preventDefault();
//         const name = inputRef.current.value;
//         name && props.onAdd(name);

//         // inputRef.current.value = "";
//         formRef.current.reset();
//     }
//     console.log('HabitAddForm');

//     return (
//         <form ref={formRef} className='form' onSubmit={onSubmit}>
//             <input ref={inputRef} className='add-input' type="text" placeholder='Habit' />
//             <button className="add-button">Add</button>
//         </form>
//     )
// }

export default HabitAddForm