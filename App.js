function sendCommand(cmd) {
  fetch(`http://${config.ip}/cmd`, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain' },
    body: cmd
  })
}

document.getElementById('btnHome').onclick = () => sendCommand(config.macros.homeAll)
document.getElementById('btnProbeZ').onclick = () => sendCommand(config.macros.probeZ)
document.getElementById('btnStartJob').onclick = () => sendCommand(config.macros.startJob)
document.getElementById('btnStop').onclick = () => sendCommand(config.macros.emergencyStop)
document.getElementById('btnOrigin').onclick = () => sendCommand(config.macros.goOrigin)
document.getElementById('btnLevelZ').onclick = () => sendCommand(config.macros.levelZ)
document.getElementById('btnLevelXY').onclick = () => {
  config.macros.levelXY.forEach(cmd => sendCommand(cmd))
}

setInterval(() => {
  fetch(`http://${config.ip}/status`)
    .then(res => res.json())
    .then(data => {
      document.getElementById('posX').textContent = data.posx.toFixed(2)
      document.getElementById('posY').textContent = data.posy.toFixed(2)
      document.getElementById('posZ').textContent = data.posz.toFixed(2)
    })
}, 500)
