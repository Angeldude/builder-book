import Head from 'next/head'
import Button from '@mui/material/Button'


const Index = () => (
  <div style={{ padding: '10px 45px' }}>
    <Head>
      <title>Index page</title>
      <meta name="description" content="This is the description of the Index page" />
    </Head>
    <p>All this work for some black text on white background.</p>
    <p>
      <a href="https://angeldude.github.io">Go here for my blog</a>
    </p>
    <Button variant='contained'>MUI Shit</Button>
  </div>
)

export default Index;
