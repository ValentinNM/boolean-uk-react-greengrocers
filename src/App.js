import './styles/reset.css'
import './styles/index.css'
import { useState } from 'react'
// import

/*
Here's what a store item should look like
{
  id: '001-beetroot',
  name: 'beetroot',
  price: 0.35
}

What should a cart item look like? 🤔
*/

const initialStoreItems = [
  {
    id: '001-beetroot',
    name: 'beetroot',
    price: 0.35
  },
  {
    id: '002-carrot',
    name: 'carrot',
    price: 0.35
  },
  {
    id: '003-apple',
    name: 'apple',
    price: 0.35
  },
  {
    id: '004-apricot',
    name: 'apricot',
    price: 0.35
  },
  {
    id: '005-avocado',
    name: 'avocado',
    price: 0.35
  },
  {
    id: '006-bananas',
    name: 'bananas',
    price: 0.35
  },
  {
    id: '007-bell-pepper',
    name: 'bell pepper',
    price: 0.35
  },
  {
    id: '008-berry',
    name: 'berry',
    price: 0.35
  },
  {
    id: '009-blueberry',
    name: 'blueberry',
    price: 0.35
  },
  {
    id: '010-eggplant',
    name: 'eggplant',
    price: 0.35
  }
]

export default function App() {
  // Setup state here...

  const [storeItems, setStoreItems] = useState(initialStoreItems)
  const [cartItems, setCartItems] = useState([])
  const [total, setTotal] = useState(0)
  // console.log('storeItems: ', storeItems, 'cartItems: ', cartItems)

  // const addToCart = item => {
  const addToCart = storeItem => {
    console.log('inside add to cart :', storeItems, cartItems)

    let foundItem = false

    const updatingCartItems = cartItems.map(cartItem => {
      if (storeItem.id === cartItem.item.id) {
        const updatedCartItem = {
          ...cartItem,
          quantity: cartItem.quantity + 1
        }

        foundItem = true

        return updatedCartItem
      } else {
        return cartItem
      }
    })

    if (!foundItem) {
      const creatingCartItem = {
        item: storeItem,
        quantity: 1
      }

      console.log('Item not Found')

      setCartItems([...cartItems, creatingCartItem])
    } else {
      console.log('Updated Items: ', updatingCartItems)

      setCartItems(updatingCartItems)
    }
  }

  const decreaseQuantity = cartItem => {
    console.log('cartItem: ', cartItem)

    // cartItem.filter(quantity => )

    // const quantity = cartItems.filter()
    if (cartItem.quantity === 1) {
      cartItem.splice(1)
    } else {
      cartItem.quantity -= 1
    }
    // setCartItems()
  }

  const increaseQuantity = cartItem => {
    console.log('cartItem: ', cartItem)
    let quantity = 0
    cartItem.quantity += 1
    // if (cartItem.quantity !== 0) {
    //   const addQuant = {
    //     ...cartItem,
    //     quantity: cartItem.quantity + 1
    //   }
    // setCartItems(addQuant)
    // }
  }

  const cartTotal = price => {
    const totalAmount = cartItems.map(cartItem => {
      console.log('total cartItem: ', cartItem.item.price)

      let totalToUpdate = total

      totalToUpdate += cartItem.item.price

      setTotal(totalToUpdate)
    })
  }

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {
            /* Wrtite some code here... */
            storeItems.map((item, index) => {
              // console.log("item here is: ", item)
              return (
                <li key={index}>
                  <div className="store--item-icon">
                    <img
                      src={`../assets/icons/${item.id}.svg`}
                      alt={item.id}
                    ></img>
                  </div>
                  <button onClick={() => addToCart(item)}>
                    {/* {' '} */}
                    add to cart
                  </button>
                </li>
              )
            })
          }
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {
              /* Wrtite some code here... */
              cartItems.map((cartItem, storeItem) => {
                console.log('cartItem: ', cartItem)
                console.log('storeItem: ', storeItem)
                return (
                  <li>
                    <img
                      className="cart--item-icon"
                      src={`../assets/icons/${cartItem.item.id}.svg`}
                      alt={'storeItem.id'}
                    />
                    {cartItem.item.name}
                    <button
                      className="remove-btn"
                      onClick={() => decreaseQuantity(cartItem)}
                    >
                      {' '}
                      -{' '}
                    </button>
                    <div className="quantity-text">{cartItem.quantity}</div>
                    <button
                      className="add-button"
                      onClick={() => increaseQuantity(cartItem)}
                    >
                      {' '}
                      +{' '}
                    </button>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">
              £0.00
              {cartTotal(cartTotal)}
            </span>
          </div>
        </div>
      </main>
      <div>
        Icons made by
        <a
          href="https://www.flaticon.com/authors/icongeek26"
          title="Icongeek26"
        >
          Icongeek26
        </a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </>
  )
}
