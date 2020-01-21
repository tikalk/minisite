import * as React from 'react';
import MainLayout from '../layouts/main';

interface ISpeakersProps {}

const Speakers: React.FC<ISpeakersProps> = props => {
    return (
        <MainLayout>
            <div>Speakers</div>
        </MainLayout>
    );
};

export default Speakers;
