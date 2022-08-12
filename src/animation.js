export const pageAnimation = {
    hidden: {
        opacity: 0, 
        y: 300,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            when:'beforeChildren',
            staggerChildren: 0.3,
        } 
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.75,
        } 
    }
}

export const aboutAnim = {
    hidden: {y: 600},
    show: {
        y: 0,
        transition:{duration: 0.75, ease: 'easeOut'},
    }
}

export const btnAnim = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {ease: 'easeOut', duration: 0.75},
    }
}

export const picAnim = {
    hidden : {scale: 1.5, opacity: 0},
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            ease: 'easeOut',
            duration: 0.75,
        }
    }
}

export const lineAnim = {
    hidden: { width: '0%'},
    show: {
        width: '100%',
        transition: {duration: 0.75},
    } 
}

export const slideAnim = {
    hidden: { x: "-130%", skew: "90deg", y: 0 },
  show: {
    x: "100%",
    skew: "0deg",
    y: "70%",
    transition: { ease: "easeOut", duration: 0.5 },
  },
}

export const scrollAnim = {
    hidden: { opacity: 0.5, 
        scale: 1.1,
        transition: {
            duration: 1,
          } },
    show: {
      opacity: 1,
      scale:1,
     
      transition: {
        duration: 0.5,
      },
    },
  };