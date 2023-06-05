import React from 'react'
import './WidgetLg.css'


const WidgetLg = () => {
  const Button=({type})=>{
    return <button className={"WidgetLgButton " + type }>{type}</button>
  }
  return (
    <div className='WidgetLg'>
      <h3 className="WidgetLgTitle">Lastest Transactions</h3>
      <table className="WidgetLgTable">
        <tbody>
        <tr className="WidgetLgTr">
          <th className="WidgetLgTh">Customer</th>
          <th className="WidgetLgTh">Date</th>
          <th className="WidgetLgTh">Amount</th>
          <th className="WidgetLgTh">Status</th>
        </tr>
        <tr>
          <td className='WidgetLgUser'>
            <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="" className="WidgetLgImg" />
              <span className="WidgetLgName">Susen Carol</span>
          </td>
          <td className="WidgetLgDate">2 june</td>
          <td className="WidgetLgAmount">$2,345</td>
          <td className="WidgetLgStatus"><Button type="Approved"/></td>
        </tr>
        <tr>
          <td className='WidgetLgUser'>
            <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="" className="WidgetLgImg" />
              <span className="WidgetLgName">Susen Carol</span>
          </td>
          <td className="WidgetLgDate">2 june</td>
          <td className="WidgetLgAmount">$2,345</td>
          <td className="WidgetLgStatus"><Button type="Declined"/></td>
        </tr>
        <tr>
          <td className='WidgetLgUser'>
            <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="" className="WidgetLgImg" />
              <span className="WidgetLgName">Susen Carol</span>
          </td>
          <td className="WidgetLgDate">2 june</td>
          <td className="WidgetLgAmount">$2,345</td>
          <td className="WidgetLgStatus"><Button type="Pending"/></td>
        </tr>
        <tr>
          <td className='WidgetLgUser'>
            <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="" className="WidgetLgImg" />
              <span className="WidgetLgName">Susen Carol</span>
          </td>
          <td className="WidgetLgDate">2 june</td>
          <td className="WidgetLgAmount">$2,345</td>
          <td className="WidgetLgStatus"><Button type="Approved"/></td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default WidgetLg