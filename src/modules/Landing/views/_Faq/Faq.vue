<template>
  <LayoutContainer class="faq-wrapper">
    <LandingHeader slot="header"></LandingHeader>
    <div slot="body" class="body-container" ref="bodyContainer">
      <b-container id="title-container" class="cosball-content">
        <b-row class="justify-content-md-left">
          <b-col col lg="12">
            <h1>Frequently Asked Question</h1>
            <hr>
          </b-col>
        </b-row>
      </b-container>
      <b-container class="tabsection">
        <div role="tablist">
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button
                block
                href="#"
                v-b-toggle.cosball-faq-1
              >1. How do I register for an account to use the SCAN demo system?</b-button>
            </b-card-header>
            <b-collapse id="cosball-faq-1" visible cosball-faq="cosball-faq" role="tabpanel">
              <b-card-body>
                <b-card-text>
                  You may request to register for an account by sending us an email to
                  <span class="link" @click="sendEmail">hello@cosball.io</span> or by clicking on the Sign Up button above.
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button
                block
                href="#"
                v-b-toggle.cosball-faq-3
              >2. Can I sign up for an account via the website?</b-button>
            </b-card-header>
            <b-collapse id="cosball-faq-3" cosball-faq="cosball-faq" role="tabpanel">
              <b-card-body>
                <b-card-text>
                  Yes, you can sign up for an account with us via the website, but you will not be granted immediate access to the demo system.
                  Our team will review your application and perform background verification, and send you the next step of actions via email.
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button
                block
                href="#"
                v-b-toggle.cosball-faq-4
              >3. Is there any costs associated with the demo account registration.</b-button>
            </b-card-header>
            <b-collapse id="cosball-faq-4" cosball-faq="cosball-faq" role="tabpanel">
              <b-card-body>
                <b-card-text>No, there is no cost to access the demo account. It's free.</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button
                block
                href="#"
                v-b-toggle.cosball-faq-5
              >4. Is there any limits on the number of users per exchange?</b-button>
            </b-card-header>
            <b-collapse id="cosball-faq-5" cosball-faq="cosball-faq" role="tabpanel">
              <b-card-body>
                <b-card-text>No, there is no limit as of now.</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button
                block
                href="#"
                v-b-toggle.cosball-faq-6
              >5. As a registered user, what action am I allowed to perform?</b-button>
            </b-card-header>
            <b-collapse id="cosball-faq-6" cosball-faq="cosball-faq" role="tabpanel">
              <b-card-body>
                <b-card-text>As a registered user, you may upload skindata addresses, search for a skindata address, or update an existing skindata address.</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button
                block
                href="#"
                v-b-toggle.cosball-faq-7
              >6. Is there any time limit or duration for a user to access the demo system?</b-button>
            </b-card-header>
            <b-collapse id="cosball-faq-7" cosball-faq="cosball-faq" role="tabpanel">
              <b-card-body>
                <b-card-text>No, there's none. A registered user can access the demo system for as long as his or her account is active.</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button
                block
                href="#"
                v-b-toggle.cosball-faq-8
              >7. Does the demo system offer mobile app?</b-button>
            </b-card-header>
            <b-collapse id="cosball-faq-8" cosball-faq="cosball-faq" role="tabpanel">
              <b-card-body>
                <b-card-text>We do not offer any mobile app at the moment, but our website's responsive behavior makes it viewable from any desktop or mobile devices.</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </b-container>
      <GotoTop goToTopId="title-container"></GotoTop>
    </div>
    <div slot="footer">
      <LandingFooter></LandingFooter>
    </div>
  </LayoutContainer>
</template>

<script src="./Faq.js" />
<style src="./Faq.scss" lang="scss" />
