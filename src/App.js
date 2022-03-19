import { useReducer } from 'react'
import './App.css'

/**
 *
 * @param {*} state
 * @param {*} action
 * @returns
 * React will pass the current state and the action to your reducer function.
 * Your reducer will calculate and return the next state.
 * React will store that next state, render your component with it, and update the UI.
 */
function reducer (state, action) {
  /**
   * Actions can have any shape. By convention, it’s common to pass objects with a 'type' property
   * identifying the action. It should include the minimal necessary information that the
   * reducer needs to compute the next state.
   */

  /**
   * A 'switch' statement works much faster than an equivalent 'if-else' ladder.
   * It’s because the compiler generates a jump table for a switch during compilation.
   * As a result, during execution, instead of checking which case is satisfied,
   * it only decides which case has to be executed.
   * It’s more readable compared to if-else statements.
   */
  console.log('action', action, 'state', state)
  switch (action.type) {
    case 'increment_age': {
      return {
        name: state.name,
        age: state.age + 1
      }
    }
    case 'changed_name': {
      return {
        name: action.nextName,
        age: state.age
      }
    }
  }
  throw new Error('Unknown action: ' + action.type)
}

/**
 * useReducer is very similar to useState, but it lets you move the state update logic
 * from event handlers into a single function outside of your component.
 */

/**
 * useReducer returns an array with exactly two items:
 * 1. The current state of this state variable, initially set to the initial state you provided.
 * 2. The dispatch function that lets you change it in response to interaction.
 */

const initialState = { name: 'Arif', age: 40 }

function App () {
  const [state, dispatch] = useReducer(reducer, initialState)

  /**
   * dispatch functions:
   * The dispatch function returned by useReducer lets you update the state to a
   * different value and trigger a re-render. You need to pass the action as the
   * only argument to the dispatch function:
   */
  function handleInputChange (e) {
    dispatch({
      type: 'changed_name',
      nextName: e.target.value
    })
  }

  function handleButtonClick () {
    // To update what’s on the screen, call dispatch with an object representing what the user did, called an action:
    dispatch({ type: 'increment_age' })
  }

  return (
    <>
      <input value={state.name} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Icrement Age</button>
      <p>
        Hello, {state.name} you are {state.age}
      </p>
    </>
  )
}

export default App
