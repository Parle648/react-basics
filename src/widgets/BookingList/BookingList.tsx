import { IBookingData } from '../../entities/BookingCard/types/IBookingCard';
import BookingCard from '../../entities/BookingCard/BookingCard';
import styles from './styles/bookingList.module.scss';
import staticBookedTrips from '../../data/bookings.json';
import { useState } from 'react';

const BookingList = () => {
    const [tours, setTours] = useState(staticBookedTrips)
    
    const deleteFromBooking = (id: string) => {
        const index = staticBookedTrips.findIndex(tour => tour.id === id)
        staticBookedTrips.splice(index, index + 1)
        setTours(staticBookedTrips.filter(tour => tour.id !== id))
    }
    
    return (
        <div className={styles.bookings__list}>
            {tours.map(({trip, date, guests, id}: IBookingData) => {
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