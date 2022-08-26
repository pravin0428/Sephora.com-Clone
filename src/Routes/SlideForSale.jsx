import React from "react"
 
const colors = [ 
        {    
        id : 1,
        img : "https://logan.nnnow.com/content/dam/nnnow-project/30-june-2022/se/SC_Offerpage_Upto40offdesktop.jpg"
        },
        {
          id : 2,  
          img : "https://logan.nnnow.com/content/dam/nnnow-project/02-aug-2022/SephoraandExclusives_TopBannerdesktop.jpg"
        },
        {
          id : 3,  
          img : "https://logan.nnnow.com/content/dam/nnnow-project/08-aug-2022/se/DearDahlia_Offerpage_Paradisedreamdesktop.jpg"
        },
        {
          id : 4,  
          img : "https://logan.nnnow.com/content/dam/nnnow-project/03-aug-2022/Olaplex_Offerpagedesktop.jpg"
        },
    
        {
          id : 5,  
          img : "https://logan.nnnow.com/content/dam/nnnow-project/10-june-2022/se-/Lancome_TopBanner_Get10offdesktop.jpg"
        }
       
    ];
const delay = 2500;

function SlideshowForSalePage() {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);
  
    function resetTimeout() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  
    React.useEffect(() => {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === colors.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );
  
      return () => {
        resetTimeout();
      };
    }, [index]);
  
    return (
      <>
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
      {colors.map((elem)=>(
           <div className="slide" > 
          <img style={{height:"100%" , width:"100%"}} key={elem.id} src={elem.img}  alt="poster" />
        </div>
      ))}
        </div>
  
        <div className="slideshowDots">
          {colors.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
      </>
    );
  }
  
  export default SlideshowForSalePage

 