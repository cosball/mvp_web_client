<template>
  <div>
    <LayoutContainer class="skindata-wrapper">
      <template slot="body">
        <div class="skindata-content">
          <section class="header-container">
            <b-row>
              <b-col lg="9" class>
                <div class="header custom-font">Skin Data</div>
              </b-col>
              <b-col lg="3" md="12">
                <a role="button" tabindex="0" class="add-button" @click="addNewSkinData">
                  <font-awesome-icon icon="plus" class="icon-edit"></font-awesome-icon> Add Skin Data
                </a>
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
                  @change="getSkinData()"
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
                  :items="filteredSkinData"
                  :fields="fields"
                  :current-page="currentPage"
                  :per-page="perPage"
                  table-class="skindata-table"
                >
                  <template slot="createdAt" slot-scope="row">
                    <div
                      class="link"
                      @click="goToTransactionDetails(row.item)"
                    >{{row.value | formatDate('YYYY-MM-DD kk:mm:ss')}}</div>
                  </template>
                  <template slot="actions" slot-scope="row">
                    <font-awesome-icon
                      class="icon-edit"
                      icon="eye"
                      @click="viewSkinData(row.item)"
                    />
                  </template>
                </b-table>
              </b-col>
            </b-row>
          </section>
          <section class="pagination-container">
            <b-row>
              <b-col lg="12" md="12">
                <b-row align-h="end" class="pagination-configuration">
                  <ul class="pagination pagination-table b-pagination pagination-md">
                    <li class="page-item">
                      <a
                        rel="prev"
                        href="#"
                        tabindex="-1"
                        role="menuitem"
                        class="page-link"
                        @click="getSkinData()"
                      >&lt;&lt; First</a>
                    </li>
                    <li class="page-item">
                      <a
                        rel="next"
                        href="#"
                        tabindex="-1"
                        role="menuitem"
                        class="page-link"
                        @click="getSkinData(-1)"
                      >Next &gt;&gt;</a>
                    </li>
                  </ul>
                </b-row>
              </b-col>
            </b-row>
          </section>
        </div>
      </template>
    </LayoutContainer>
  </div>
</template>

<script src="./SkinData.js" />
<style src="./SkinData.scss" lang="scss" />
