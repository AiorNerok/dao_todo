import { useReducer, useState } from 'react'

enum ActionTypes {
  add = 'add',
  remove = 'remove',
  update = 'update',
  save = 'save',
  load = 'load',
}

interface ITask {
  id: number;
  desc: string;
  state: boolean;
  date: Date
}

interface ITodoState {
  list: ITask[]
}

interface IAction {
  type: ActionTypes,
  payload: any
}

let TodoState: ITodoState = {
  list: [{
    id: 1,
    date: new Date(),
    desc: 'test task',
    state: false
  }]
}

function reducer(state: ITodoState, { payload, type }: IAction): ITodoState {
  switch (type) {
    case ActionTypes.add:
      return { ...state }
    case ActionTypes.remove:
      return { ...state }
    case ActionTypes.update:
      return { ...state }
    case ActionTypes.save:
      return { ...state }
    case ActionTypes.load:
      return { ...state }                    
    default:
      return state
  }
}

function App() {

  let [state, dispatch] = useReducer(reducer, { ...TodoState })

  console.log(state)
  console.log(dispatch)

  return (
    <div className="App">
      work
    </div>
  )
}

export default App
