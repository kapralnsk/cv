import React from 'react'
import ReactMarkdown from 'react-markdown'

class MarkdownComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {md: null}
    }

    async componentDidMount(){
        await this.loadMarkdown()
    }

    async componentDidUpdate(prevProps){
        if (prevProps.url !== this.props.url){
            await this.loadMarkdown()
        }
    }

    async loadMarkdown() {
        const mdResponse = await fetch(this.props.url)
        const md = await mdResponse.text()
        this.setState({ md })
    }

    render() {
        return <ReactMarkdown source={this.state.md}/>
    }
}

export default MarkdownComponent