import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import c3 from 'c3'

class DonutChart extends Component {
  componentDidMount () {
    this.chart = c3.generate({
      bindto: ReactDOM.findDOMNode(this.refs.chart),

      data: {
        columns: this.props.columns,
        type: 'donut'
      },

      donut: {
        title: 'Рейтинг постов'
      }
    })
  }

  componentWillUnmount () {
    this.chart.destroy()
  }

  componentWillReceiveProps (newProps) {
    this.chart.load({
      columns: newProps.columns
    })
  }

  render () {
    return (
      React.createElement('div', { ref: 'chart' })
    )
  }
}

DonutChart.propTypes = {
  columns: PropTypes.array
}

export default DonutChart
