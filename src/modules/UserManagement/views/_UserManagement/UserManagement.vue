<template>
  <div>
    <LayoutContainer class="user-management-wrapper">
      <template slot="body">
        <div class="user-management-content">
          <section class="header-container">
            <b-row>
              <b-col cols="12" class>
                <div class="header">User Management</div>
              </b-col>
            </b-row>
          </section>
          <section class="table-container">
            <b-row>
              <b-col cols="12">
                <div class="per-page-container">
                  <b-form-select
                    class="records-per-page-dropdown"
                    v-model="perPage"
                    :options="pageOptions"
                    @change="onChangeRecordPerPage"
                  ></b-form-select>
                  <span class="text">records per page</span>
                </div>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12">
                <b-table
                  striped
                  hover
                  show-empty
                  responsive
                  :items="userManagementList"
                  :fields="fields"
                  :current-page="currentPage"
                  :per-page="perPage"
                  table-class="user-management-table"
                >
                  <template slot="actions" slot-scope="row">
                    <font-awesome-icon
                      class="icon-edit"
                      icon="pencil-alt"
                      @click="editUser(row.item)"
                    />
                  </template>
                </b-table>
              </b-col>
            </b-row>
          </section>
          <section class="pagination-container">
            <b-row>
              <!-- <b-col lg="3" md="12">
                <custom-button class="add-button" @click="addNewUser" :inverseColor="true">Add</custom-button>
              </b-col> -->

              <b-col lg="12" md="12">
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

<script src="./UserManagement.js" />
<style src="./UserManagement.scss" lang="scss" />
