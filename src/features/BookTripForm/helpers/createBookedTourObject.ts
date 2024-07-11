import ITrip from "../../../entities/TripCard/types/ITrip";
import IBookedTour from "../types/bookedData";

export default function createBookedTourObject(tour: ITrip, guests: number, date: string): IBookedTour {
    const createdAt = new Date();
    return {
        id: "73b7df68-62f6-4a5f-9c87-f971637ac7a0",
        userId: "1dd97a12-848f-4a1d-8a7d-34a2132fca94",
        tripId: tour.id as string,
        guests: guests,
        date: date,
        trip: {
          title: tour.title,
          duration: tour.duration,
          price: tour.price
        },
        totalPrice: tour.price * guests,
        createdAt: createdAt.toString()
    }
}