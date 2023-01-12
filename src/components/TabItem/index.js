import './index.css'

const TabItem = props => {
  const {tabDetails, activeTabId, isActive} = props
  const {tabId, displayText} = tabDetails
  const btn = isActive ? 'active' : 'in-active'

  const onClickItem = () => {
    activeTabId(tabId)
  }

  return (
    <li className="tab-item">
      <button type="button" className={btn} onClick={onClickItem}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
