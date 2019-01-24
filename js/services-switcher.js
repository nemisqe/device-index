'use strict';

// клик на таб => добавление класса "button-active" и удаление этого класса у всех табов кроме текущего + добавление класса "_active" у соответствующего таб-контента

var tabs = document.querySelectorAll('.info-toggle');
var tabsContents = document.querySelectorAll('.service-info__description--container');

for (let i = 0; i < tabs.length; i++) {
	let tab = tabs[i];

	onTabClick(tab, i);
}

function onTabClick (tab, i) {
	tab.addEventListener('click', function () {

	toggleNextActiveTabContent(i);
	});
};

///////////IMP/////////////

function toggleNextActiveTabContent (i) {
	disableActiveTabContent();
	disableActiveTab();
	enableTabContent(i);
	enableTab(i);
};

function disableActiveTabContent () {
	var activeTabContent = document.querySelector('._active');

	activeTabContent.classList.remove('_active');
};

function disableActiveTab () {
	var activeTab = document.querySelector('.button-active');

	activeTab.classList.remove('button-active');
};

function enableTabContent (i) {
	var nextActiveTabContent = tabsContents[i];
	nextActiveTabContent.classList.add('_active');
};

function enableTab (i) {
	var nextActiveTab = tabs[i];
	nextActiveTab.classList.add('button-active');
};