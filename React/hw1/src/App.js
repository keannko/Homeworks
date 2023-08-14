import { Component } from "react";
import "./App.scss";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import s from "./components/Modal/Modal.module.scss"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: false,
      isOpenedSecondWindow: false,
    };
  }

handleOpenFirstModal = (state=true) => {
  this.setState({
    isOpened: state
  })
}

handleOpenSecondModal = (state=true) => {
  this.setState({
    isOpenedSecondWindow: state
  })
}

actionsDataFirstModal = () => {
  return(
    <>
    <button className={s.modalWindow__buttons_button} onClick={() => this.handleOpenFirstModal(false)}>Ok</button>
    <button className={s.modalWindow__buttons_button} onClick={() => this.handleOpenFirstModal(false)}>Cancel</button>
    </>
  )
}

actionsDataSecondModal = () => {
  return(
    <>
    <button className={s.modalWindow__buttons_button} onClick={() => this.handleOpenSecondModal(false)}>Принять</button>
    <button className={s.modalWindow__buttons_button} onClick={() => this.handleOpenSecondModal(false)}>Отмена</button>
    </>
  )
}

firstModalData = {
  header: "Do you want to delete this file?", 
  closeButton: true, 
  text:`Once you delete this file, it won't be possible to undo this action.<br> Are you sure you want to delete it?`,
  actions: this.actionsDataFirstModal(),
}

firstButtonData = {
  backgroundColor: "yellow", 
  text:'Open first modal',
  onClick: this.handleOpenFirstModal,
}

secondModalData = {
  header: "Вы хотите удалить этот файл?", 
  closeButton: true, 
  text:`После удаления этого файла, у вас не будет возможности восстановления.<br> Вы уверены что хотите удалить выбранный файл?`,
  actions: this.actionsDataSecondModal(),
}

secondButtonData = {
  backgroundColor: "lightgreen", 
  text: 'Открыть второе окно',
  onClick: this.handleOpenSecondModal,
}

  render() {
    return (
      <div className="wrapper">
        <Button first={this.firstButtonData} second={this.secondButtonData}/>
        <Modal data={this.firstModalData} closed={this.handleOpenFirstModal}  opened={this.state.isOpened} />
        <Modal data={this.secondModalData} closed={this.handleOpenSecondModal}  opened={this.state.isOpenedSecondWindow} />
      </div>
    );
  }
}

export default App;
