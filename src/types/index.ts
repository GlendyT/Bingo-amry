
export type Link = {
    name: string,
    url: string
}

export type MenuItem = {
    id: number,
    name: string,
    link: string | Link[],
    img: string,
}

export type OrderItem = MenuItem & {
    quantity: number
}