import React from 'react'
import ReactToPrint from "react-to-print"
import { Button, MenuItem } from 'semantic-ui-react'

class PDFComponent extends React.Component {
    render() {
        return (
            <MenuItem>
                <ReactToPrint
                trigger={() => <Button basic color='red' circular icon='print' />}
                content={ this.props.getAppContentRef }
                />
                
            </MenuItem>
        )
    }
}

export default PDFComponent