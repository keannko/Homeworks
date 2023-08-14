import { Component } from "react";
import s from "./Modal.module.scss";

class Modal extends Component {
  constructor(props) {
    super(props);
  }

  handleButtonClick = () => {
    this.props.closed(false);
  };

  displayExitbutton = () => {
    const closeButton = this.props.data.closeButton;
      return (
        <>
        {!!closeButton &&(
          <div className={s.close} onClick={this.handleButtonClick}></div>
        )
        }
        </>
      )
  }

  handleModalClick = (event) => {
    if (event.target.classList.contains(s.modalWrap)) {
      this.props.closed(false);
    }
  };

  render() {
    return (
      <>
        {!!this.props.opened && (
          <div className={s.modalWrap} onClick={this.handleModalClick}>
            <div className={s.modalWindow}>
              <div className={s.modalWindow__title}>
                <p>{this.props.data.header}</p>
                {this.displayExitbutton()}
              </div>
              <div className={s.modalWindow__content}>
                <p dangerouslySetInnerHTML={{__html: `${this.props.data.text}`}}></p>
              </div>
              <div className={s.modalWindow__buttons}>
                {this.props.data.actions}
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Modal;
