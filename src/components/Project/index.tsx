import {
  Project as ProjectWrapper,
  ProjectStack,
  ProjectStackTech,
  ProjectLink,
  ProjectLinks,
} from "./style";

import { Text } from "@/styles/Text";
import { useEffect, useState } from "react";
import { FaGithub, FaShare } from "react-icons/fa";
import { userData } from "@/utils/userData";
import {motion} from 'framer-motion'
import {deployData} from '@/utils/deployData'

interface ReposType {
  id: number;
  name: string;
  language: string;
  description: string;
  svn_url: string;
  homepage: string;
  pushed_at: string
}

export const Project = (): JSX.Element => {
  const [repositories, setRepositories] = useState<ReposType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data: Response = await fetch(
        `https://api.github.com/users/${userData.githubUser}/repos`
      )

      const json = await data.json();
      json.sort((a: ReposType, b: ReposType) => {
        const dateA = (new Date(a.pushed_at)).getTime()
        const dateB = (new Date(b.pushed_at)).getTime()
        
        return dateB - dateA
      })
      
      setRepositories(json);

      if (!data.ok) {
        throw data;
      }

      return json;
    };
    fetchData();
  }, []);

  return (
    <>
      {repositories?.map((repository) => (
        <ProjectWrapper key={repository.id}>
          <motion.div 
            style={{
              padding: "16px",
              borderRadius: "8px",
              boxShadow: 'inset 0px 0px 12px -6px',
           }} 
            whileHover={{
              scale: 1.02,
              boxShadow: '0px 0px 18px -9px',
              transition: { duration: 0.3 },
              }}>      
              
            <Text
              as="h2"
              type="heading3"
              css={{ marginBottom: "$3" }}
              color="grey1"
              >
              {repository.name}
            </Text>

            {repository.language && (
              <ProjectStack>
                <Text type="body2">Linguagem:</Text>
                <ProjectStackTech>
                  <Text color="brand1" type="body2">
                    {repository.language}
                  </Text>
                </ProjectStackTech>
              </ProjectStack>
            )}

            <Text type="body1" color="grey2">
              {repository.description}
            </Text>
            <ProjectLinks>
              <ProjectLink target="_blank" href={(repository.svn_url)}>
                <FaGithub /> Github Code
              </ProjectLink>
              {repository.homepage && (
                <ProjectLink target="_blank" href={repository.homepage}>
                  <FaShare /> Aplicação
                </ProjectLink>
              )}
            </ProjectLinks>
          </motion.div>
        </ProjectWrapper>
      ))}
    </>
  );
};
