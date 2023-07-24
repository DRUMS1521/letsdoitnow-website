<template>
    <div class="wrapper">
      <div class="layout">
        <h1 class="title">Digital <br><span class="rectangle">Solutions</span><br>Software</h1>
        <p class="pf">We build at scale, let's make your ideas come true</p>
        <div class="layout-btn">
        <a href="">
          <button class="btn-style-deg" @click="quote">
            Request a quote now
          </button>
        </a>
        <a href="">
          <button class="btn-underline">
            View portfolio
          </button>
        </a>
        </div>
      </div> 
      </div> 
  
      <div class="wrapper-2">
        <div class="grid-card">
        <Card :imgIcon="1"
              :text="'Web design'"/>
        <Card :imgIcon="2"
              :text="'Software engineering'"/>
        <Card :imgIcon="3"
              :text="'Mobile application development'"/>
        <Card :imgIcon="4"
              :text="'Web application development'"/>            
      </div> 
        <div class="layout-2">
        <h1 class="subtitle">What do we do for you?</h1>
        <p class="pf">Your vision is our mission. Allow us to turn your ideas into tangible realities!</p>
        <a href="">
          <button class="btn-style-deg">
            See more
          </button>
        </a>
      </div>
      </div>
  
      <div class="wrapper-3">
        <div>
          <CardInformation :imgIcon="1"
            :text="'Over 7 years in the industry.'" :longText="'We don´t just aim to deliver a product for the present. We design long-lasting strategies, engineered to lead the industry.'"/>
        </div>
        <div>
          <CardInformation :imgIcon="2"
            :text="'We design your ideas'" :longText="'We create digital projects that align with the needs of your business and the future of your market.'"/>
        </div>
        <div>
          <CardInformation :imgIcon="3"
            :text="'We connect your business with your target audience'" :longText="'Technology is moving faster than ever. We aim to take your business into the digital world, considering the benefits right from day one.'"/>
        </div>
        <div>
          <CardInformation :imgIcon="4"
            :text="'International team'" :longText="'We have a global network of developers that enables us to create high-quality software at the best price.'"/>
        </div>      
      </div>
  
      <div class="wrapper-6">
      <div class="layout-3">
        <h1 class="subtitle">We share our <br>know<span class="rectangle">ledge and passion</span> for the digital world</h1>
        <p class="pf">Immerse yourself in the latest information and trends of the digital world</p>
        <div class="layout-btn">
        <a href="">
          <button class="btn-style-deg">
            Visit out blog
          </button>
        </a>
        </div>
      </div>
        <div class="layout-4">
          <CardBlogResume :timeRead="'8min'" :category="'Artificial Intelligence'" :nameCreator="'Marysabel'" :title="'The inevitable change'"/>
          <CardBlogResume :timeRead="'8min'" :category="'Artificial Intelligence'" :nameCreator="'Marysabel'" :title="'Unleashing the Power of Artificial Intelligence'"/>
        </div>
      </div> 
  
      <div class="wrapper-4">      
        <CardBlogCategory :text="'Tech'" :text2="'Artificial Intelligence'" :text3="'Education'" :text4="'Webinars'" :text5="'Events'"/>
      </div>
  
      <div class="wrapper-5">
        <h2>Join our network of satisfied clients and experience the digital transformation of your business</h2>
        <div class="layout-5">
          <CardReview :review="'We hired Lets Do It because we wanted to have a stronger online presence. Not only did they help us improve our website, but they also offered our customers a personalized experience.'" :company="'Owner, AJPenny'" :namePerson="'Penélope'"/>
          <CardReview :review="'The best value-for-money option. These guys work magic. I´ve been with Let´s Do It for 6 months, working on my website and some advertising campaigns, and my business keeps growing tremendously.'" :company="'Manager Real/ Satate Agency'" :namePerson="'Ian'"/>
          <CardReview :review="'Let´s Do It is a company that stands out for their ability to understand our business, not just taking our requirements, but becoming a part of our team.'" :company="'CEO, AliadaGO'" :namePerson="'Brandon'"/>
        </div>
        <p>Start the transformation now
          <br>Are you ready? Let's do it now!</p>
          <a href="">
          <button class="btn-style-deg" @click="freeConsulation">
            Receive a free consultation
          </button>
        </a>
      </div>
  
    </template>
    
    <script>
      import Card from './cards/card-1.vue'
      import CardBlogCategory from './cards/cardBlogCategory.vue';
      import CardBlogResume from './cards/cardBlogResume.vue';
      import CardInformation from './cards/cardInformation.vue'
      import CardReview from './cards/cardReview.vue';
      export default {
        components: {
              Card,
              CardInformation,
              CardBlogResume,
              CardBlogCategory,
              CardReview
          },
          methods:{
            quote: function(event) {
            window.open("https://7j1l5jqb43v.typeform.com/to/kSlNtr0J");
            },
            freeConsulation: function(event){
                window.open("https://calendly.com/juanes-paca-letsdoitnow/30min?month=2023-07")
            }
        
        }
    };
    </script>
  
    <style>
    .wrapper{
      height: 600px;
      display: flex;
      display: grid;
      grid-template-columns: 1fr 1fr;
      flex-direction: column;
      justify-items: center;
      justify-content: center;
      background-image: url("../assets/recurso-1.svg");
      background-repeat: no-repeat;
      background-size: cover;
    }
    .layout{
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 500px;
      text-align: left;
      margin-left: 32px;
      margin-bottom: 10%;
    }
  
    .layout-btn{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  
    .layout-img{
      width: 0%;
      display: flex;
      justify-items: flex-end;
    }
  
    .rectangle{
      background: linear-gradient(180deg, rgba(121, 219, 146, 0.00) 57.28%, #79DB92 57.29%);
    }
  
    .wrapper-2{
      max-height: fit-content;
      display: grid;
      grid-template-columns: 1fr 1fr;
      background-image: url("../assets/background-1.svg");
      background-repeat: no-repeat;
      background-size: cover;
    }
  
    .grid-card{
      display: grid;
      align-items: center;
      justify-items: center;
      grid-template-columns: 1fr 1fr;
      margin-top: 250px;
      height: 500px;
      justify-content: space-between;
    }
    
    .layout-2{
      margin-top: 40px;
      width: 600px;
      text-align: right;
      margin-left: 32px;
    }
  
    .wrapper-3{
      max-height: fit-content;
      display: grid;
      grid-template-columns: 1fr 1fr;
      background-color: #E1FFDC;
      justify-items: center;
      padding: 15% 0;
    }
  
    .layout-3{
      width: 420px;
      text-align: left;
      margin-right: 15%;
    }
  
    .layout-4{
      padding: 10% 0;
    }
  
    .wrapper-4{
      padding: 25px;
      background-color: #79DB92; ;
    }
  
    .wrapper-5{
      margin-top: 50px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  
    .wrapper-5 h2{
      width: 650px;
      color: #263F28;
      letter-spacing: 0.8px;
      font-weight: 700;
    }
  
    .layout-5{
      width: 100%;
      margin-bottom: 100px;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  
    .wrapper-5 button{
      margin-top: 32px;
    }
  
    .wrapper-6{
      max-height: fit-content;
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-items: center;
      align-items: center;
    }

    @media screen and (max-width: 768px){
    .wrapper{
    height: 500px;
    display: flex;
    background-image: none;
  }

  .wrapper-2{
    max-height: fit-content;
    display: flex;
    flex-direction: column-reverse;
    background-image: url("../assets/background-1.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 60%;
  }

  .layout{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: fit-content;
    text-align: left;
    margin-left: 32px;
    margin-bottom: 10%;
  }

  .grid-card{
    display: flex;
    align-items: center;
    justify-items: center;
    flex-direction: column;
    grid-template-columns: 1fr;
    margin-top: 0px;
    margin-bottom: 1rem;
    height: 660px;
    justify-content: space-between;
  }
  
  .layout-2{
    margin-top: 40px;
    margin-bottom: 40px;
    width: fit-content;
    text-align: center;
    margin: 40px 32px;
  }

  .layout-btn{
    align-items: flex-start;
    flex-direction: column;
  }

  .wrapper-3{
    max-height: fit-content;
    background-color: #E1FFDC;
    justify-items: center;
    padding: 15% 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
  }

  .wrapper-6{
    max-height: fit-content;
    display: flex;
    flex-direction: column;
    justify-items: center;
  }

  .layout-3{
    width: fit-content;
    margin-right: 0;
    padding: 1rem;
  }

  .wrapper-5 h2{
    display: flex;
    width: fit-content;
  }

  .layout-5{
    flex-direction: column;
  }


  }  
  
    </style>
    