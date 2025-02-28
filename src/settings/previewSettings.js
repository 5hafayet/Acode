import settingsPage from '../components/settingPage';

export default function previewSettings() {
  const values = appSettings.value;
  const title = strings['preview settings'];
  const PORT_REGEX = /^([1-9][0-9]{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/;
  const items = [
    {
      key: 'previewPort',
      text: strings['preview port'],
      value: values.previewPort,
      prompt: strings['preview port'],
      promptType: 'number',
      promptOptions: {
        test(value) {
          return PORT_REGEX.test(value);
        }
      }
    },
    {
      key: 'serverPort',
      text: strings['server port'],
      value: values.serverPort,
      prompt: strings['server port'],
      promptType: 'number',
      promptOptions: {
        test(value) {
          return PORT_REGEX.test(value);
        }
      }
    },
    {
      key: 'previewMode',
      text: strings['preview mode'],
      value: values.previewMode,
      select: [
        ['browser', strings.browser],
        ['inapp', strings.inapp],
      ],
    },
    {
      key: 'host',
      text: strings.host,
      value: values.host,
      prompt: strings.host,
      promptType: 'text',
      promptOptions: {
        test(value) {
          try {
            new URL(`http://${value}:${values.previewPort}`);
            return true;
          } catch (error) {
            return false;
          }
        }
      }
    },
    {
      key: 'disableCache',
      text: strings['disable in-app-browser caching'],
      checkbox: values.disableCache,
    },
    {
      note: strings['preview settings note'],
    }
  ];

  function callback(key, value) {
    appSettings.update({
      [key]: value,
    });
  }

  settingsPage(title, items, callback);
}
