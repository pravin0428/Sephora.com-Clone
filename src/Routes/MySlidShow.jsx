 import React from "react"
const colors = [ 
        {    
        id : 1,
        img : "https://logan.nnnow.com/content/dam/nnnow-project/30-june-2022/se/SC_Topbanner_ExclusivelyatSephoradesktop.jpg"
        },
        {
          id : 2,  
          img : "https://logan.nnnow.com/content/dam/nnnow-project/17-aug-2022/Benefit_Homepagebanner_Colormobile.jpg"
        },
        {
          id : 3,  
          img : "https://logan.nnnow.com/content/dam/nnnow-project/17-aug-2022/ABH_Homepagebannermobile(1).jpg"
        },
        {
          id : 4,  
          img : "https://logan.nnnow.com/content/dam/nnnow-project/09-aug-2022/se/Esteelauder_Homepagebannerdesktop.jpg"
        },
    
        {
          id : 5,  
          img : "https://logan.nnnow.com/content/dam/nnnow-project/16-aug-2022/se/Clarins_Topbannermobile.jpg"
        },
        {
          id : 6,  
         img : "https://logan.nnnow.com/content/dam/nnnow-project/15-july-2022/Hanzdefuko_Topbannerdesktop.jpg"
        },
        {
          id : 7,  
          img : "https://logan.nnnow.com/content/dam/nnnow-project/06-july-2022/Sephora_HomepageBannermobile.jpg"
        }
    ];
const delay = 2500;

function Slideshow() {
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
  
  export default Slideshow

// const colors = ["#0088FE", "#00C49F", "#FFBB28"];
// const delay = 2500;

// function Slideshow() {
//   const [index, setIndex] = React.useState(0);
//   const timeoutRef = React.useRef(null);

//   function resetTimeout() {
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }
//   }

//   React.useEffect(() => {
//     resetTimeout();
//     timeoutRef.current = setTimeout(
//       () =>
//         setIndex((prevIndex) =>
//           prevIndex === colors.length - 1 ? 0 : prevIndex + 1
//         ),
//       delay
//     );

//     return () => {
//       resetTimeout();
//     };
//   }, [index]);

//   return (
//     <>
//     <div className="slideshow">
//       <div
//         className="slideshowSlider"
//         style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
//       >
//         {colors.map((elem, index) => (
//           <div
//             className="slide"
//          <img></img>
//           ></div>
//         ))}
//       </div>

//       <div className="slideshowDots">
//         {colors.map((_, idx) => (
//           <div
//             key={idx}
//             className={`slideshowDot${index === idx ? " active" : ""}`}
//             onClick={() => {
//               setIndex(idx);
//             }}
//           ></div>
//         ))}
//       </div>
//     </div>
//     </>
//   );
// }

// export default Slideshow