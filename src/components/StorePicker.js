import React from 'react';

class StorePicker extends React.Component {
    render() {
        // you don't have to write JSX you can use this instead:
        // return React.createElement('p', { className: 'hey'})
        return (
            <React.Fragment>
                {/* This is how you write a comment it also has to be inside an element */}
                <form className="store-selector">
                    <h2>Please Enter A Store</h2>
                    <input type="text" required placeholder="Store Name"/>
                    <button type="submit">Visit Store -></button>
                </form>
            </React.Fragment>
        )
    }
}

export default StorePicker;