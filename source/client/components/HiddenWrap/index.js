
import {Component, cloneElement} from 'react'
import {findDOMNode} from 'react-dom'


class HiddenWrap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpened: false
    }
    this.handleClickOutside = ::this.handleClickOutside
  }
  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside, true)
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, true)
  }
  handleClickOutside = (e) => {
    const domNode = findDOMNode(this)
    if (!domNode || !domNode.contains(e.target)) {
      this.setState({
        isOpened: false
      })
    }
  }
  handleClickButton = () => {
    this.setState({
      isOpened: true
    })
  }
  render() {
    return (
      cloneElement(this.props.children, {
        isOpened: this.state.isOpened,
        handleClickButton: this.handleClickButton
      })
    )
  }
}


export default HiddenWrap
