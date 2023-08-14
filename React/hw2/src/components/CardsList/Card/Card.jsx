import s from "./Card.module.scss";
import Button  from "../../Button/Button";
import Modal from "../../Modal/Modal";
import { useState } from "react";


const Card = (props) => {
  const [isOpend, setStatus] = useState(false);

  const statusModal = (state=true) => {
    setStatus(state)
    console.log(isOpend)
  }

const data = {
    textAdd: 'Add to cart',
    textBuy: 'Buy now',
}

const handleOpenFirstModal = (state=true) => {
  setStatus({
    isOpened: state
  })
}

const actionsDataFirstModal = () => {
  return(
    <>
    <button className={s.modalWindow__buttons_button} onClick={() => handleOpenFirstModal(false)}>Ok</button>
    <button className={s.modalWindow__buttons_button} onClick={() => handleOpenFirstModal(false)}>Cancel</button>
    </>
  )
}

const firstModalData = {
  header: "Добавление товара в корзину", 
  closeButton: true, 
  text:`Подтвердите действие`,
  actions: actionsDataFirstModal(),
}

if(!!isOpend) {
  return (
    <Modal  data={firstModalData} closed={handleOpenFirstModal} />
  )}else{
    return (
      <>
      <div key={props.product.id} className={s.card}>
        <div>
            <img src={props.product.image_url} alt={props.product.title} />
            <h3>{props.product.name}</h3>
            <h4>Ціна: {props.product.price}</h4>
        </div>
        <div>
            <Button data={data} status={statusModal}/>
            <div className={s.card__info}>
                <p>Код: {props.product.article}</p>
                <p>Колір: {props.product.color}</p>
            </div>
        </div>
      </div>
      </>
    )
  }
};

export default Card;
