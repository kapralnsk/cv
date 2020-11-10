import React from 'react'
import { Card } from 'semantic-ui-react'

import MarkdownComponent from './Markdown'


class JobHistoryComponent extends React.Component {
    render() {
        return(
            <Card style={{width: '100%'}}>
                <Card.Content>
                    <MarkdownComponent url={`text/${this.props.language}/job_history.md`}/>
                </Card.Content>
            </Card>
        )
    }
}

export default JobHistoryComponent