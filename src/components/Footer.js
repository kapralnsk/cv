import React from 'react'
import { Menu, MenuItem } from 'semantic-ui-react'


const TEXTS = {
    ru: {
        madewith: 'Сделано с помощью',
        and: 'и',
        sources: 'Исходники на'
    },
    en: {
        madewith: 'Made with',
        and: '&',
        sources: 'Source code on'
    }
}

class FooterComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = TEXTS[props.language]
    }

    componentDidUpdate(prevProps) {
        if (this.props.language !== prevProps.language) {
            this.setState(TEXTS[this.props.language])
        } 
    }

    render() {

        return (
            <Menu>
                <MenuItem style={{whiteSpace: 'break-spaces'}}>{this.state.madewith}<a href='https://reactjs.org/'> React </a> {this.state.and}<a href='https://react.semantic-ui.com/'> Semantic UI</a></MenuItem>
                <MenuItem position='right' style={{whiteSpace: 'break-spaces'}}>{this.state.sources}<a href='https://github.com/kapralnsk/cv'> Github</a></MenuItem>
            </Menu>
        )
    }
}

export default FooterComponent