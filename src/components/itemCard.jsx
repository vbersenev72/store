import "../App.css"

const ItemCard = ({props, AddToCart, ModalActive, setModalActive, contentModal, setContentModal}) => {

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

            <button onClick={() => {AddToCart(props)}} className="border-2 border-black hover:bg-amber-400">||Save||</button>
            <button onClick={() => {
                setModalActive(true)
                ChangeModal(props)
            }} className="border-2 border-black hover:bg-amber-400">||Check||</button>
        </div>
        
    )
}

export default ItemCard
