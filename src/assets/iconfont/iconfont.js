import { createGlobalStyle } from 'styled-components';

export const IconStyle = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1591088981964'); /* IE9 */
  src: url('iconfont.eot?t=1591088981964#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('iconfont.woff?t=1591088981964') format('woff'),
  url('iconfont.ttf?t=1591088981964') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?t=1591088981964#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-check-circle:before {
  content: "\e77d";
}

.icon-CI:before {
  content: "\e77e";
}

.icon-Dollar:before {
  content: "\e77f";
}

.icon-compass:before {
  content: "\e780";
}

.icon-close-circle:before {
  content: "\e781";
}

.icon-frown:before {
  content: "\e782";
}

.icon-info-circle:before {
  content: "\e783";
}

.icon-left-circle:before {
  content: "\e784";
}

.icon-down-circle:before {
  content: "\e785";
}
`;
