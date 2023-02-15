import { padding, textAlign } from '@mui/system';
import React from 'react'
import Detail from '../../styles/Detail.module.css';

function Product() {
  return (
    <div>
      <body>
        <ul class={Detail.breadcrumb}>
          <li><a href="#">Home</a></li>
          <li>Product</li>
        </ul>

        <section className={Detail.sproduct}>
          <div className={Detail.row}>
          <div >
              <img className={Detail.imgFluid}  src="https://ocs-k8s-prod.s3.ap-southeast-1.amazonaws.com/PRODUCT_1670820088034.jpeg" alt="" />
            </div>

            <div className={Detail.dete}>
              <div className="col-lg-6 col-md-12 clo-12">
                <h6>รหัสสินค้า 183149010</h6>
                <h3 className={Detail.py4}>น้ำดื่มสิงห์ 750 มล. (แพ็ก 12 ขวด)  <span class={Detail.badge}>New</span></h3>
                <h2>฿ 158</h2>
                <div className={Detail.box}>
                <input  type="number" min="1" max="10"></input>
                </div>
                <div className={Detail.btnCart}>
                <button className={Detail.buyBtn}>Add To Cart</button>
                </div>
                <div className={Detail.pd}>
                <h4 className="mt-5 mb-5">Product Details</h4>
                </div>
                <span>
                  <h4>ขนาดสินค้ารวมบรรจุภัณฑ์</h4>
                  <h5>(กxยxส) 18.8x25.8x31 ซม.</h5>
                  <h4>น้ำหนักรวมบรรจุภัณฑ์ 9.28 กก.</h4>
                  <h4>น้ำดื่มสิงห์ 1500 มล. (แพ็ก 6 ขวด)</h4>
                  <h5>- แบรนด์ : Singha (สิงห์)</h5>
                  <h5>- ขนาด : 1500 ml.</h5>
                  <h5>- อายุสินค้า : 2 ปี (นับจากวันผลิต)</h5>
                </span>
              </div>
            </div>
          </div>
        </section>
        <section>
        <h2>คุณสมบัติ</h2>
        <p>"ขอสงวนสิทธิ์ ไม่จัดส่งสินค้าสาขา 7-11 บนเกาะ (จำนวน 9 เกาะ ดังนี้ เกาะหลีเป๊ะ, เกาะช้าง, เกาะสีชัง, เกาะล้าน, เกาะเสม็ด, เกาะเต่า, เกาะพะงัน, เกาะพีพี, เกาะยาว)"
          - น้ำดื่มที่ได้รับการรับรองมาตรฐานจาก NSF
          - น้ำดื่มช่วยให้ร่างกายสดชื่นผิวพรรณสดใส</p>
        <hr className={Detail.rouded} />

        <h3 className={Detail.daw}>User Rating <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
        </h3>
        <h5>reviews</h5>

        <p>5 star</p>
        <div class={Detail.star} style={{textAlign: 'right', paddingTop: '2px', paddingBottom : '6px', color: 'white'}}>
        <div class={`${Detail.r5}`} style={{backgroundColor: '#04AA6D'}}>60%</div>
        </div>

        <p>4 star</p>
        <div class={Detail.star} style={{textAlign: 'right', paddingTop: '2px', paddingBottom : '6px', color: 'white'}}>
        <div class={`${Detail.r4}`} style={{backgroundColor: '#2196F3'}}>30%</div>
        </div>

        <p>3 star</p>
        <div class={Detail.star} style={{textAlign: 'right', paddingTop: '2px', paddingBottom : '6px', color: 'white'}}>
        <div class={`${Detail.r3}`} style={{backgroundColor: '#f3e035'}}>10%</div>
        </div>

        <p>2 star</p>
        <div class={Detail.star} style={{textAlign: 'right', paddingTop: '2px', paddingBottom : '6px', color: 'white'}}>
        <div class={`${Detail.r2}`} style={{backgroundColor: '#e29945'}}>4%</div>
        </div>

        <p>1 star</p>
        <div class={Detail.star} style={{textAlign: 'right', paddingTop: '2px', paddingBottom : '6px', color: 'white'}}>
        <div class={`${Detail.r1}`} style={{backgroundColor: '#dd3b3b'}}>15%</div>
        </div>
        </section>
        <div className={Detail.comment}>
          <h2>Comment</h2>
        </div>

        <div className={Detail.mimiAllBox}>
          <div className={Detail.mimiBox}>
            <div className={Detail.boxTop}>
              <div className={Detail.profile}>
                <div className={Detail.profileImg}>
                  <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
                </div>
                <div className={Detail.nameUser}>
                  <strong>Type Monleh</strong>
                  <span>@typerlopper</span>
                </div>
              </div>
            </div>
            <div className={Detail.reviws}>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
            </div>
            <div className={Detail.comment}>
              <p>ดื่มมาตลอดเกือบ 20 ปีแล้วค่ะ ยิ่งดื่มยิ่งรู้สึกดีต่อใจจริงๆค่ะ</p>
            </div>
          </div>
        </div>
      </body >
    </div >
  )
}

export default Product