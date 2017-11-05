import React, { Component } from 'react'
import PropTypes from 'prop-types'
import c3 from 'c3'

import './donut_chart.css'

class DonutChart extends Component {
  componentDidMount () {
    this.chart = c3.generate({
      bindto: this.donutChart,

      data: {
        columns: this.props.columns,
        type: 'donut'
      },

      tooltip: {
        show: false
      },

      donut: {
        title: '👍',
        label: {
          format: function (value, ratio, id) {
            return value
          }
        }
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
      <div ref={c => { this.donutChart = c }} />
    )
  }
}

DonutChart.propTypes = {
  columns: PropTypes.array
}

export default DonutChart
