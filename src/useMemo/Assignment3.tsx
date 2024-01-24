import React, { useState, useMemo } from 'react';

// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

interface Item {
    name: string;
    value: number;
}

export const Assignment3: React.FC = () => {
    const [items, setItems] = useState<Item[]>([
        { name: 'Chocolates', value: 10 },
        { name: 'Chips', value: 20 },
        { name: 'Onion', value: 30 },
        { name: 'Tomato', value: 30 },
        // Add more items as needed
    ]);
    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item.name} - Price: ${item.value}
                    </li>
                ))}
            </ul>
            <p>Total Value: ${totalValue}</p>
        </div>
    );
};