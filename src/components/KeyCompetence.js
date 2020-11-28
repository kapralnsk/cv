import React from 'react'
import { Header, Card, List } from 'semantic-ui-react'

const TEXTS = {
    ru: {
        key_name: 'Ключевые навыки',
        key_help: 'Я постоянно использовал следующие технологии',
        other_name: 'Прочие навыки',
        other_help: 'Я имею опыт работы с',
        dbms: 'СУБД'
    },
    en: {
        key_name: 'Key competence',
        key_help: 'I have used following technologies quite often',
        other_name: 'Other',
        other_help: 'I have experience with following technologies',
        dbms: 'DBMS'
    }
}

class KeyCompetenceComponent extends React.Component {
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
        return(
                <Card style={{width: '100%'}}>
                    <Card.Content>
                        <Card.Header>{this.state.key_name}</Card.Header>
                        <Card.Description>{this.state.key_help}</Card.Description>
                        <Header as='h4'>Python</Header>
                        <List bulleted horizontal>
                            <List.Item></List.Item>
                            <List.Item>Python 3</List.Item>
                            <List.Item>Django</List.Item>
                            <List.Item>Django REST Framework</List.Item>
                            <List.Item>asyncio</List.Item>
                            <List.Item>aiohttp</List.Item>
                            <List.Item>PeeWee ORM</List.Item>
                            <List.Item>pyMongo/Motor</List.Item>
                            <List.Item>Telebot</List.Item>
                        </List>
                        <Header as='h4'>{this.state.dbms}</Header>
                        <List bulleted horizontal>
                            <List.Item></List.Item>
                            <List.Item>PostgreSQL</List.Item>
                            <List.Item>MongoDB</List.Item>
                            <List.Item>Redis</List.Item>
                        </List>
                        <Header as='h4'>DevOps</Header>
                        <List bulleted horizontal>
                            <List.Item></List.Item>
                            <List.Item>Docker</List.Item>
                            <List.Item>Docker Swarm</List.Item>
                            <List.Item>Kubernetes</List.Item>
                            <List.Item>Gitlab</List.Item>
                            <List.Item>Gitlab CI</List.Item>
                            <List.Item>Debian</List.Item>
                            <List.Item>CentOS</List.Item>
                            <List.Item>nginx</List.Item>
                            <List.Item>traefik</List.Item>
                            <List.Item>systemd</List.Item>
                            <List.Item>LDAP</List.Item>
                        </List>
                        
                    </Card.Content>
                    <Card.Content>
                        <Card.Header>{this.state.other_name}</Card.Header>
                        <Card.Description>{this.state.other_help}</Card.Description>
                        <List bulleted horizontal>
                            <List.Item></List.Item>
                            <List.Item>GraphQL</List.Item>
                            <List.Item>ES6</List.Item>
                            <List.Item>Node.js</List.Item>
                            <List.Item>koa</List.Item>
                            <List.Item>React</List.Item>
                            <List.Item>Electron</List.Item>
                            <List.Item>PHP7</List.Item>
                            <List.Item>Bitrix</List.Item>
                            <List.Item>RabbitMQ</List.Item>
                            <List.Item>Flask</List.Item>
                            <List.Item>SQLAlchemy</List.Item>
                            <List.Item>ClickHouse</List.Item>
                            <List.Item>MySQL</List.Item>
                            <List.Item>Jira</List.Item>
                            <List.Item>Ansible</List.Item>
                        </List>
                    </Card.Content>
                </Card>
        )
    }
}

export default KeyCompetenceComponent