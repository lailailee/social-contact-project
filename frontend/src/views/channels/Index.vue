<template>
  <div class="layui-container">
    <div class="layui-row layui-col-space15">
      <div class="layui-col-md8">
        <Top></Top>
        <List></List>
      </div>
      <div class="layui-col-md4">
        <!-- <Tips></Tips>
        <Sign></Sign>-->
        <HotList></HotList>
        <Ads></Ads>
        <Links></Links>
      </div>
    </div>
  </div>
</template>

<script>
// import Tips from '@/components/sidebar/Tips'
import Links from '@/components/sidebar/Links'
// import Sign from '@/components/sidebar/Sign'
import HotList from '@/components/sidebar/HotList'
import Ads from '@/components/sidebar/Ads'
import List from '@/components/contents/List'
import Top from '@/components/contents/Top'

export default {
  name: 'index',
  components: {
    Links,
    HotList,
    Ads,
    List,
    Top
  }
}
</script>

<style>
</style>
