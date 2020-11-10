import React from 'react'
import { Card } from 'semantic-ui-react'

import MarkdownComponent from './Markdown'

class AboutComponent extends React.Component {
    render() {
        return(
            <Card style={{width: '100%'}}>
                <Card.Content>
                    <MarkdownComponent url={`text/${this.props.language}/about.md`}/>
                </Card.Content>
            </Card>
        )
    }
}

export default AboutComponent