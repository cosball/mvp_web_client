<template>
  <LayoutContainer class="privacy-wrapper">
    <LandingHeader slot="header"></LandingHeader>
    <div slot="body" class="body-container" ref="bodyContainer">
      <b-container id="title-container" class="title-container">
        <b-row class="justify-content-md-left">
          <b-col col lg="12">
            <h1>Cosball Privacy Policy</h1>
            <h5>This privacy policy will explain how our organization uses the personal data we collect from you when you use our website.</h5>
            <hr>
          </b-col>
        </b-row>
      </b-container>
      <div class="policy-container">
        <b-container>
          <b-row>
            <b-col col lg="12">
              <h5>Topics:</h5>
            </b-col>
          </b-row>
          <b-row>
            <b-col col lg="12">
              <b-list-group>
                <b-list-group-item
                  href="#"
                  @click="jumpTo('dataToCollect')"
                >What data do we collect?</b-list-group-item>
                <b-list-group-item
                  href="#"
                  @click="jumpTo('howWeCollectData')"
                >How do we collect your data?</b-list-group-item>
                <b-list-group-item
                  href="#"
                  @click="jumpTo('howWillUseData')"
                >How will we use your data?</b-list-group-item>
                <b-list-group-item
                  href="#"
                  @click="jumpTo('howWeStoreData')"
                >How do we store your data?</b-list-group-item>
                <b-list-group-item href="#" @click="jumpTo('marketing')">Marketing</b-list-group-item>
                <b-list-group-item href="#"
                  @click="jumpTo('dataProtectionRights')"
                >What are your data protection rights?</b-list-group-item>
                <b-list-group-item href="#" @click="jumpTo('whatAreCookies')">What are cookies?</b-list-group-item>
                <b-list-group-item
                  href="#"
                  @click="jumpTo('howWeUseCookies')"
                >How do we use cookies?</b-list-group-item>
                <b-list-group-item
                  href="#"
                  @click="jumpTo('typeOfCookies')"
                >What types of cookies do we use?</b-list-group-item>
                <b-list-group-item
                  href="#"
                  @click="jumpTo('manageCookies')"
                >How to manage your cookies</b-list-group-item>
                <b-list-group-item
                  href="#"
                  @click="jumpTo('otherWebsitesPrivacy')"
                >Privacy policies of other websites</b-list-group-item>
                <b-list-group-item
                  href="#"
                  @click="jumpTo('privacyChanges')"
                >Changes to our privacy policy</b-list-group-item>
                <b-list-group-item href="#" @click="jumpTo('howToContactUs')">How to contact us</b-list-group-item>
                <b-list-group-item
                  href="#"
                  @click="jumpTo('contactAuthorities')"
                >How to contact the appropriate authorities</b-list-group-item>
              </b-list-group>
            </b-col>
          </b-row>
          <hr>
          <b-row class="mt-5">
            <b-col col lg="12">
              <h5 id="dataToCollect">What data do we collect?</h5>
              <p>Cosball collects the following data:</p>
              <ul>
                <li>Personal identification information (Name, email address, phone number, etc.)</li>
                <li>Computer system environmental information.</li>
              </ul>
            </b-col>
          </b-row>
          <b-row class="mt-5">
            <b-col col lg="12">
              <h5 id="howWeCollectData">How do we collect your data?</h5>
              <p>You directly provide Cosball with most of the data we collect. We collect data and process data when you:</p>
              <ul>
                <li>Register online or place an order for any of our products or services.</li>
                <li>Voluntarily complete a customer survey or provide feedback on any of our message boards or via email.</li>
                <li>Use or view our website via your browser's cookies.</li>
              </ul>
              <p>Cosball may also receive your data indirectly from the following sources:</p>
              <ul>
                <li>Use of Cosball crypto wallet.</li>
                <li>Access from Cosball API or other software.</li>
              </ul>
            </b-col>
          </b-row>
          <b-row class="mt-5">
            <b-col col lg="12">
              <h5 id="howWillUseData">How will we use your data?</h5>
              <p>Cosball collects your data so that we can:</p>
              <ul>
                <li>Process your order, manage your account.</li>
                <li>Email you with special offers on other products and services we think you might like.</li>
                <li>Process data for fraud detection.</li>
              </ul>
              <p>
                If you agree, Cosball will share your data with our partner companies so that they may
                offer you their products and services.
              </p>
              <ul>
                <li>The NEM Foundation and its affiliates</li>
                <li>Lantium Inc.</li>
                <li>Lantium Pte Ltd</li>
              </ul>
              <p>
                When Cosball processes your order, it may send your data to, and also use the resulting
                information from, credit reference agencies to prevent fraudulent purchases.
              </p>
            </b-col>
          </b-row>
          <b-row class="mt-5">
            <b-col col lg="12">
              <h5 id="howWeStoreData">How do we store your data?</h5>
              <p>Cosball securely stores your data at in Singapore using better than industry standards methods.</p>
              <p>Cosball will keep your personal identifiable information for 10 years of inactivity. Once this time period has expired, we will delete your data.</p>
            </b-col>
          </b-row>
          <b-row class="mt-5">
            <b-col col lg="12">
              <h5 id="marketing">Marketing</h5>
              <p>Cosball would like to send you information about products and services of ours that we think you might like, as well as those of our partner companies. If you have agreed to receive marketing, you may always opt out at a later date. You have the right at any time to stop Cosball from contacting you for marketing purposes or giving your data to other members of the Cosball Group. If you no longer wish to be contacted for marketing purposes, please click here.</p>
            </b-col>
          </b-row>
          <b-row class="mt-5">
            <b-col col lg="12">
              <h5 id="dataProtectionRights">What are your data protection rights?</h5>
              <p>Cosball would like to make sure you are fully aware of all of your data protection rights.</p>
              <p>Every user is entitled to the following:</p>
              <p
                class="pl-5"
              >The right to access - You have the right to request Cosball for copies of your personal data. We may charge you a small fee for this service. The right to rectification - You have the right to request that Cosball correct any information you believe is inaccurate. You also have the right to request Cosball to complete information you believe is incomplete. The right to erasure - You have the right to request that Cosball erase your personal data, under certain conditions. The right to restrict processing - You have the right to request that Cosball restrict the processing of your personal data, under certain conditions. The right to object to processing - You have the right to object to Cosball's processing of your personal data, under certain conditions. The right to data portability - You have the right to request that Cosball transfer the data that we have collected to another organization, or directly to you, under certain conditions. If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>
              <p>
                email:
                <span class="link" @click="sendEmail">hello@cosball.io</span>
                <br>Call us at: +65 6633 5051
                <br>Or write to us:
                <br>
              </p>
              <p class="pl-5">
                10 Anson Road 23-14T
                <br>International Plaza
                <br>Singapore 079903
                <br>Singapore
              </p>
            </b-col>
          </b-row>
          <b-row class="mt-5">
            <b-col col lg="12">
              <h5 id="whatAreCookies">What are cookies?</h5>
              <p>Cookies are small files which are stored on a user's computer. They are designed to hold a modest amount of data specific to a particular client and website, and can be accessed either by the web server or the client computer. This allows the server to deliver a page tailored to a particular user, or the page itself can contain some script which is aware of the data in the cookie and so is able to carry information from one visit to the website (or related site) to the next.</p>
            </b-col>
          </b-row>
          <b-row class="mt-5">
            <b-col col lg="12">
              <h5 id="howWeUseCookies">How do we use cookies?</h5>
              <p>
                Cosball uses cookies in a range of ways to improve your experience on our website,
                including:
              </p>
              <ul>
                <li>Keeping you signed in</li>
                <li>Understanding how you use our website</li>
              </ul>
            </b-col>
          </b-row>
          <b-row class="mt-5">
            <b-col col lg="12">
              <h5 id="typeOfCookies">What types of cookies do we use?</h5>
              <p>There are a number of different types of cookies, however, our website uses:</p>
              <p class="pl-5">
                Functionality - Cosball uses these cookies so that we recognize you on our website and remember your previously selected preferences. These could include what language you prefer and location you are in. A mix of first-party and third-party cookies are used.
                <br>Advertising - Cosball uses these cookies to collect information about your visit to our website, the content you viewed, the links you followed and information about your browser, device, and your IP address. Cosball sometimes shares some limited aspects of this data with third parties for advertising purposes. We may also share online data collected through cookies with our advertising partners. This means that when you visit another website, you may be shown advertising based on your browsing patterns on our website.
              </p>
            </b-col>
          </b-row>
          <b-row class="mt-5">
            <b-col col lg="12">
              <h5 id="manageCookies">How to manage cookies</h5>
              <p>You can set your browser not to accept cookies, and the above website tells you how to remove cookies from your browser. However, in a few cases, some of our website features may not function as a result.</p>
            </b-col>
          </b-row>
          <b-row class="mt-5">
            <b-col col lg="12">
              <h5 id="otherWebsitesPrivacy">Privacy policies of other websites</h5>
              <p>The Cosball website contains links to other websites. Our privacy policy applies only to our website, so if you click on a link to another website, you should read their privacy policy.</p>
            </b-col>
          </b-row>
          <b-row class="mt-5">
            <b-col col lg="12">
              <h5 id="privacyChanges">Changes to our privacy policy</h5>
              <p>Cosball keeps its privacy policy under regular review and places any updates on this web page. This privacy policy was last updated on May 23rd 2019.</p>
            </b-col>
          </b-row>
          <b-row class="mt-5">
            <b-col col lg="12">
              <h5 id="howToContactUs">How to contact us</h5>
              <p>
                If you have any questions about Cosball's privacy policy, the data we hold on you, or you
                would like to exercise one of your data protection rights, please do not hesitate to contact us
              </p>
              <p>
                Email us at:
                <span class="link" @click="sendEmail">hello@cosball.io</span>
                <br>Call us at: +65 6633 5051
                <br>Or write to us:
              </p>
              <p class="pl-5">
                10 Anson Road 23-14T
                <br>International Plaza
                <br>Singapore 079903
                <br>Singapore
              </p>
            </b-col>
          </b-row>
          <b-row class="mt-5">
            <b-col col lg="12">
              <h5 id="contactAuthorities">How to contact the appropriate authority</h5>
              <p>
                Should you wish to report a complaint or if you feel that Cosball has not addressed your
                concern in a satisfactory manner, you may contact the Information Commissioner's Office.
              </p>
              <p>
                Email us at:
                <span class="link" @click="sendEmail">hello@cosball.io</span>
                <br>Call us at: +65 6633 5051
                <br>Or write to us:
              </p>
              <p class="pl-5">
                10 Anson Road 23-14T
                <br>International Plaza
                <br>Singapore 079903
                <br>Singapore
              </p>
            </b-col>
          </b-row>
        </b-container>
        <GotoTop goToTopId="title-container"></GotoTop>
      </div>
    </div>
    <div slot="footer">
      <LandingFooter></LandingFooter>
    </div>
  </LayoutContainer>
</template>

<script src="./Privacy.js" />
<style src="./Privacy.scss" lang="scss" />
