chrome.commands.onCommand.addListener(async (command) => {
  // const tabs = await chrome.tabs.query({})
  const currentTab = (await chrome.tabs.query({ currentWindow: true, active: true }))[0]

  switch (command) {
    case 'open_inpage_dialog':
      chrome.scripting.executeScript({
        target: { tabId: currentTab.id },
        func: async function () {
          const selection = document.getSelection().toString()
          const searchManager = document.querySelector('search-manager')
          if (selection) {
            searchManager.show(selection.trim(), 'words')
          }
          else {
            searchManager.show()
          }
        }
      })
      break
  }
})
