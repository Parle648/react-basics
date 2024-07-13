import BookingCard from '../../entities/BookingCard/BookingCard';
import styles from './styles/bookingList.module.scss';
import staticBookedTrips from '../../data/bookings.json';
import { useState } from 'react';
import IBookedTour from '../../shared/types/IBookedTour';

const BookingList = () => {
    const [tours, setTours] = useState<IBookedTour[]>(staticBookedTrips)
    
    const deleteFromBooking = (id: string) => {
        const index = staticBookedTrips.findIndex(tour => tour.id === id)
        staticBookedTrips.splice(index, index + 1)
        setTours(staticBookedTrips.filter(tour => tour.id !== id).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()))
    }
    
    return (
        <div className={styles.bookings__list}>
            {tours.map(({trip, date, guests, id}: IBookedTour) => {
                return (
                    <BookingCard 
                        key={id}
                        title={trip.title} 
                        guests={guests} 
                        date={new Date(date).toLocaleDateString()} 
                        cost={trip.price} 
                        onClose={() => deleteFromBooking(id)} />
                )
            })}
        </div>
    );
};

export default BookingList;