import constants from '../lib/constants';
import settingsPage from '../components/settingPage';

export default function scrollSettings() {
  const values = appSettings.value;
  const title = strings['scroll settings'];

  const items = [
    {
      key: 'scrollSpeed',
      text: strings['scroll speed'],
      value: values.scrollSpeed,
      valueText: getScrollSpeedString,
      select: [
        [constants.SCROLL_SPEED_FAST, strings.fast],
        [constants.SCROLL_SPEED_NORMAL, strings.normal],
        [constants.SCROLL_SPEED_SLOW, strings.slow],
      ],
    },
    {
      key: 'reverseScrolling',
      text: strings['reverse scrolling'],
      checkbox: values.reverseScrolling,
    },
    {
      key: 'diagonalScrolling',
      text: strings['diagonal scrolling'],
      checkbox: values.diagonalScrolling,
    },
    {
      key: 'scrollbarSize',
      text: strings['scrollbar size'],
      value: values.scrollbarSize,
      valueText: (size) => `${size}px`,
      select: [5, 10, 15, 20],
    },
    {
      key: 'textWrap',
      text: strings['text wrap'],
      checkbox: values.textWrap,
    },
  ];

  function callback(key, value) {
    appSettings.update({
      [key]: value,
    });
  }

  settingsPage(title, items, callback);
}

function getScrollSpeedString(speed) {
  switch (speed) {
    case constants.SCROLL_SPEED_FAST:
      return strings.fast;
    case constants.SCROLL_SPEED_SLOW:
      return strings.slow;
    case constants.SCROLL_SPEED_NORMAL:
    default:
      return strings.normal;
  }
}