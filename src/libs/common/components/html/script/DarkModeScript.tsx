const script = `
    var body = document.body;
    var localTheme = localStorage.getItem('theme');
    var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    var theme = localTheme || systemTheme || 'light' ;
    document.documentElement.setAttribute("data-theme", theme);
`;

const DarkModeScript = () => {
  return <script dangerouslySetInnerHTML={{ __html: script }}></script>;
};

export default DarkModeScript;
