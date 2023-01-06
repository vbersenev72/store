import ItemToCart from "../itemToCart"

import ModalItem from "../modals/modalItem"

const showCart = ({cart, DeleteFromCart, ModalActive, setModalActive, contentModal, setContentModal}) => {
// Продублировать пропсы ниже - в компонент Cart !!!!!!         (чисто для себя инфа - я уже путаться начал)

    return(
        <div>
                <ModalItem ModalActive={ModalActive} setModalActive={setModalActive} contentModal={contentModal} setContentModal={setContentModal}/>
            {cart.map(item => (
                <div key={item.id}>
                    <ItemToCart props={item} DeleteFromCart={DeleteFromCart} ModalActive={ModalActive} setModalActive={setModalActive} contentModal={contentModal} setContentModal={setContentModal}/>
                </div>
            
            ))}
        </div>   
    )
}

const showNothing = () => {
    return(
    <div className="flex justify-center items-center text-2">
        Cart is nothing
    </div>
    )
    
}

const Cart = ({cart, DeleteFromCart, ModalActive, setModalActive, contentModal, setContentModal}) => {
    return (
    <div>
        {cart.length > 0 ? showCart({cart, DeleteFromCart, ModalActive, setModalActive, contentModal, setContentModal}) : showNothing()} {/*Проверяем пустая ли корзина, если количество элементов в массиве cart больше нуля - тогда выводим cart. Иначе - выводим showNothing()*/}
    </div>
    )
}

export default Cart