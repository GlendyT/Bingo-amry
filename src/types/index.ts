
export type MenuItem = {
    id: number,
    name: string,
    link: string,
    img: string,/*
    link1: string,
    link2: string,
    link3: string,
    link4: string,
    link5: string,
    link6: string,
    link7: string,*/
}

export type OrderItem = MenuItem & {
    quantity: number
}