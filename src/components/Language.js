import React from 'react'
import { Button, Flag } from 'semantic-ui-react'

class LanguageComponent extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    render() {
        return(
            <Button.Group>
                <Button basic value='ru' onClick={this.handleChange}><Flag name='ru' value='ru' />RU</Button>
                <Button basic value='en' onClick={this.handleChange}><Flag name='gb' value='en' />EN</Button>
            </Button.Group>
        )
    }

    handleChange(e) {
        this.props.onLangChange(e.currentTarget.value)
    }
}

export default LanguageComponent