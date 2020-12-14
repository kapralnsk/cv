import React from 'react'

const TEXTS = {
    ru: {
        employment_type: 'Полный рабочий день, удаленно (желательно), или офис в Новосибирске'
    },
    en: {
        employment_type: 'Full-time, remote (prefered), or office in Novosibirsk'
    }
}

class TitleComponent extends React.Component {
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
            <div>
                <h1>Senior Python developer</h1>
                <h5>{this.state.employment_type}</h5>
            </div>
        )
    }
}

export default TitleComponent