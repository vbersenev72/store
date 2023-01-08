import "../App.css"


import { Button, Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material"

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
            <Card>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h1">
                        {props.name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                    <CardActions>
                        <Button variant="contained" color="primary" onClick={() => {AddToCart(props)}}>to Cart</Button>
                        <Button variant="contained" color="primary" onClick={() => {
                            setModalActive(true)
                            ChangeModal(props)
                        }}>view</Button>
                    </CardActions>

            </Card>
        </div>
        
        
    )
}

export default ItemCard
