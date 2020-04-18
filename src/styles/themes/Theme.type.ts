export type Theme = {
  mq: Function
  image: {
    logo: string
    title: string
    titleTransparent: string
    donateCTA: string
    welcomeCTA: string
  }
  color: {
    background: string
  }
  textSize: {
    XXS: string
    XS: string
    S: string
    M: string
    L: string
    XL: string
  }
  spacing: {
    XXS: string
    XS: string
    S: string
    M: string
    L: string
    XL: string
    XXL: string
  }
  font: {}
  layout: {
    maxPageWidth: string
    topNavHeight: string
  }
  shape: {
    roundedCorner: string
    circleDiameter: {
      S: string
      M: string
      L: string
    }
  }
  animation: {
    mapMovementTransitionSpeed: string
  }
}
