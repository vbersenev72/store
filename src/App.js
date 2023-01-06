import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Cart from "./components/pages/Cart";
import ProductsPage from "./components/pages/ProductsPage";


import "./App.css"
import { useState } from "react";
import About from "./components/pages/About";


function App() {

  const products = [
    {
      id: 1,
      name: "Комплект постельного белья MITTE Helmut",
      price: 100.00,
      type: "product",
      img: "https://cdn.retailrocket.ru/api/1.0/partner/5224c7b10d422d1c782cbc47/item/80512095/picture/?format=png&width=724&height=478&scale=both",
      description: "Элегантный комплект постельного белья в любой спальне создаст ощущение тепла и уюта. Мягкие тона рисунка действуют расслабляющее и помогают полноценно отдохнуть. Сшитое из 100% хлопка и украшенное оригинальным узором, постельное белье соответствует мировым стандартам качества и станет превосходным вариантом для повседневного использования. Благодаря натуральным материалам и надежным красителям, комплект приятен на ощупь, надолго сохраняет свежесть цвета даже при частых стирках, отлично впитывает влагу, пропускает воздух и стоек к износу.",
      favorite: false
    },
    {
      id: 2,
      name: "Анатомическая подушка MITTE Standart",
      price: 150.00,
      type: "product",
      img: "https://cdn.retailrocket.ru/api/1.0/partner/5224c7b10d422d1c782cbc47/item/80347942/picture/?format=png&width=724&height=478&scale=both",
      description: "Подушка Standart сделает сон более крепким, а засыпание – быстрым. Анатомический валик способствует принятию правильной позы во время сна на боку и спине, помогает разгрузить мышцы шеи и плечевого пояса. Изделие изготовлено из вязкоэластичного пенополиуретана, который под воздействием веса спящего человека принимает форму, соответствующую анатомическим изгибам. Материал не сбивается и не сплющивается, ничем не пахнет, не создает условий для размножения пылевых клещей.",
      favorite: false
    },
    {
      id: 3,
      name: "Плед IMPRESS Graphite 200х220 см",
      price: 50.00,
      type: "product",
      img: "https://cdn.retailrocket.ru/api/1.0/partner/5224c7b10d422d1c782cbc47/item/80438774/picture/?format=png&width=724&height=478&scale=both",
      description: "Плед бренда IMPRESS создан для того, чтобы счастливых мгновений в вашей жизни стало больше. Он лёгкий, почти невесомый, но при этом отлично согревает. Нежная, мягкая и слегка шелковистая поверхность похожа на плюш и приятна на ощупь. Модель изготовлена из практичного полиэстера, прослужит долго и сохранит фактуру после неоднократных стирок в деликатном режиме. Удобно, что изделие можно компактно сложить — и оно не займёт много места в шкафу или комоде. Выразительный и в то же время неагрессивный, ласкающий взгляд оттенок дополнит приятные ощущения, которые вы получите, укутываясь в этот плед.",
      favorite: false
    },
    {
      id: 4,
      name: "Покрывало IMPRESS Dastan",
      price: 30.00,
      type: "product",
      img: "https://cdn.retailrocket.ru/api/1.0/partner/5224c7b10d422d1c782cbc47/item/80374326/picture/?format=png&width=724&height=478&scale=both", 
      description: "Комплект однотонного постельного белья MITTE приятного оттенка будет хорошо гармонировать с любым цветовым решением спальни. Это отличный подарок близким и практичное приобретение для собственного дома. В комплект входит простыня, пододеяльник и две наволочки 50х70 см. Натуральный хлопок приятен на ощупь, обладает высокой впитывающей способностью, не вызывает раздражения и дискомфорта у людей с чувствительной кожей. Ткань достаточно плотная, сохраняет первоначальный внешний вид и форму даже после многократных стирок.",
      favorite: false
    },
    {
      id: 5,
      name: "Одеяло MITTE 212 140х205 см",
      price: 250.00,
      type: "product",
      img: "https://cdn.retailrocket.ru/api/1.0/partner/5224c7b10d422d1c782cbc47/item/80323924/picture/?format=png&width=724&height=478&scale=both",
      description: "Легкое и удобное одеяло обеспечит комфорт во время ночного сна и отдыха. Изделие выполнено из 100% полиэстера — практичного и долговечного материала, не вызывающего аллергических реакций. Полистеровые одеяла хорошо держат форму, не требуют дорогостоящего ухода и не впитывают посторонних ароматов. Структура, состоящая из полиэстера и воздуха, прекрасно сохраняет тепло.",
      favorite: false
    },
    {
      id: 6,
      name: "Чехол для матраса натяжной Linen Way 160х200 см",
      price: 300.00,
      type: "product",
      img:"https://cdn.retailrocket.ru/api/1.0/partner/5224c7b10d422d1c782cbc47/item/80512044/picture/?format=png&width=724&height=478&scale=both",
      description: "Подушка Standart сделает сон более крепким, а засыпание – быстрым. Анатомический валик способствует принятию правильной позы во время сна на боку и спине, помогает разгрузить мышцы шеи и плечевого пояса. Изделие изготовлено из вязкоэластичного пенополиуретана, который под воздействием веса спящего человека принимает форму, соответствующую анатомическим изгибам. Материал не сбивается и не сплющивается, ничем не пахнет, не создает условий для размножения пылевых клещей.",
      favorite: false
    },
    {
      id: 7,
      name: "Набор посуды BERKRAFT Maximus",
      price: 300.00,
      type: "product",
      img: "https://cdn.retailrocket.ru/api/1.0/partner/5224c7b10d422d1c782cbc47/item/80341620/picture/?format=png&width=724&height=478&scale=both",
      description: "Набор кастрюль Maximus удовлетворит все потребности в посуде для варки, тушения, припускания. В сет входят 3 кастрюли разного объема, позволяющие приготовить суп или кашу для большой семьи, сварить спагетти, овощи для салата, яйца на завтрак. Все изделия укомплектованы крышками из жаропрочного прозрачного стекла: их можно не поднимать, чтобы следить за процессом кипения воды и приготовления блюд. Дополнительные преимущества комплекта – совместимость с индукционными плитами и стильный дизайн.",
      favorite: false
    },
    {
      id: 8,
      name: "Столовый набор Luminarc Louis",
      price: 250.00,
      type: "product",
      img: "https://cdn.retailrocket.ru/api/1.0/partner/5224c7b10d422d1c782cbc47/item/80525521/picture/?format=png&width=724&height=478&scale=both",
      description: "Набор кастрюль Maximus удовлетворит все потребности в посуде для варки, тушения, припускания. В сет входят 3 кастрюли разного объема, позволяющие приготовить суп или кашу для большой семьи, сварить спагетти, овощи для салата, яйца на завтрак. Все изделия укомплектованы крышками из жаропрочного прозрачного стекла: их можно не поднимать, чтобы следить за процессом кипения воды и приготовления блюд. Дополнительные преимущества комплекта – совместимость с индукционными плитами и стильный дизайн.",
      favorite: false
    }
  ]
  const [cart, setCart] = useState([])

  const [ModalActive, setModalActive] = useState(false)
  const [contentModal, setContentModal] = useState({
    name:'', description:'', price:''
  })




  // Метод добавления товара в корзину
  const AddToCart = (item) => {
    let isInCart = false

    // Проверяем - если внутри массива cart есть элемент равный item, то срабатывает флаг isInCart
    cart.forEach(el => {
      if(el.id === item.id){
        isInCart = true
      }
    })

    // Если флаг isInCart не сработал - значит затаскиваем элемент в корзину
    if(!isInCart){
      setCart([
        ...cart, item
      ])
    }
  }




  // Метод удаления товара из корзины
  const DeleteFromCart = (id) => {
    setCart(cart.filter(el => el.id !== id))   
  }




  


  return (
    <div className="App">
      <Header/>

      <Routes>
        <Route path="/" element={<About/>}/>
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} DeleteFromCart={DeleteFromCart} ModalActive={ModalActive} setModalActive={setModalActive} contentModal={contentModal} setContentModal={setContentModal}/>}/>
        <Route path="/products" element={<ProductsPage products={products} AddToCart={AddToCart} ModalActive={ModalActive} setModalActive={setModalActive} contentModal={contentModal} setContentModal={setContentModal}/>}/>
      </Routes>
    </div>
  );
}

export default App;
