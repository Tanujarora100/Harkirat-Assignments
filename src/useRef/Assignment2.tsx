import {useState, useCallback, useRef} from 'react';

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

/**
 * Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.
 */
export function Assignment2() {
    const [forceRender, setForceRender] = useState<number>(0);
    const renderCycles = useRef<number>(0);
    /**
     * Update state to force re-render
     */
    const handleReRender = () => {
        setForceRender(() => Math.random());
    };

    renderCycles.current = renderCycles.current + 1;


    return (
        <div>
            <p style={{color: "red"}}>This componeccd has rendered {renderCycles.current} times.</p>
            <button style={{borderRadius: "10px"}} onClick={handleReRender}>Force Re-render</button>
        </div>
    );
}