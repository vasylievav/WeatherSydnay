import React from 'react';
import Axios from 'axios';

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state ={
      weatherSydney:[]
    }
  };

  async componentDidMount () {
    try{
     const dataToShow =  await Axios.get('/api/weatherSydney')
        this.setState({weatherSydney: dataToShow.data})
      }
    catch (error) {
      console.log(error)
    }
  }
  render(){
    return (
      <div className="App">
      <h1>Sydney Temperatures</h1>
      <table>
          <thead>
            <tr className="table-header">
              <th>Date</th>
              <th>Max</th>
              <th>Min</th>
            </tr>
          </thead>
          <tbody>
            {this.state.weatherSydney.map((date, idx) =>{
              return(
                <tr key={date.idx}>
                  <td>{date.Date}</td>
                  <td>{date.Max}</td>
                  <td>{date.Min}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

export default App;