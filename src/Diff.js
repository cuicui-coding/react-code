import React from 'react'

export default class extends React.Component {
  state = {
    list: [
      { key: 1, value: 1 },
      { key: 2, value: 2 },
      { key: 3, value: 3 },
    ],
  }

  handleChange = () => {
    this.setState({
      list: [ {key: 2, value: 22}, { key: 3, value: 333 }, { key: 3, value: 3333 }],
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleChange}>点击我</button>
        {this.state.list.map(({ key, value }) => (
          <p key={key}>
            key:{key}, value:{value}, <input />
          </p>
        ))}
      </div>
    )
  }
}
