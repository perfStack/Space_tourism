'use strict';

import '../../css/destination.css';

import { Nav as NavClass } from './nav';

const htmlElement: Record<string, HTMLElement | null> = {
  destinationNavBarList: document.querySelector('.destination__navbar-list'),
  destinationNavBarMoon: document.querySelector('.destination__navbar--moon'),
  destinationImg: document.querySelector('.destination__picture--moon'),
  destinationArticleMoon: document.querySelector('.destination__article--moon'),
};

/**
 *
 */
function run() {
  try {
    const navBarList = htmlElement.destinationNavBarList;
    if (!navBarList) throw new Error('Cannot find destination nav list');

    const currentNavItem = htmlElement.destinationNavBarMoon;
    const targetNavClass = 'destination__navbar-item';
    const currentSelectedArticle = htmlElement.destinationArticleMoon;
    const targetContentIdentifier = 'destination__article';
    const currentSelectedImg = htmlElement.destinationImg;
    const targetImgIdentifier = 'destination__picture';

    const destinationNav = new NavClass(currentNavItem, targetNavClass, [
      [currentSelectedArticle, targetContentIdentifier],
      [currentSelectedImg, targetImgIdentifier],
    ]);
    navBarList.addEventListener(
        'click',
        destinationNav.toggleNav.bind(destinationNav),
    );
  } catch (error) {
    console.error(error);
  }
}

run();
