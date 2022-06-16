import { Heading, SimpleGrid, GridItem, VStack } from '@chakra-ui/react'

import { Project } from '../src/types/project'
import PortfolioHero from '@/components/sections/portfolio-hero'

import Skills from '../src/components/skills/skills'
import PortfolioSection from '@/components/sections/portfolio-section'

type Props = {
    projects: Project[]
}

const Portfolio = ({ projects }: Props) => {
    return (
        <VStack as="section" alignItems="flex-start" w="full" spacing={4}>
            <Heading size="lg">Portfolio.</Heading>
            <PortfolioHero />
            <Skills />
            <PortfolioSection projects={projects} />
        </VStack>
    )
}

export default Portfolio
