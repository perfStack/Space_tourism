'use strict';

import '../../css/crew.css';

import { Nav as NavClass } from './nav';

const htmlElement: Record<string, HTMLElement | null> = {
  crewNavBarList: document.querySelector('.crew__nav-list'),
  crewNavBarItem: document.querySelector('.crew__nav-item--1'),
  crewCurrentContent: document.querySelector('.crew__person--1'),
  crewCurrentImg: document.querySelector('.crew__picture--1'),
};

/**
 *
 */
function run() {
  try {
    const navBarList = htmlElement.crewNavBarList;
    if (!navBarList) throw new Error('Cannot find destination nav list');

    const currentNavItem = htmlElement.crewNavBarItem;
    const targetNavClass = 'crew__nav-item';
    const currentSelectedContent = htmlElement.crewCurrentContent;
    const targetContentIdentifier = 'crew__person';
    const currentSelectedImg = htmlElement.crewCurrentImg;
    const targetImgIdentifier = 'crew__picture';

    const crewNav = new NavClass(currentNavItem, targetNavClass, [
      [currentSelectedContent, targetContentIdentifier],
      [currentSelectedImg, targetImgIdentifier],
    ]);
    navBarList.addEventListener('click', crewNav.toggleNav.bind(crewNav));
  } catch (error) {
    console.error(error);
  }
}

run();
