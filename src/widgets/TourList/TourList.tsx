import { useLocation } from 'react-router-dom';
import tours from '../../data/trips.json'
import TripCard from '../../entities/TripCard/TripCard';
import styles from './styles/tripList.module.scss';
import toursFiltering from './helpers/toursFiltering';
import { FC } from 'react';
import ITour from '../../shared/types/ITrip';
import IFilter from '../../shared/types/IFilter';

const TourList: FC = () => {
    const location = useLocation();
    let filters: IFilter = location.state !== null ? location.state : {search: '', duration: '', level: ''};

    const filteredTrips = toursFiltering(tours, filters)
    return (
        <div className={styles.tripList}>
            {filteredTrips.map((tour: ITour) => {
                return (
                <TripCard  
                    key={tour.id} 
                    id={tour.id}
                    description={tour.description} 
                    duration={tour.duration} 
                    image={tour.image} 
                    level={tour.level} 
                    price={tour.price} 
                    title={tour.title} />)
            })}
        </div>
    );
};

export default TourList;