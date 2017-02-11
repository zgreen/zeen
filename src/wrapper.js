import criticalStyles from '!!raw!../critical.css'
import config from './config'

const criticalOutput = config.renderCriticalLocally
  ? `<style>${criticalStyles}</style>`
  : `<script>
(function () {
  if ((window.location.host === 'localhost:8080' && -1 !== window.location.search.indexOf('renderCritical')) || window.location.host !== 'localhost:8080') {
    var style = document.createElement('style')
    style.innerHTML = '${criticalStyles}'
    document.getElementsByTagName('head')[0].appendChild(style)
  }
}())
</script>
<noscript>
  <style>${criticalStyles}</style>
</noscript>`

export default function ({ html }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>${config.siteName}</title>
  ${criticalOutput}
</head>
<body>
  <div id="app">${html}</div>
</body>
</html>`
}
