module.exports = {
  name: 'wipdeveloper.com', // optional, falls back to object key
  description: 'Personal web site',
  options: {
    frequency: 60 * 1, // 1 hours
    freshChrome: 'site',
  },
  urls: [
    'https://wipdeveloper.com/',
    'https://wipdeveloper.com/posts/',
    'https://wipdeveloper.com/newsletter/',
    'https://wipdeveloper.com/about/',
    // Popular Posts
    'https://wipdeveloper.com/lwc-loadscript-issue/',
    'https://wipdeveloper.com/lwc-local-development-beta/',
  ],
};
