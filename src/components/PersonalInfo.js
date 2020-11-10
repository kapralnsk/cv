import React from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'

const TEXTS = {
    ru: {
        name: 'Александр Каурдаков',
        city: 'г. Новосибирск',
        education: {
            university: 'НГУЭУ',
            degree: 'бакалавр',
            faculty: 'Информационно-технический факультет',
            specialty: 'Прикладная информатика в экономике'
        }
    },
    en: {
        name: 'Aleksandr Kaurdakov',
        city: 'Novosibirsk',
        education: {
            university: 'NSUEM',
            degree: 'bachelor',
            faculty: 'IT Department',
            specialty: 'Applied informatics in economics'
        }
    }
}

class PersonalInfoComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = TEXTS.ru
    }

    componentDidUpdate(prevProps) {
        if (this.props.language !== prevProps.language) {
            this.setState(TEXTS[this.props.language])
        } 
    }

    render() {
        return (
            <Card>
                <Image src='photo.png' wrapped ui={true} />
                <Card.Content>
                <Card.Header>{this.state.name}</Card.Header>
                <Card.Description>
                    <Icon name='birthday' /> 23.12.1992
                    <br />
                    <Icon name='home' /> {this.state.city}
                </Card.Description>
                </Card.Content>
                <Card.Content>
                    <Icon name='university' />
                    {this.state.education.university} - {this.state.education.degree} (2011-2015)
                    <br />
                    {this.state.education.faculty}
                    <br />
                    {this.state.education.specialty}
                </Card.Content>
                <Card.Content>
                    <Icon name='phone' /> <a href='tel:+79994518011'>+79994518011</a>
                    <br />
                    <Icon name='mail' /> <a href='mailto:kapralnsk@gmail.com'>kapralnsk@gmail.com</a>
                    <br />
                    <Icon name='telegram' /> <a href='https://t.me/kapral'>@kapral</a>
                    <br />
                    <Icon name='github' /> <a href='https://github.com/kapralnsk/'>kapralnsk</a>
                </Card.Content>
            </Card>
        )
    }
}

export default PersonalInfoComponent