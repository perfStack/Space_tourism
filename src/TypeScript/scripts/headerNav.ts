import * as util from '../util/util';
import { htmlElement as querySelector } from '../util/querySelector';

const htmlElement: Record<string, HTMLElement | null> = {
  headerNavbar: document.querySelector('.header__nav'),
  headerNavbarMobileIconCont: document.querySelector('.nav-mobile__btn-cont'),
  headerNavbarMobileIcon: document.querySelector('.nav-mobile__btn'),
};

/**
 *
 */
function clearBodyBlur(event: MouseEvent) {
  try {
    const bodyClass = querySelector.bodyClass;
    if (!bodyClass) throw new Error('Cannot find body class');

    const targetEvent = event.target as HTMLElement;
    if (!targetEvent) return;
    // remove and return if an actual link is clicked, as link takes them to a new page
    // with .body-blur class absent
    const targetIsNavLink = targetEvent.closest('.header__nav-list__item-link');
    if (targetIsNavLink) {
      bodyClass.removeEventListener('click', clearBodyBlur);
      return;
    }
    // If it is not link but click originates in nav container then return as we don't want
    // to hide the nav list.
    const targetIsNavListChild = targetEvent.closest('.header__nav-cont');
    if (targetIsNavListChild) return;

    util.hideBodyBlur();
    hideNavList();

    bodyClass.removeEventListener('click', clearBodyBlur);
  } catch (error) {
    console.error(error);
  }
}

/**
 *
 */
function showNavList() {
  const headerNavbar = htmlElement.headerNavbar;
  if (!headerNavbar) throw new Error('No navbar found');
  const navbarIcon = htmlElement.headerNavbarMobileIcon;
  if (!navbarIcon) {
    throw new Error('Can\'t find navbar icon htmlElement');
  }

  headerNavbar.dataset.visible = 'true';
  navbarIcon.setAttribute('aria-expanded', 'true');
  util.showBodyBlur();
}

/**
 *
 */
function hideNavList() {
  const headerNavbar = htmlElement.headerNavbar;
  if (!headerNavbar) throw new Error('No navbar found');
  const navbarIcon = htmlElement.headerNavbarMobileIcon;
  if (!navbarIcon) {
    throw new Error('Can\'t find navbar icon htmlElement');
  }

  headerNavbar.dataset.visible = 'false';
  navbarIcon.setAttribute('aria-expanded', 'false');
  util.hideBodyBlur();
}

/**
 *
 */
function navBarIconClickHandler(event: MouseEvent) {
  try {
    event.stopPropagation();

    const bodyClass = querySelector.bodyClass;
    if (!bodyClass) throw new Error('Cannot find body class');
    const headerNavbar = htmlElement.headerNavbar;
    if (!headerNavbar) throw new Error('No navbar found');

    const isVisible = headerNavbar.dataset.visible;
    if (isVisible === undefined) {
      throw new Error('No dataset value found named visible on navbar');
    }

    if (isVisible === 'true') {
      hideNavList();
      bodyClass.removeEventListener('click', clearBodyBlur);
    } else if (isVisible === 'false') {
      showNavList();
      bodyClass.addEventListener('click', clearBodyBlur);
    }
  } catch (error) {
    console.error(error);
  }
}

/**
 *
 */
export function run() {
  try {
    const navbarIconCont = htmlElement.headerNavbarMobileIconCont;
    if (!navbarIconCont) throw new Error('No navbar icon cont found');

    navbarIconCont.addEventListener('click', navBarIconClickHandler);
  } catch (error) {
    console.error(error);
  }
}
