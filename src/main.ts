import {SearchManager} from './search-manager'

window.onload = function () {
  const manager = new SearchManager()
  document.body.append(manager)

  let _lastVisibleSelection
  document.addEventListener('selectionchange', () => {
    const selection = window.getSelection()?.toString()
    if (selection) {
      _lastVisibleSelection = selection
    }
  })
  document.dispatchEvent(new Event('selectionchange'))

  window.addEventListener('search-japanese', async (e) => {
    if (!_lastVisibleSelection) { return }
    manager.show(_lastVisibleSelection)
    await manager.updateComplete
    if (manager.result.filter((i) => i.type == 'words' && i.dictionary != 'not found').length == 0) {
      manager.view ='kanji'
    }
  })
}