export default interface ITrip {
    createdAt?: Date | string,
    description?: string,
    duration: number,
    id?: string,
    image: string,
    level: string,
    price: number,
    title: string
}