import * as React from 'react';
import MainLayout from '../layouts/main';

interface IVideosProps {}

const Videos: React.FC<IVideosProps> = props => {
    return (
        <MainLayout>
            <div>Videos</div>
        </MainLayout>
    );
};

export default Videos;
