import { getOrders } from "./database.js"
import { getMetals, getSizes, getStyles } from "./database.js"

const buildOrderListItem = (order) => {

const metals = getMetals()
const foundMetal = metals.find(
    (metal) => {
        return metal.id === order.metalId
    }
)

const sizes = getSizes()
const foundSize = sizes.find(
    (size) => {
        return size.id === order.sizeId
    }
)

const styles = getStyles()
const foundStyle = styles.find(
    (style) => {
        return style.id === order.styleId
    }
)

const totalCost = foundMetal.price + foundSize.price + foundStyle.price
const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})

return `<li>
    Order #${order.id} cost ${costString}
</li>`

    // return `<li>
    //     Order #${order.id} was placed on ${order.timestamp}
    // </li>`
}


export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html

    
}



// const metals = getMetals()
// const foundMetal = metals.find(
//     (metal) => {
//         return metal.id === order.metalId
//     }
// )
// const totalCost = foundMetal.price
// const costString = totalCost.toLocaleString("en-US", {
//     style: "currency",
//     currency: "USD"
// })

// `<li>
//     Order #${order.id} cost ${costString}
// </li>`

// const sizes = getSizes()
// const foundSize = sizes.find(
//     (size) => {
//         return size.id === order.sizeId
//     }
// )

// const styles = getStyles()
// const foundStyle = styles.find(
//     (style) => {
//         return style.id === order.styleId
//     }
// )