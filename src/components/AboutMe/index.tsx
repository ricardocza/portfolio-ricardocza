import { HeaderButtonsArea, HeaderContent } from "@/pages/home/style"
import { Button } from "@/styles/Buttons"
import { Text } from "@/styles/Text"
import {motion} from 'framer-motion'
import profile from '../../public/static/img/background/profile.jpg'
import { AboutMeStyle } from "./style"

interface iProps {
    changeFunction: () => void    
}
export const AboutMe = ({changeFunction}: iProps) => {

    return <AboutMeStyle>
    <motion.div className="main-motion"
      initial={{opacity: 0, x: "100vw", y: 0, z: 5}}
      animate={{opacity:1, x: 0, translateY: "-50%"}}      
      transition={{duration: 0.5, ease: "easeInOut"}}
      >    
      <Text as="h1" type="heading1" color="grey5">
        Sobre mim{" "}
      </Text>
      <Text type="body1" color="grey6">
      Engenheiro mecânico em transição de carreira para a área de desenvolvimento. Solucionador de problemas com paixão por crescimento e inovação. Animado para criar soluções de software impactantes e contribuir para avanços tecnológicos.
      </Text>
      <HeaderButtonsArea>
        <Button as="a" onClick={changeFunction}>
          VOLTAR
        </Button>        
      </HeaderButtonsArea>
      </motion.div>
      
      <motion.div className="img-motion" 
        initial={{ opacity: 0, scale: 0.5, y: "80%" }} 
        animate={{ opacity: 1, scale: 1 }}         
        transition={{ duration: 1, delay: 1 }}>
          <img src={profile} alt="" />
      </motion.div>        
      
  </AboutMeStyle>

}