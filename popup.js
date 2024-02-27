document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.getElementById('invertCheckbox');

    checkbox.addEventListener('change', function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                func: checkbox.checked ? invertPageColors : resetPageColors
            });
        });
    });
});

function invertPageColors() {
    document.documentElement.style.filter = 'invert(1)';
}

function resetPageColors() {
    document.documentElement.style.filter = 'none';
}
