import { htmlElement } from './querySelector';

/**
 *
 * @param previousElem
 * @param currElement
 */
export function toggleNavElement(
    previousElem: HTMLElement | null,
    currElement: HTMLElement | null,
) {
  if (!currElement) throw new Error('Can\'t find current Element');
  if (!previousElem) throw new Error('Can\'t find previous Element');

  previousElem.classList.remove('active');
  currElement.classList.add('active');
}

/**
 *
 * @param previousElem
 * @param currElement
 */
export function showCurrentElement(
    previousElem: HTMLElement | null,
    currElement: HTMLElement | null,
) {
  if (!currElement) throw new Error('Can\'t find current Element');
  if (!previousElem) throw new Error('Can\'t find previous Element');

  previousElem.classList.add('hidden');
  currElement.classList.remove('hidden');
}

/**
 *
 */
export function showBodyBlur() {
  const bodyClass = htmlElement.bodyClass;
  if (!bodyClass) throw new Error('Cannot find body class');

  bodyClass.classList.add('body-blur');
}

/**
 *
 */
export function hideBodyBlur() {
  const bodyClass = htmlElement.bodyClass;
  if (!bodyClass) throw new Error('Cannot find body class');

  bodyClass.classList.remove('body-blur');
}
