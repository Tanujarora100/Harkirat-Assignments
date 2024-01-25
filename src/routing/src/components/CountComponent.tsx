import React, {memo} from 'react';

// Define the type for the props
export interface CountComponentProps {
    count: number;
}

// Use the defined props type
const CountComponent: React.FC<CountComponentProps> = memo(({count}) => {
    return (
        <div>
            <h1>{count}</h1>
        </div>
    );
});


export default CountComponent;
