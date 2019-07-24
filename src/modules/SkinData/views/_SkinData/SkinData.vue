<template>
  <div>
    <LayoutContainer class="skindata-wrapper">
      <template slot="body">
        <div class="skindata-content">
          <section class="header-container">
            <b-row>
              <b-col cols="12" class>
                <div class="header">Skin Data</div>
              </b-col>
            </b-row>
          </section>
          <section class="table-container">
            <b-row>
              <b-col cols="12" lg="6" class="per-page-container">
                <b-form-select
                  class="records-per-page-dropdown"
                  v-model="perPage"
                  :options="pageOptions"
                  @change="onChangeRecordPerPage"
                ></b-form-select>
                <span class="text">records per page</span>
              </b-col>
              <!--
              <b-col cols="12" lg="6" class="filter-wrapper">
                <b-input-group>
                  <b-form-input v-model="filter.filterSearch" placeholder="Filter"></b-form-input>
                  <b-form-select
                    slot="append"
                    class="fields"
                    v-model="filter.selectedFilterField"
                    :options="filter.filterFieldOptionsList"
                    @change="onChangeRecordPerPage"
                  ></b-form-select>
                  <b-input-group-text @click="onFilter" class="search-button" slot="append">
                    <font-awesome-icon slot="append" icon="search"/>
                  </b-input-group-text>
                  <b-input-group-text
                    @click="resetTableListConfiguration"
                    class="reset-button"
                    slot="append"
                  >
                    <font-awesome-icon slot="append" icon="redo-alt"/>
                  </b-input-group-text>
                </b-input-group>
              </b-col>
              <b-col cols="12" class="filter-by-wrapper">
                <div
                  class="filter-by"
                  v-for="(filterBy, index) in filter.filterByList"
                  v-bind:key="index"
                >
                  <span>{{filterBy.fieldLabel}}: {{filterBy.filterSearch}}</span>
                  <span class="delete" @click="deleteFilter(index)">x</span>
                </div>
              </b-col>
              -->
            </b-row>
            <b-row>
              <b-col cols="12">
                <b-table
                  striped
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
                    <div class="link" @click="goToTransactionDetails(row.item)">{{row.value | formatDate('YYYY-MM-DD kk:mm:ss')}}</div>
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
              <b-col lg="3" md="12">
                <custom-button
                  class="add-button"
                  v-bind:class="{ 'disabled': blockAddingSkinData }"
                  @click="addNewSkinData"
                  :inverseColor="true"
                >Add</custom-button>
              </b-col>
              <b-col lg="9" md="12">
                <b-row align-h="end" class="pagination-configuration">
                  <div class="entries">{{entriesTxt}}</div>
                  <div class="select-box">
                    <b-form-select class="pages" v-model="currentPage" :options="pageList"></b-form-select>
                  </div>
                  <div class="pagination-for-table">
                    <b-pagination
                      v-model="currentPage"
                      :total-rows="totalRows"
                      :per-page="perPage"
                      class="pagination-table"
                      first-text="First"
                      last-text="Last"
                      @input="onChangeTablePagination()"
                    ></b-pagination>
                  </div>
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
