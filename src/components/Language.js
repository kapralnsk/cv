import React from 'react'
import { Button, Flag } from 'semantic-ui-react'

class LanguageComponent extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.langs = {
            en: {name: 'EN', flag: 'gb'},
            ru: {name: 'RU', flag: 'ru'} 
        }
    }

    render() {
        let langs = []
        for (let [key, value] of Object.entries(this.langs)) {
            langs.push(
                <Button 
                    basic
                    value={key}
                    key={key}
                    active={this.props.language === key}
                    onClick={this.handleChange}>
                    <Flag name={value.flag} value={key} />{value.name}
                </Button>
            )
        }
        return(
            <Button.Group>
                {langs}
            </Button.Group>
        )
    }

    handleChange(e) {
        this.props.onLangChange(e.currentTarget.value)
    }
}

export default LanguageComponent