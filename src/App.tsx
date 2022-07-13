import { Container, Input, Row, Spacer, Table } from '@nextui-org/react';
import { useReducer, useState } from 'react'

export enum ActionTypes {
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
    <Container className="App" display='flex' direction='column' justify='center' css={{
      height: '100vh'
    }}>
      <Row css={{
      }}
      >
        <Input labelPlaceholder='Input your Task' />
      </Row>
      <Spacer y={1}/>
      <Row>
        <Table
          bordered
          shadow={false}
          selectionMode="multiple"
          aria-label="Example static bordered collection table"
          css={{
            height: "auto",
            minWidth: "100%",
          }}
        >
          <Table.Header>
            <Table.Column>NAME</Table.Column>
            <Table.Column>ROLE</Table.Column>
            <Table.Column>STATUS</Table.Column>
          </Table.Header>
          <Table.Body>
            <Table.Row key="1">
              <Table.Cell>Tony Reichert</Table.Cell>
              <Table.Cell>CEO</Table.Cell>
              <Table.Cell>Active</Table.Cell>
            </Table.Row>
            <Table.Row key="2">
              <Table.Cell>Zoey Lang</Table.Cell>
              <Table.Cell>Technical Lead</Table.Cell>
              <Table.Cell>Paused</Table.Cell>
            </Table.Row>
            <Table.Row key="3">
              <Table.Cell>Jane Fisher</Table.Cell>
              <Table.Cell>Senior Developer</Table.Cell>
              <Table.Cell>Active</Table.Cell>
            </Table.Row>
            <Table.Row key="4">
              <Table.Cell>William Howard</Table.Cell>
              <Table.Cell>Community Manager</Table.Cell>
              <Table.Cell>Vacation</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Row>
    </Container>
  )
}

export default App
