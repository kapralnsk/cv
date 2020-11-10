import React from 'react'
import styled from 'styled-components'
import { Grid } from 'semantic-ui-react'

import TopMenuComponent from './TopMenu'
import PersonalInfoComponent from './PersonalInfo'
import KeyCompetenceComponent from './KeyCompetence'
import JobHistoryComponent from './JobHistory'
import AboutComponent from './About'
import FooterComponent from './Footer'

const AppWrapper = styled.div`
    min-width: 600px
`

const AppMenuDiv = styled.div`
  flex: 0 0 50px;
`

const AppContentDiv = styled.div`
  height: 100%;
  justify-content: center;
  min-height: 1px;
  display: flex;
`

class Application extends React.Component {
    constructor(props) {
        super(props)
        this.state = {language: 'ru'}
        this.handleLangChange = this.handleLangChange.bind(this)
        this.getAppContentRef = this.getAppContentRef.bind(this)
        this.appContentRef = React.createRef()
    }

    handleLangChange(language) {
        this.setState({language})
    }

    setAppContentRef = el => {
        this.appContentRef = el
    }

    getAppContentRef() {
        return this.appContentRef
    }

    render() {
        return (
        <AppWrapper>
            <AppMenuDiv >
                <TopMenuComponent 
                onLangChange={this.handleLangChange}
                onPrintButtonClick={this.handlePrintButtonClick}
                getAppContentRef={this.getAppContentRef}
                />
            </AppMenuDiv>
            <AppContent {...this.state} ref={this.setAppContentRef}/>
            <FooterComponent {...this.state}/>
        </AppWrapper>
        ) 
    }
}

class AppContent extends React.Component {
    render() {
        return (
            <AppContentDiv>
                <Grid style={{width: '1200px', 'marginTop': '0'}}>
                    <Grid.Row>
                        <Grid.Column width={5}>
                            <PersonalInfoComponent {...this.props} />
                        </Grid.Column>
                        <Grid.Column width={11}>
                            <KeyCompetenceComponent {...this.props} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <JobHistoryComponent {...this.props} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <AboutComponent {...this.props} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </AppContentDiv>
        )
    }
}

export default Application
