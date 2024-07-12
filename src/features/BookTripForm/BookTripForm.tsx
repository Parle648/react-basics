import Input from '../../shared/UI/Input/Input';
import Button from '../../shared/UI/Button/Button';
import styles from './styles/tripForm.module.scss'
import { ChangeEvent, FormEvent, useState } from 'react';
import { useParams } from 'react-router-dom';
import trips from '../../data/trips.json';
import TotalPrice from './UI/TotalPrice/TotalPrice';
import TripInform from './UI/TripInform/TripInform';
import createBookedTourObject from './helpers/createBookedTourObject';
import bookings from '../../data/bookings.json';
import ITour from '../../shared/types/ITrip';

const BookTripForm = ({onSubmit}: {onSubmit: () => void}) => {
    const {tripId} = useParams();
    const trip = trips.find(trip => trip.id === tripId) as ITour;
    const [inputsState, setInputsState] = useState(['', 0])

    const changeInputState = (event: ChangeEvent<HTMLDataElement | HTMLInputElement>, inputType: 'date' | 'number'): void => {
        if (inputType === 'date') {
            setInputsState([inputsState[0] = event.currentTarget.value, inputsState[1]])
        }
        if (inputType === 'number') {
            setInputsState([inputsState[0], inputsState[1] = event.currentTarget.value])
        }
    }
    
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit();
        bookings.push(createBookedTourObject(trip, +inputsState[1], inputsState[0] as string))
    }

    return (
        <form className={styles.bookTripPopup__form} onSubmit={(event) => handleSubmit(event)}>
            <TripInform trip={trip} />

            <Input 
                value={inputsState[0]} 
                title='Date' 
                type='date' 
                name='date' 
                dataTestId='book-trip-popup-date' 
                onChange={(event: ChangeEvent<HTMLDataElement>) => changeInputState(event, 'date')} />
                
            <Input 
                value={inputsState[1]} 
                title='Number of guests' 
                type='number' 
                name='guests' 
                dataTestId='book-trip-popup-guests' 
                min={1} 
                max={10} 
                onChange={(event: ChangeEvent<HTMLDataElement | HTMLInputElement>) => changeInputState(event, 'number')} />

            <TotalPrice trip={trip} guests={+inputsState[1]} />
            
            <Button title={'Book a trip'} dataTextId={'book-trip-popup-submit'} type={'submit'} />
        </form>
    );
};

export default BookTripForm;