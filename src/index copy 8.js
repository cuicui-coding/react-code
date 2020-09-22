import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import GridLayout, { WidthProvider, Responsive } from 'react-grid-layout'

const ResponsiveGridLayout = WidthProvider(Responsive)

class MyFirstGrid extends React.Component {

  onLayoutChange = (layout, layouts)=> {
    console.log(layout, layouts, 'onLayoutChange')
  }

  render() {
    const layout = [
      {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
      {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
      {i: 'c', x: 4, y: 0, w: 1, h: 2}
    ];
    return (
      <ResponsiveGridLayout
        className="layout"
        layout={layout }
        cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}
        rowHeight={30}
        // width={1200}
        breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
        onLayoutChange={(layout, layouts) =>
          this.onLayoutChange(layout, layouts)
        }

      >
        <div key="a" style={{ background: 'green' }}>
          a
        </div>
        <div key="b" style={{ background: 'yellow' }}>
          b
        </div>
        <div key="c" style={{ background: 'pink' }}>
          c
        </div>
      </ResponsiveGridLayout>
    )
  }
}

ReactDOM.render(<MyFirstGrid />, document.getElementById('root'))
