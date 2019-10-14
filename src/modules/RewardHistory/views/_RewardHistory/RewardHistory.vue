<template>
  <div>
    <LayoutContainer class="rewardhistory-wrapper">
      <template slot="body">
        <div class="rewardhistory-content">
          <section class="header-container">
            <b-row>
              <b-col lg="12" class>
                <div class="header custom-font">Reward History</div>
              </b-col>
            </b-row>
          </section>
          <section class="table-container">
            <b-row>
              <b-col cols="12" lg="6" class="per-page-container">
                <span class="text">Show</span>
                <b-form-select
                  class="records-per-page-dropdown"
                  v-model="perPage"
                  :options="pageOptions"
                  @change="getNEMTransactions()"
                ></b-form-select>
                <span class="text">records per page</span>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12">
                <b-table
                  hover
                  show-empty
                  responsive
                  :items="filteredRewardHistory"
                  :fields="fields"
                  :current-page="currentPage"
                  :per-page="perPage"
                  table-class="rewardhistory-table"
                >
                  <template slot="deadline" slot-scope="row">
                    <div
                      class="link"
                      @click="goToTransactionDetails(row.item)"
                    >{{row.value | formatDate('YYYY-MM-DD kk:mm:ss')}}</div>
                  </template>
                </b-table>
              </b-col>
            </b-row>
          </section>
          <section class="pagination-container">
            <b-row align-h="end" class="pagination-configuration">
              <ul class="pagination pagination-table b-pagination pagination-md">
                <li class="page-item">
                  <a
                    rel="prev"
                    href="#"
                    tabindex="-1"
                    role="menuitem"
                    class="page-link"
                    @click="getNEMTransactions()"
                  >&lt;&lt; First</a>
                </li>
                <li class="page-item">
                  <a
                    rel="next"
                    href="#"
                    tabindex="-1"
                    role="menuitem"
                    class="page-link"
                    @click="getNEMTransactions(-1)"
                  >Next &gt;&gt;</a>
                </li>
              </ul>
            </b-row>
          </section>
        </div>
      </template>
    </LayoutContainer>
  </div>
</template>

<script src="./RewardHistory.js" />
<style src="./RewardHistory.scss" lang="scss" />
