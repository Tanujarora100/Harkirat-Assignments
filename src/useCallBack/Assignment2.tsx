import React, {useState, useCallback} from 'react';

// Create a component with a text input field and a button. The goal is to display an alert with the text entered when the button is clicked. Use useCallback to memoize the event handler function that triggers the alert, ensuring it's not recreated on every render.
// Currently we only have inputText as a state variable and hence you might not see the benefits of
// useCallback. We're also not passing it down to another component as a prop which is another reason for you to not see it's benefits immedietely.
type ShowAlertButtonProps = {
    showAlert: () => void;
}

export function Assignment2() {
    const [inputText, setInputText] = useState<string>('');

    // Your code starts here

    // // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // function withoutCallBack():void{
    //     alert(inputText);
    // }

    const showAlert = useCallback(() => {
            alert(inputText);

    }, [inputText]);

    // Your code ends here

    return (
        <div>
            <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter some text"
            />
            <ShowAlertButton showAlert={showAlert}/>
        </div>
    );
}


const ShowAlertButton: React.FC<ShowAlertButtonProps> = ({showAlert}) => {
    console.log("ShowAlertButton")
    return (

        <div>
            {/*{console.log('child rendered')}*/}
            <button onClick={showAlert}>Show Alert</button>
        </div>
    );
};

export default Assignment2;
