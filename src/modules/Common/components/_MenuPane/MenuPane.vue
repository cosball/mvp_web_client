<template>
  <LayoutContainer class="menu-pane-wrapper">
    <template slot="body">
      <section class="menu-items">
        <div class="sidebar">
            <div v-for="(item, index) in items" :key="index" class="menu-item">
              <!-- <b-tooltip :target="`${''+index}`" :title="item.label" boundary="content-left" placement="left"></b-tooltip> -->
              <RowItem :id="`${''+index}`"
                :class="{ 'active': item.routeName === $route.name}"
                @click.native="navigateTo(item)">
                <font-awesome-icon :title="item.label" slot="contentLeft" :icon="item.icon"/>
                <div class="d-none d-md-block" slot="contentMain">{{item.label}}</div>
              </RowItem>
            </div>
        </div>
      </section>
    </template>
  </LayoutContainer>
</template>

<script src="./MenuPane.js" />
<style src="./MenuPane.scss" lang="scss" />
