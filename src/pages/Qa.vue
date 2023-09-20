<template>
  <Breadcrumb :page_name="page_name"></Breadcrumb>
  <div class="Qa">
    <h2>Q&A</h2>
    <n-collapse>
      <n-collapse-item title="Q1：預訂蛋糕需要提早幾天預購？" name="1">
        <n-collapse>
          <n-collapse-item title="A1" name="1">
            <div>
              常態商品含例假日需至少提早五天付款成功下訂，特殊節慶商品(寶石蛋黃酥)、大量訂購(彌月/企業送禮)與客製商品則須以各品項與專案規定之付款訂購日期為主。
            </div>
          </n-collapse-item>
          <n-collapse-item title="A2" name="2">
            <div>
              常態商品含例假日需至少提早五天付款成功下訂，特殊節慶商品(寶石蛋黃酥)、大量訂購(彌月/企業送禮)與客製商品則須以各品項與專案規定之付款訂購日期為主。
            </div>
          </n-collapse-item>
        </n-collapse>
      </n-collapse-item>
      <n-collapse-item title="Q2：宅配可以選擇送達日期嗎？" name="2">
        <div>
          只能指定周一到周四為「寄出日期」，無法完整指定送達日期。請預抓寄出日後1到3天為收貨緩衝日。
        </div>
      </n-collapse-item>
      <n-collapse-item
        title="Q3：付款下單之後可以更改到店自取日期、宅配出貨日期與品項數量嗎？"
        name="3"
      >
        <div>
          <p>如分開出貨之大量訂購訂單則以第一次出貨之日期為準，往前推14天方可更改。</p>
          <p>母親節、中秋節、農曆年…等等節慶，訂單一付款確認則無法改單。</p>
        </div>
      </n-collapse-item>
      <n-collapse-item title="Q4：預訂蛋糕需要提早幾天預購？" name="4">
        <n-collapse>
          <n-collapse-item title="A1" name="1">
            <div>
              常態商品含例假日需至少提早五天付款成功下訂，特殊節慶商品(寶石蛋黃酥)、大量訂購(彌月/企業送禮)與客製商品則須以各品項與專案規定之付款訂購日期為主。
            </div>
          </n-collapse-item>
          <n-collapse-item title="A2" name="2">
            <div>
              常態商品含例假日需至少提早五天付款成功下訂，特殊節慶商品(寶石蛋黃酥)、大量訂購(彌月/企業送禮)與客製商品則須以各品項與專案規定之付款訂購日期為主。
            </div>
          </n-collapse-item>
        </n-collapse>
      </n-collapse-item>
      <n-collapse-item title="Q5：宅配可以選擇送達日期嗎？" name="5">
        <div>
          只能指定周一到周四為「寄出日期」，無法完整指定送達日期。請預抓寄出日後1到3天為收貨緩衝日。
        </div>
      </n-collapse-item>
      <n-collapse-item
        title="Q6：付款下單之後可以更改到店自取日期、宅配出貨日期與品項數量嗎？"
        name="6"
      >
        <div>
          <p>如分開出貨之大量訂購訂單則以第一次出貨之日期為準，往前推14天方可更改。</p>
          <p>母親節、中秋節、農曆年…等等節慶，訂單一付款確認則無法改單。</p>
        </div>
      </n-collapse-item>
    </n-collapse>
    <h2>訂購條約</h2>
    <p>
      當您於結帳購物車時付款完畢並下單成功，即表示您已知悉並同意此約定條款之全部內容。
    </p>
    <p>
      一、cenele.
      保留訂單接受與否之權利，若因天災、人禍等特殊狀況導致無法接受您的訂單，將以電話、Email或私訊其中之方式聯繫。
    </p>
    <p>
      二、您於cenele網站下單時，請務必填寫正確的資料（如電話、MAIL等連絡資訊），如因您的資料不正確，而導致cenele無法聯繫上您或有其他的損害，均與cenele無涉。
    </p>
  </div>
</template>

<script>
import Breadcrumb from "../components/Breadcrumb.vue";
export default {
  data() {
    return {
      page_name: "Q&A",
    };
  },
  components: {
    Breadcrumb,
  },
};
</script>

<style scoped lang="scss">
@import "../sass/style.css";
.Qa {
  height: 100vh;
  text-align: left;
  h2 {
    margin: 1rem;
  }
}
</style>
