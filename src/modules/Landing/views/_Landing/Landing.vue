<template>
  <div>
    <LayoutContainer class="landing-wrapper">
      <LandingHeader slot="header"></LandingHeader>
      <template slot="body" class="body-container">
        <b-container class="cosball-content">
          <b-row class="justify-content-md-left">
            <b-col col lg="8">
              <h1>THE WORLD'S FIRST PERSONALIZED DAILY COSMETICS SOLUTION.</h1>
              <p>USING CUTTING EDGE TECHNOLOGY, THE SKIN CONDITIONS OF PEOPLE USING COSMETIC PRODUCTS ARE COLLECTED AS BIG DATA.</p>
              <p>BASED ON THE BIG DATA COLLECTED, THE COSBALL AI PROVIDES PERSONALIZED COSMETIC SOLUTIONS.</p>
            </b-col>
          </b-row>
          <b-row class="justify-content-md-left mb-1 mt-3">
            <b-col lg="5" class="mb-5 mt-3">
              <b-card title="Entered Skin Data Per Day">
                <div class="chartcard">
                  <bar-chart-skin-data-per-day
                    ref-id="skindata-per-period"
                    :list="pieBarChartData"
                  ></bar-chart-skin-data-per-day>
                </div>
              </b-card>
            </b-col>
            <b-col lg="7" class="mb-5 mt-3">
              <b-card title="NEM Cosball Blockchain Transactions">
                <div class="chart-container">
                  <line-chart-nem-stats ref-id="nem-block-times" :list="lineChartData"></line-chart-nem-stats>
                </div>
              </b-card>
            </b-col>
          </b-row>
        </b-container>
      </template>
      <LandingFooter slot="footer"></LandingFooter>
    </LayoutContainer>
  </div>
</template>

<script src="./Landing.js" />
<style src="./Landing.scss" lang="scss" />
