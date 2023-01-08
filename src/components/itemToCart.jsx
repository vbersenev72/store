
import { Button, Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material"



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
            <Card>

            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    {props.name}
                    </Typography>
                </CardContent>
            </CardActionArea>

            <CardActions>
                    <Button variant="contained" color="primary" onClick={() => {DeleteFromCart(props.id)}}>Delete</Button>
                    <Button variant="contained" color="primary" onClick={() => {
                        setModalActive(true)
                        ChangeModal(props)
                    }}>view</Button>
            </CardActions>

            </Card>
        </div>
        
    )
}

export default ItemToCart