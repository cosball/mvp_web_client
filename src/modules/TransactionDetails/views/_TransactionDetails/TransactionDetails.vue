<template>
  <div>
    <LayoutContainer class="transaction-details-wrapper">
      <template slot="body">
        <div class="block-details-content">
          <section class="header-container">
            <b-row>
              <b-col cols="12">
                <div class="header">Transaction Details</div>
                <div class="go-back" @click="goBack">
                  <font-awesome-icon icon="arrow-left"/>Back
                </div>
              </b-col>
            </b-row>
          </section>
          <section class="transaction-container">
            <b-row>
              <b-col md="4" cosl="12" class="label">Block:</b-col>
              <b-col md="8" cols="12" class="value">{{blockChainData.block}}</b-col>
            </b-row>
            <b-row>
              <b-col md="4" cols="12" class="label">Transaction Hash:</b-col>
              <b-col
                md="8"
                cols="12"
                class="value"
              >{{$store.state.TransactionDetails.transactionHash}}</b-col>
            </b-row>
            <b-row>
              <b-col md="4" cols="12" class="label">Sender:</b-col>
              <b-col md="8" cols="12" class="value">{{blockChainData.sender_pubkey}}</b-col>
            </b-row>
            <b-row>
              <b-col md="4" cols="12" class="label">Recipient:</b-col>
              <b-col md="8" cols="12" class="value">{{blockChainData.recipient_addr}}</b-col>
            </b-row>
            <b-row>
              <b-col md="4" cols="12" class="label">COSBALL Token:</b-col>
              <b-col md="8" cols="12" class="value">{{blockChainData.mosaics.reduce((acc, item) => acc + item.quantity, 0)}}</b-col>
            </b-row>
            <!-- <b-row>
              <b-col
                cols="12"
                v-for="(mosaic, index)  in blockChainData.mosaics"
                v-bind:key="index"
                class="p-0"
              >
                <b-row class="p-0 gray-container">
                  <b-col cols="12" md="4" class="label text-md-right">Id:</b-col>
                  <b-col cols="12" md="8" class="value">{{mosaic.mosaic_id}}</b-col>
                  <b-col cols="12" md="4" class="label text-md-right">Quantity:</b-col>
                  <b-col cols="12" md="8" class="value">{{mosaic.quantity}}</b-col>
                </b-row>
              </b-col>
            </b-row> -->
            <b-row>
              <b-col cols="12" md="4" class="label">Deadline:</b-col>
              <b-col cols="12" md="8" class="value">{{blockChainData.deadline}}</b-col>
            </b-row>
            <b-row>
              <b-col cols="12" md="4" class="label">Message:</b-col>
              <b-col cols="12" md="8">
                <b-row class="p-0 gray-container">
                  <b-col cols="12" class="value p-0">type: {{blockChainData.message.message_type}}</b-col>
                  <b-col cols="12" class="value p-0">
                    <font-awesome-icon icon="envelope"/>
                  </b-col>
                  <b-col cols="12" class="value p-0">{{blockChainData.message.data}}</b-col>
                </b-row>
              </b-col>
            </b-row>
          </section>
        </div>
      </template>
    </LayoutContainer>
  </div>
</template>

<script src="./TransactionDetails.js" />
<style src="./TransactionDetails.scss" lang="scss" />
