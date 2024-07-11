export default interface IBookingCard {
    title: string, 
    guests: number, 
    date: string, 
    cost: number,
    onClose: any
}

export interface IBookingData {
    id: string,
    userId: string,
    tripId: string,
    guests: number,
    date: string,
    trip: {
    title: string,
    duration: number,
    price: number
    },
    totalPrice: number,
    createdAt: string
}