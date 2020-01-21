import * as React from 'react';
import MainLayout from '../layouts/main';

interface IVenueProps {}

const Venue: React.FC<IVenueProps> = props => {
    return (
        <MainLayout>
            <div>Venue</div>
        </MainLayout>
    );
};

export default Venue;
