const ItemToCart = ({props, DeleteFromCart, ModalActive, setModalActive, setContentModal, contentModal}) => {

    const ChangeModal = (item) => {
        setContentModal({
            img: item.img,
            name: item.name,
            description: item.description,
            price: item.price
        })
    }


    return (
            <div className="item">
                <h1>{props.name}</h1>
                <h1>{props.price}</h1>
                <button onClick={() => DeleteFromCart(props.id)} className="bg-black text-white p-1">delete</button>
                <button onClick={() => {
                    setModalActive(true)
                    ChangeModal(props)
                    }} className="border-2 border-black hover:bg-amber-400">||Check||</button>
            </div>
    )
}

export default ItemToCart