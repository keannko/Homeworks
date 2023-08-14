import { Component } from 'react'
import s from './Button.module.scss';

class Button extends Component {
    constructor(props) {
      super(props)
    }

  render () {
    return (
      <div className={s.buttonsWrapper}>
          <button className={s.button} style={{backgroundColor: this.props.first.backgroundColor}} onClick={this.props.first.onClick}>{this.props.first.text}</button>
          <button className={s.button} style={{backgroundColor: this.props.second.backgroundColor}} onClick={this.props.second.onClick}>{this.props.second.text}</button>
      </div>
    )
  }
  
}

export default Button;