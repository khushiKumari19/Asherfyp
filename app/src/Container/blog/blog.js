import Header from "../../Components/Header/Header"
import './blog.css'
import { Container, Row, Col } from "reactstrap";
const blog = () => {
    return(
        
        <Header>              
        <h1 className="blog"><strong>Driving the future of finance with <br/>CarT tokenized car investments</strong></h1>
        
        <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
          <div class="card">
                <div class="tools">
                    <div class="circle">
                    <span class="red box"></span>
                    </div>
                    <div class="circle">
                    <span class="yellow box"></span>
                    </div>
                    <div class="circle">
                    <span class="green box"></span>
                    </div>
                </div>
                <div class="card__content">
                    <h2><b>Build Your Passive Income with Cars on Blockchain</b></h2>
                    <p>The car Market, which has always been a sector known for being reluctant to innovate, continues in constant technological evolution!

                    Tokenization is the creation of digital assets that represent other assets, whether virtual or real. They run on the blockchain, and have been used to improve information security in various companies and industries. And now, this movement has arrived in the car market!
                    <br/>
                    Car investment is not for everyone, or it wasn't for everyone.</p>
                </div>
                </div>
                        <br/>  
                   
                        </Col>

                        <Col lg="6" md="6">
                            <div class="card">
                <div class="tools">
                    <div class="circle">
                    <span class="red box"></span>
                    </div>
                    <div class="circle">
                    <span class="yellow box"></span>
                    </div>
                    <div class="circle">
                    <span class="green box"></span>
                    </div>
                </div>
                <div class="card__content">
                <div class="card__content">
                    <h2><b>Real World Assets on Blockchain</b></h2>
                    <p>You may have heard of cryptocurrency and blockchain withspeculative assets. This is not carT use; for us, Blockchain technology is the best solution to give investors ownership of Real World Assets. We use Blockchain as a network to exchange financial assets, just as the Internet is a network for exchanging information. This new technology allows you to own your share of ownership without the need for a broker. <br/>With the transaction cost very low, investors can buy multiple RealTokens and receive rents from hundreds of properties at no cost.</p>
                </div>
                </div>
                </div>
                <br/>
                        </Col>

                        </Row>
                    </Container>
                    </section>
  
        
        </Header>

    );

}
export default blog;