export const flexStyles = {
  main: {
    justifyContent: 'center',
    minHeight: '100vh',
    position: 'relative',
    willChange: 'transform',
    pt: '100px',
    pb: '60px',
    pl: ['20px'],
    pr: ['20px'],
    ml: [0, 0, '75px',],
    mr: [0, 0, '75px',],
    transition: 'transform .8s cubic-bezier(.19,1,.22,1)',
    animation: 'b 1.5s ease',
  },
  openFooter: {
    transform: "translateY(-250px)",
    justifyContent: 'center',
    minHeight: '100vh',
    position: 'relative',
    willChange: 'transform',
    pt: '100px',
    pb: '60px',
    pl: ['20px'],
    pr: ['20px'],
    ml: [null, 0, '75px',],
    mr: [null, 0, '75px',],
    transition: 'transform .8s cubic-bezier(.19,1,.22,1)',
  },
}