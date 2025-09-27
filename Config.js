const config = {
  ip: '192.168.1.42',
  macros: {
    homeAll: 'G28',
    probeZ: 'G38.2 Z-10 F100\nG10 L20 P1 Z0',
    startJob: 'M0',
    emergencyStop: '!',
    goOrigin: 'G90\nG0 X0 Y0',
    levelZ: 'G29',
    levelXY: [
      'G0 X10 Y10\nG38.2 Z-10 F100',
      'G0 X90 Y10\nG38.2 Z-10 F100',
      'G0 X10 Y90\nG38.2 Z-10 F100',
      'G0 X90 Y90\nG38.2 Z-10 F100'
    ]
  }
}
