import React from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment,
} from 'semantic-ui-react'
import ResponsiveContainer from "../../Components/ResponsiveContainer/ResponsiveContainer"
import Career from "../../Components/Career/Career"
import TechnicalSkills from "../../Components/TechnicalSkills/TechnicalSkills"
import Footer from "../../Components/Footer/Footer"
import Tab from '../../Components/Tab/index'
import Portifolio from  "../../Components/Portifolio/Portifolio"
import Responsive from "../../Components/Slick/Slick"
// import HomepageHeading from '../../Components/HomePageHeading/HomepageHeading'
const HomepageLayout = () => (
  <React.Fragment>
  {/* <div className="parallax"> <HomepageHeading/>  </div> */}
  <ResponsiveContainer> 
   <Career/>
   <TechnicalSkills/>
   <Tab/>
  
{/* <Portifolio/> */}
    <Segment style={{ padding: '8em 0em',marginTop:"-1rem",color:"white",backgroundColor:"#6b665bc2" }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em', margin:"-2rem 0rem 2rem 1.8rem", }}>
         <b style={{color:"white"}}>MY PORTFOLIO</b>
        </Header>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '4em 0em', textTransform: 'uppercase' }}
        >
          <a style={{color:"white"}}>Click on the Card to view responsibilities</a>
        </Divider>
       <Responsive/>
   

        {/* <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '4em 0em', textTransform: 'uppercase' }}
        >
          <a href='#'>Case Studies</a>
        </Divider>

        <Header as='h3' style={{ fontSize: '2em' }}>
          Did We Tell You About Our Bananas?
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but
          it's really true. It took years of gene splicing and combinatory DNA research, but our
          bananas can really dance.
        </p>
        <Button as='a' size='large'>
          I'm Still Quite Interested
        </Button> */}
      </Container>
    </Segment>
<Footer/>
    
  </ResponsiveContainer>

  </React.Fragment>
)

export default HomepageLayout
