'use strict';

type unsafeHtml = HTMLElement | null;
type contentData = [unsafeHtml, string];

/**
 *
 */
export class Nav {
  private currentNavItem: unsafeHtml;
  private targetNavClass: string;
  private ContentArr: contentData[];

  /**
   *
   * @param currentNavItem
   * @param targetNavClass
   * @param currentContentArr
   */
  constructor(
      currentNavItem: unsafeHtml,
      targetNavClass: string,
      currentContentArr: contentData[],
  ) {
    this.currentNavItem = currentNavItem;
    this.targetNavClass = targetNavClass;
    this.ContentArr = currentContentArr;
  }

  /**
   *
   * @param previousElem
   * @param currElement
   */
  private toggleNavElement(previousElem: unsafeHtml, currElement: unsafeHtml) {
    if (!currElement) throw new Error('Can\'t find current nav Element');
    if (!previousElem) throw new Error('Can\'t find previous nav Element');

    previousElem.classList.remove('active');
    currElement.classList.add('active');
  }

  /**
   *
   * @param previousElem
   * @param currElement
   */
  private showCurrentElement(
      previousElem: unsafeHtml,
      currElement: unsafeHtml,
  ) {
    if (!currElement) throw new Error('Can\'t find current Element');
    if (!previousElem) throw new Error('Can\'t find previous Element');

    previousElem.classList.add('hidden');
    currElement.classList.remove('hidden');
  }

  /**
   *
   * @param selectedNavItem
   */
  private toggleContent(selectedNavItem: HTMLElement) {
    try {
      for (const content of this.ContentArr) {
        const [contentClass, contentSelectorIdentifier] = content;

        // if no valid dataset value can be found withing the nav item then throw error
        if (!selectedNavItem.dataset.content) {
          throw new Error('Can\'t find proper dataset value within nav item');
        }
        // If either the supplied class or identifier is not valid throw error
        if (!contentClass || !contentSelectorIdentifier) {
          throw new Error('Can\'t find a valid class or identifier to toggle');
        }

        const selectedContent = document.querySelector(
            `.${contentSelectorIdentifier}--${selectedNavItem.dataset.content}`,
        ) as HTMLElement;
        this.showCurrentElement(contentClass, selectedContent);

        // Update the active class
        content[0] = selectedContent;
      }
    } catch (error) {
      throw error;
    }
  }

  /**
   *
   * @param event
   * @returns
   */
  toggleNav(event: MouseEvent) {
    try {
      const eventTarget = event.target as HTMLElement;
      const selectedNavItem = eventTarget.closest(
          `.${this.targetNavClass}`,
      ) as unsafeHtml;
      if (!selectedNavItem) return;

      // If the selected item is the same as previous selected item then return
      if (this.currentNavItem === selectedNavItem) return;

      // toggle nav
      this.toggleNavElement(this.currentNavItem, selectedNavItem);

      // toggle appropriate content
      this.toggleContent(selectedNavItem);

      // Update current active elements
      this.currentNavItem = selectedNavItem;
    } catch (error) {
      console.error(error as Error);
    }
  }
}
