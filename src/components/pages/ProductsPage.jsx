import ItemCard from "../itemCard"
import ModalItem from "../modals/modalItem"
import "../styles/productsPage.css"


function ProductsPage({products, AddToCart, ModalActive, setModalActive, contentModal, setContentModal}) {
    return (

        <div className="products-list">
            <ModalItem ModalActive={ModalActive} setModalActive={setModalActive} contentModal={contentModal} setContentModal={setContentModal}/>
        {products.map(item => (
            <div key={item.id}>
                <ItemCard props={item} AddToCart={AddToCart} ModalActive={ModalActive} setModalActive={setModalActive} contentModal={contentModal} setContentModal={setContentModal}/>
            </div>

        ))}
        </div>
        
    )
}

export default ProductsPage