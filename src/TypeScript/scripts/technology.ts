'use strict';

import '../../css/technology.css';

import { Nav as NavClass } from './nav';

const htmlElement: Record<string, HTMLElement | null> = {
  technologyNavBarList: document.querySelector('.technology__nav-list'),
  technologyNavBarCurrent: document.querySelector('.technology__nav-item--1'),
  technologyArticleCurrent: document.querySelector('.technology__content--1'),
  technologyImgCurrent: document.querySelector('.technology__img--1'),
};

/**
 *
 */
function run() {
  try {
    const navBarList = htmlElement.technologyNavBarList;
    if (!navBarList) throw new Error('Cannot find technology nav list');

    const currentNavItem = htmlElement.technologyNavBarCurrent;
    const targetNavClass = 'technology__nav-item';
    const currentSelectedArticle = htmlElement.technologyArticleCurrent;
    const targetContentIdentifier = 'technology__content';
    const currentSelectedImg = htmlElement.technologyImgCurrent;
    const targetImgIdentifier = 'technology__img';

    const technologyNav = new NavClass(currentNavItem, targetNavClass, [
      [currentSelectedArticle, targetContentIdentifier],
      [currentSelectedImg, targetImgIdentifier],
    ]);
    navBarList.addEventListener(
        'click',
        technologyNav.toggleNav.bind(technologyNav),
    );
  } catch (error) {
    console.error(error);
  }
}

run();
