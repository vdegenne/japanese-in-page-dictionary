import { css } from 'lit';

export const searchManagerStyles = css`
:host {
  display: block;
  font-family: Roboto;
  position: relative;
  z-index: 9999;
  /* --mdc-theme-surface: white; */
}
mwc-textfield {
  width: 100%;
}

mwc-tab-bar {
  position: absolute;
  bottom: 57px;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: white;
  border: 1px solid #bdbdbd;
}

#words-results, #kanji-results {
  /* padding-bottom: 52px; */
}

#words-results > p, #kanji-results > p {
  /* font-weight: 600; */
  background-color: #e0e0e0;
  color: white;
  /* display: inline-block; */
  padding: 2px 14px;
  border-radius: 15px;
}

search-item-element {
  padding: 15px 0;
  /* padding-bottom: 15px;
  margin-bottom: 15px; */
  border-bottom: 1px solid #eeeeee;
}
search-item-element:first-of-type {
  padding-top: 0;
}
search-item-element:last-of-type {
  border-bottom: 0;
}
`