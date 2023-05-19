// Styles
import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  StackSection,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectsAreaContent,
  ProjectAreaWrapperColumns,
} from "./style";
import { useEffect, useState } from "react";
import { AboutMe } from "@/components/AboutMe";
import { HeaderMain } from "@/components/HeaderMain";
import {motion} from 'framer-motion'

export const Home = (): JSX.Element => {
  const [aboutMe, setAboutMe] = useState(false as boolean)
  

  useEffect(() => {
    
    const handleScroll = () => {
      if (aboutMe && window.scrollY > 250) {                
        setAboutMe(false)
        window.removeEventListener('scroll', handleScroll)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [aboutMe])
  
  const changeAboutMe = () => {
    setAboutMe(!aboutMe)
  }

  
  return (
    <main>
      <Header>
        <Container>          
          <HeaderContent>
            {!aboutMe 
            ?
            <motion.div 
                initial={{ opacity: 0, scale: 0.5 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.5 }}>
              <HeaderMain changeFunction={changeAboutMe} aboutState={aboutMe} aboutSetState={setAboutMe}/>
            </motion.div>
            :            
            <AboutMe changeFunction={changeAboutMe}/>
          }
            
          </HeaderContent>         
        </Container>
      </Header>
      <StackSection id="tecnologias">
        <Container>
          <Text as="h4" type="heading3" color="grey1">
            Ferramentas que domino
          </Text>
          <StackCards>
            {stackData.map((stack, index) => (
              <Stack key={index} title={stack.title} icon={stack.img} />
            ))}
          </StackCards>
        </Container>
      </StackSection>
      <ProjectsArea id="projetos">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey1">
                Vamos trocar uma ideia?
              </Text>
              <Text as="p" type="body1" color="grey2">
                No linkedIn sempre estou compartilhando meus processos diários
                para desenvolver esses projetos e estou disposto a trocar
                algumas ideias por lá
              </Text>
              <Button
                type="primary"
                target="_blank"
                as="a"
                href={`https://www.linkedin.com/in/${userData.linkedinUser}`}
              >
                Acessar perfil no LinkedIn
              </Button>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Text type="body1" color="grey2" css={{ marginBottom: "$2" }}>
                Projetos
              </Text>
              <Text as="h3" type="heading2" color="grey1">
                Originalidade e{" "}
                <Text as="span" color="brand1" type="heading2">
                  dedicação
                </Text>{" "}
                em cada detalhe
              </Text>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
    </main>
  );
};
