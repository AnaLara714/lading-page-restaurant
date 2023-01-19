import React from "react";
import { useSwipeable } from "react-swipeable";
import { Div, DivCarousel, DivInner, DivItem } from "./carousel.style";

interface CarouselItemProps {
  children: React.ReactNode;
  // width: string;
}

interface CarouselProps {
  children: React.ReactNode;
}

export const CarouselItem: React.FC<CarouselItemProps> = ({children}) => {
  return(
   <DivItem >
      {children}
   </DivItem>
  );
};

export const Carousel: React.FC<CarouselProps> = ({children}) => {
  const [ activeIndex, setActiveIndex ] = React.useState(0);
  const [ paused, setPaused ] = React.useState(false);

  const updateIndex = (newIndex: any) => {
    if(newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };
  
  React.useEffect(() => {
    const interval = setInterval(() => {
     if(!paused) {
      updateIndex(activeIndex + 1);
     }
    }, 1500);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1 ),
    onSwipedRight: () => updateIndex(activeIndex - 1 ),
    
  });

  return(
    <DivCarousel
      {...handlers}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <DivInner style={{transform: `translateX(-${activeIndex * 100}%)`}}>
         {children}
      </DivInner>
      <Div>
        <button onClick={() => { updateIndex(activeIndex - 1)}}>Voltar </button>
        <button onClick={() => { updateIndex(activeIndex + 1)}}>Próximo </button>
      </Div>
    </DivCarousel>
  );
};
