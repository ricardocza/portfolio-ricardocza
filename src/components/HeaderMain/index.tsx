import { HeaderButtonsArea } from "@/pages/home/style"
import { Button } from "@/styles/Buttons"
import { Text } from "@/styles/Text"
import { HeaderMainStyle } from "./style"

interface iProps {
    changeFunction: () => void
    aboutState: boolean
    aboutSetState: React.Dispatch<React.SetStateAction<boolean>>
}
export const HeaderMain = ({changeFunction, aboutState, aboutSetState}: iProps) => {

    return <HeaderMainStyle>
        <Text as="h1" type="heading1" color="grey5">
              Criando experiências por meio da tecnologia{" "}
            </Text>
            <Text type="body1" color="grey6">
              Sou estudante de programação na Kenzie Academy Brasil, participei
              de diversos projetos resolvendo problemas de alto nível e
              desenvolvendo habilidades
            </Text>
            <HeaderButtonsArea>
              <Button as="a" onClick={changeFunction}>
                Sobre mim 
              </Button>
              <Button as="a" href="#projetos" type="btLink" color="grey5">
                Projetos
              </Button>
              <Button as="a" href="#tecnologias" type="btLink" color="grey5">
                Tecnologias
              </Button>
            </HeaderButtonsArea>
    </HeaderMainStyle>
}