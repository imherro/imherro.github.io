chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === 'searchZhihu') {
      const searchUrl = `https://www.zhihu.com/search?type=content&q=${encodeURIComponent(info.selectionText)}`;
      chrome.tabs.create({ url: searchUrl });
    }
  });
  
  chrome.contextMenus.create({
    id: 'searchZhihu',
    title: '在知乎搜索 "%s"',
    contexts: ['selection']
  });