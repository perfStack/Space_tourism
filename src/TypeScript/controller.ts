import { htmlElement } from './util/querySelector';

/**
 *
 * @param event
 */
function navClickHandler(event: MouseEvent) {
  console.log(event.target);
  htmlElement.navItemLink?.classList.add('.active');
}

/**
 *
 */
export function run() {
  try {
    const navItemLink = htmlElement.navItemLink;
    if (!navItemLink) throw new Error('Can\'t find  navbar');

    navItemLink.addEventListener('click', navClickHandler);
  } catch (error) {
    console.error(error);
  }
}
