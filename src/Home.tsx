import * as React from "react"
import { useEffect, useState } from "react"

import { fetchArticles } from "./rss"

import {
  Box,
  Text,
  Heading,
  Container
} from "@chakra-ui/react"
import { MathJax } from "better-react-mathjax"

export const Home: React.FC = (props) => {
  const [articles, setArticles] = useState<any[]>([])
  const [date, setDate] = useState<string>('TODAY')

  useEffect(() => {
    fetchArticles()
    .then(data => {
      setArticles(data)
    })
    const myDate = new Date()
    setDate(myDate.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }).toUpperCase())
  }, [])

  return (
    <Box>
      <Box>
        <Heading size="3xl">ARXIV</Heading>
      </Box>

      <Box
        textAlign="center"
        borderTop="2px"
        borderBottom="4px"
        fontStyle="italic"
      >
        {date}
      </Box>

      <Container maxW="1500px">
        <Box my="2em" textAlign="justify" style={{ columnCount: 4 }}>
          {
            articles.map((article) => (
              <>
                <Heading
                  size="md"
                  fontStyle="italic"
                  borderTop="double"
                  borderBottom="solid"
                  borderWidth="5px 0 2px 0"
                  p="4"
                >
                  <MathJax>
                    {article.title}
                  </MathJax>
                </Heading>

                <Text fontSize="xs" textAlign="center">{article.published}</Text>

                <Text>
                  <MathJax>
                    {article.summary}
                  </MathJax>
                </Text>
              </>
            ))
          }
        </Box>
      </Container>
    </Box>
  )
}
