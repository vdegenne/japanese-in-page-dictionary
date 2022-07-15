function openSearchManager (selection) {
  const searchManager = document.querySelector('search-manager')
  const hasSearchManager = !!(searchManager.show)
  if (hasSearchManager) {
    if (selection) {
      let type = 'words'
      if (selection.length == 1) {
        type = 'kanji'
      }
      searchManager.show(selection.trim(), type)
    }
    else {
      searchManager.show()
    }
  }
  return hasSearchManager
}


chrome.commands.onCommand.addListener(async function (command) {
  // const tabs = await chrome.tabs.query({})
  const currentTab = (await chrome.tabs.query({ currentWindow: true, active: true }))[0]
  const tabId = currentTab.id

  switch (command) {
    case 'open_inpage_dialog':
      // Get selection
      const [{result: selection}] = await executeScript(tabId, () => document.getSelection().toString())
      // Try to open the main search manager
      const [{result: hadMainSearchManager}] = await executeScript(currentTab.id, openSearchManager, 'MAIN', selection)

      // return on success
      if (hadMainSearchManager) {
        return
      }

      // Oen the extension search manager
      await executeScript(currentTab.id, openSearchManager, 'ISOLATED', selection)

      break
  }
})



function executeScript (tabId, script, world = 'ISOLATED', args = null) {
  if (typeof args == 'string') { args = [args] }
  return new Promise(function (resolve) {
    chrome.scripting.executeScript({
      target: { tabId },
      func: script,
      args,
      world
    }, resolve)
  })
}