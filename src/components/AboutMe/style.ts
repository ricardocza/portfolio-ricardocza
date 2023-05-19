import { styled } from "@/styles/stitches.config";

export const AboutMeStyle = styled("div", {  
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    

    ".main-motion": {
        width: "600px",
        position: "absolute" ,      
        top: "40%",        
        zIndex: 5,
        "@mobile": {
            width: "90%",
            top: "69%",
            margin: "0 auto"        
          },
    },
    
    ".img-motion": {
        width: "300px",
        height: "300px",
        borderRadius: "100%",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        zIndex: 0,
        transform: "translateY(-50%)",
        "@mobile": {
            top: "-140px"
          },
        
        
        img: {
            filter: "grayscale(100%)",
            width: "100%",
            opacity: "0.3"
        }
    }


})