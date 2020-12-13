import React from 'react'
import { Menu } from 'semantic-ui-react'

import PDFComponent from './PDF'
import LanguageComponent from './Language'

class TopMenuComponent extends React.Component {
    render() {
        return <Menu>
            <PDFComponent
                getAppContentRef={this.props.getAppContentRef}
            />    
            <Menu.Menu position='right'>
                <LanguageComponent
                onLangChange={this.props.onLangChange}
                language={this.props.language}
                />
            </Menu.Menu> 
        </Menu>
    }
}

export default TopMenuComponent