import React, {Fragment} from 'react';

class Picker extends React.Component {
    render() {
        return (
            <Fragment>
                <form className="selector">
                    <h2>Please Enter Choice</h2>
                    <input type="text" required placeholder="Choice"/>
                    <button type="submit">Submit</button>
                </form>
            </Fragment>
        )
    }
}

export default Picker;