import { IBookingData } from '../../entities/BookingCard/types/IBookingCard';
import BookingCard from '../../entities/BookingCard/BookingCard';
import styles from './styles/bookingList.module.scss';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import staticBookedTrips from '../../data/bookings.json';

const BookingList = () => {
    const location = useLocation();
    const [booking, setBooking] = useState<any[]>([]);
    
    useEffect(() => {
        const newBooking = location.state?.newBooking;
        setBooking(() => {
            return newBooking ? [location.state.newBooking] : staticBookedTrips;
        })
    }, [])

    const deleteFromBooking = (id: string) => {
        setBooking((prev) => {
            return prev.filter(bookedTravel => bookedTravel.id !== id)
        })
    }
    
    return (
        <div className={styles.bookings__list}>
            {booking.map(({trip, date, guests, id}: IBookingData) => {
                return (
                    <BookingCard 
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