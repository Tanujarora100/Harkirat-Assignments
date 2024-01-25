import React, {useState, useMemo} from 'react';

// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

interface Item {
    name: string;
    value: number;
}

export const Assignment3: React.FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [items, setItems] = useState<Item[]>([
        {name: 'Chocolates', value: 10},
        {name: 'Chips', value: 20},
        {name: 'Onion', value: 30},
        {name: 'Tomato', value: 20},
        {name:'TV',value:570}
        // Add more items as needed
    ]);
    // Yes, you're correct. When the dependencies of useMemo change, it triggers a recalculation of the memoized value, and if that value is used in the render,
    // it will cause the component to re-render with the updated value.
    // The purpose of useMemo is not to prevent re-renders but to optimize expensive computations by memoizing the result
    const totalValue = useMemo(() => items.reduce((acc, item) => acc + item.value, 0), [items]);
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